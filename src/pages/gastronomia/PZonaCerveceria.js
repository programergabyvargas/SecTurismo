import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PZonaCerveria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataZona: {},
      localidadesDataZona: [],
      carousel: [],
      links: [],
      atractivos: []
    };
    this.getData = this.getData.bind(this);
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
        console.log("zonaas");
        console.log(response.data.data.registros[0].nombre);
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
      url: `${
        process.env.REACT_APP_API
      }/gastronomia/'Camino de la Cerveza Artesanal de ${this.props.match.params.zona}'`,
      responseType: "json"
    })
      .then(response => {
        console.log(`Camino de la Cerveza Artesanal de ${this.props.match.params.zona}`);
        console.log(response.data.data);
        if (response.data.data.count > 0) {
          self.setState(
            {
              localidadesDataZona: response.data.data.registros
            },
            () => {
              //Para armar el Carousel y los Links
              axios({
                method: "get",
                headers: {
                  Authorization: token
                },
                url: `${process.env.REACT_APP_API}/zona/${
                  this.props.match.params.id
                }/creer/'Creer "Camino de La Fe Circuito del Morro"'`,
                responseType: "json"
              })
                .then(response => {
                  if (response.data.imagenes.length > 0) {
                    //Carousel
                    var activo = false;
                    var fotos = response.data.imagenes.map((a, index) => {
                      if (a.imagen === "default.jpg") {
                        return null;
                      }
                      let estilo = {
                        backgroundImage: `url(${
                          process.env.REACT_APP_API_RECURSOS
                        }/atractivos/${a.imagen})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      };
                      if (!activo) {
                        activo = true;
                        return (
                          <div
                            key={`caro-${a.idlocalidad}-${index}`}
                            className="carousel-item active"
                            style={estilo}
                          >
                            <h5 className="pd-top">{a.nombre_localidad}</h5>
                            <h5>{a.nombre_atractivo}</h5>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={`caro-${a.idlocalidad}-${index}`}
                            className="carousel-item"
                            style={estilo}
                          >
                            <h5 className="pd-top">{a.nombre_localidad}</h5>
                            <h5>{a.nombre_atractivo}</h5>
                          </div>
                        );
                      }
                    });
                    self.setState({ carousel: fotos });
                    //Links
                    var links = response.data.imagenes.map((a, index) => {
                      /*
                                let estilo = {
                                    backgroundImage: `url(${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.imagen})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                };
                                */
                      //Debe pasar a Link!
                      return (
                        <Link
                          to={`/localidad/${a.idlocalidad}`}
                          key={`img-link-${a.idlocalidad}-${index}`}
                        >
                          <img
                            className="img-fluid"
                            style={{
                              borderColor: `#${self.state.dataZona.color}`
                            }}
                            src={`${
                              process.env.REACT_APP_API_RECURSOS
                            }/atractivos/${a.imagen}`}
                            title={a.nombre_atractivo}
                            alt="Thubmail"
                          />
                        </Link>
                      );
                    });
                    self.setState({ links: links });
                  } else {
                    console.log("Nada de nada!");
                  }
                  this.setState({ loading: false });
                })
                .catch(error => {
                  console.log(error);
                  this.setState({ loading: false });
                });
            }
          );
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
    //console.log(atractivosData);
    const localidades = this.state.localidadesDataZona.map(atrac => {
      return (
        <Link to={`/gastronomia/${atrac.id}`} key={`cerveceria-${atrac.id}`}>
          <div className="row mb-5">
            <div className="col">
              <div className="atractivo-full-item">
                <div className="imagen">
                  <span
                    style={{ backgroundColor: `#${this.state.dataZona.color}` }}
                  >
                    {atrac.nombre_localidad}
                  </span>
                  <img
                    className="img-fluid"
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${
                      atrac.imagenes[0].imagen
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
                Caminos de la Cerveza Artesanal de "{this.state.dataZona.nombre}
                "
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
                      {this.state.dataZona.descripcionCerveceria}
                    </p>
                    <div>
                      <h3 style={{ color: `#${this.state.dataZona.color}` }}>
                        Postas Cerveceras de
                      </h3>
                      <h1 style={{ color: `#${this.state.dataZona.color}` }}>
                        {this.state.dataZona.nombre}
                      </h1>
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

PZonaCerveria.contextType = Consumer;
export default PZonaCerveria;
