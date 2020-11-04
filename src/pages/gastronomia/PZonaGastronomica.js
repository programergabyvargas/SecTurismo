import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PZonaGastronomica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataZona: {},
      localidadesDataZona: [{}],
      resultadofinal: [{}],
      carousel: [],
      links: [],
      atractivos: []
    };
    this.getData = this.getData.bind(this);
    this.suprimirRepetidos = this.suprimirRepetidos.bind(this);
  }

  getData() {
    var token = this.context.token;
    //verificar que el id sea un número > a 0
    //Datos de la Zona
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token
      },
      url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}`,
      /*
            auth: {
                username: 'janedoe',
                password: 's00pers3cret'
            },
            */
      responseType: "json"
    })
      .then(response => {
        if (response.data.data.count > 0) {
          self.setState({
            dataZona: response.data.data.registros[0]
          });
        } else {
          //Error no se enocntró el id
        }
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
    //Localidades de la Zona
    axios({
      method: "get",
      headers: {
        Authorization: token
      },
      url: `${process.env.REACT_APP_API}/gastronomia/${
        this.props.match.params.id
      }/zona`,
      responseType: "json"
    })
      .then(response => {
        if (response.data.data.length > 0) {
          self.setState({
            localidadesDataZona: response.data.data
          });
          this.setState({ loading: true });
          this.suprimirRepetidos();
        } else {
          //Error no se enocntró el id
        }
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  }
  suprimirRepetidos() {
    let i = 0;
    for (i = 0; i < parseInt(this.state.localidadesDataZona.length); i++) {
      this.state.resultadofinal.push(this.state.localidadesDataZona[i]);
      let a = 0;
      for (a = 0; a < parseInt(this.state.localidadesDataZona.length); a++) {
        if (
          this.state.localidadesDataZona[i].id ===
          this.state.localidadesDataZona[a].id
        ) {
          this.state.localidadesDataZona.splice(i, 1);
        }
      }
    }
    this.state.resultadofinal.splice(0, 1);
    this.setState({ loading: false });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getData();
    }
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.getData();
  }

  render() {
    const localidades = this.state.resultadofinal.map(atrac => {
      return (
        <Link to={`/gastronomia/${atrac.id}`} key={`cerveceria-${atrac.id}`}>
          <div className="row mb-5">
            <div className="col">
              <div className="atractivo-full-item">
                <div className="imagen">
                  <span
                    style={{ backgroundColor: `#${this.state.dataZona.color}` }}
                  >
                    {atrac.nombre}
                  </span>
                  <img
                    className="img-fluid"
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${
                      atrac.imagen
                    }`}
                    alt="Img"
                  />
                </div>
                <div
                  className="titulo"
                  style={{ backgroundColor: `#${this.state.dataZona.color}` }}
                >
                  <h3>{atrac.nombre}</h3>
                </div>
                <div className="body">
                  <p className="text-dark mb-2" style={{ height: "200px" }}>
                    {atrac.descripcion}
                  </p>
                  <span
                    className="btn-novedades"
                    style={{ backgroundColor: `#${this.state.dataZona.color}` }}
                  >
                    Leer <i className="fas fa-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
    
    return (
      <div className="Zona">
        {this.state.loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div
              className="ZonaDetalle-titulo"
              style={{
                backgroundColor: `#${this.state.dataZona.color}`,
                marginTop: "150px"
              }}
            >
              <h3 style={{ color: `#${this.state.dataZona.color}` }}>
                CAMINO DE LOS SABORES PUNTANOS "{this.state.dataZona.nombre}"
              </h3>
            </div>
            <div className="container mb-5">
              <div className="row">
                <div className="col ZonaDetalle-Body">
                  <div id="mapasl">
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/mapas/mini/${
                        this.state.dataZona.mini
                      }`}
                      alt="SL"
                    />
                  </div>
                  <div id="texto">
                    <p style={{ fontSize: "20px" }}>
                      {this.state.dataZona.descripcionGastronomia}
                    </p>
                    <div>
                      <h3 style={{ color: `#${this.state.dataZona.color}` }}>
                        ¡Vení a Disfrutar! 
                      </h3>
                    </div>
                  </div>
                  <div id="mapa">
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${
                        this.state.dataZona.mapa
                      }`}
                      alt="Mapa"
                    />
                  </div>
                </div>
              </div>
              <div className="container" style={{ marginTop: "" }}>
                {localidades}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PZonaGastronomica.contextType = Consumer;
export default PZonaGastronomica;
