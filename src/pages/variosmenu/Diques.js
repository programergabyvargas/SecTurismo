import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PDiques extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: 0,
      data: [
        {
          descripcion: "",
          imagenes: [{ imagen: "default.jpg" }]
        }
      ],
      index: 0
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token
      },
      url: `${process.env.REACT_APP_API}/atractivo/'diques'`,
      responseType: "json"
    })
      .then(response => {
        if (response.data.data.count > 0) {
          self.setState({
            data: response.data.data.registros
          });
        } else {
          //Error no se enocntró el id
        }
      })
      .catch(error => {
        console.log(error);
      });
    self.setState({ loading: false });
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState(
      {
        id: this.props.match.params.id
      },
      () => {
        this.getData();
      }
    );
  }

  render() {
    const loading = this.state.loading;
    var ListadoAtractivofull = null;
    if (this.state.data.length > 0) {
      ListadoAtractivofull = this.state.data.map(atrac => {
        let descripcion = "";
        if (atrac.descripcion.length > 395) {
          descripcion = atrac.descripcion.substr(0, 395) + "...";
        } else {
          descripcion = atrac.descripcion;
        }
        let indice = Math.floor(Math.random() * atrac.imagenes.length);
        return (
          <Link to={`/atractivo/${atrac.id}`} key={`atractivo-${atrac.id}`}>
            <div className="row mb-5">
              <div className="col">
                <div className="atractivo-full-item">
                  <div className="imagen">
                    <span style={{ backgroundColor: `#${atrac.color}` }}>
                      {atrac.localidad} - {atrac.tipo}
                    </span>
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${
                        atrac.imagenes[indice].imagen
                      }`}
                      alt="Img"
                    />
                  </div>
                  <div
                    className="titulo"
                    style={{ backgroundColor: `#${atrac.color}` }}
                  >
                    <h3>{atrac.nombre}</h3>
                  </div>
                  <div className="body">
                    <p className="text-dark mb-2">{descripcion}</p>
                    <span className="btn-novedades">
                      Leer <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }

    return (
      <React.Fragment>
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div className="container ListadoAtractivofull">
            <div className="ZonaLocalidad-titulo" style={{backgroundColor: `#722789`}}>
                            <h3 style={{color: `#722789`}}>Diques</h3>
                        </div>
              <h4 className="" style={{ color: `#808080` }}>
                A lo largo de más de tres décadas, el Estado Provincial trabajó
                en la construcción de grandes obras de almacenamiento y
                distribución del agua. San Luis, con 20 diques, es la provincia
                con mayor cantidad de embalses de todo el país, que garantizan
                seguridad hídrica para las futuras generaciones y brindan
                excelentes propuestas turísticas. Deportes náuticos, pesca,
                paseos en botes, sol, playa y descanso son algunas de las
                tentadoras opciones recreativas que podés disfrutar en los
                hermosos espejos de agua sanluiseños.
              </h4>
              <div style={{ float: "right" }} className="Recorridos">
                <div className="reco-titulo">
                  <Link to="/PPermisoPesca" className="link">
                    <span className="reco-t-sub2">Ver Permisos</span>
                  </Link>
                </div>
              </div>
              <br />
            </div>
            <br />
            <br />

            <div className="container">{ListadoAtractivofull}</div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

PDiques.contextType = Consumer;
export default PDiques;

/*import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import axios from "axios";

class PArchiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      carousel: []
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token
      },
      url: `${process.env.REACT_APP_API}/eventos/50`,
      responseType: "json"
    })
      .then(response => {
        if (response.data.data.count > 0) {
          let activo = false;
          let carousel = response.data.data.registros.map((a, index) => {
            if (a.imagen === "default.jpg") {
              return null;
            }
            let estilo = {
              backgroundImage: `url(https://www.revistasavia.com/wp-content/uploads/2018/03/analisis-08-1.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            };
            if (!activo) {
              activo = true;
              return (
                <div
                  key={`caro-${index}`}
                  className="carousel-item active"
                  style={estilo}
                />
              );
            } else {
              return (
                <div
                  key={`caro-${index}`}
                  className="carousel-item"
                  style={estilo}
                />
              );
            }
          });
          self.setState({
            data: response.data.data.registros,
            carousel: carousel,
            loading: false
          });
        } else {
          //No hay registros o el id no es correcto
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.getData();
  }

  render() {
    const carousel = this.state.carousel;
    const items = this.state.data.map(e => {
      let estilo = {
        backgroundImage: `url(${
          process.env.REACT_APP_API_RECURSOS
        }/recursos/eventos/${e.foto_uno})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      };
      let dfecha = e.dfecha.split("-");
      let hfecha = e.hfecha.split("-");
      dfecha = `${dfecha[2]}/${dfecha[1]}`;
      hfecha = `${hfecha[2]}/${hfecha[1]}`;
      //let numero = Math.floor(Math.random() * (4 - 1 + 1)) + 1; //Color random
      return (
        <div key={`evento-${e.id}`} className="col-lg-4 col-md-6">
          <div className="single-card">
            <Link to={`/evento/${e.id}`} className="eve-link">
              <div className="card-bg" style={estilo} />
              <div className="card-content">
                <h2>{e.titulo}</h2>
                <h3 style={{ background: "#" + e.color }}>
                  {dfecha} al {hfecha} - {e.localidad}
                </h3>
              </div>
            </Link>
            {}
          </div>
        </div>
      );
    });
    return (
      <div className="PEventos">
        {this.state.loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div className="container archivosApp">
              <div className="row mb-3" style={{ paddingTop: "150px" }}>
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>Diques y Embalses</h3>
                </div>
                <h4 className="" style={{ color: `#808080` }}>
                  A lo largo de más de tres décadas, el Estado Provincial
                  trabajó en la construcción de grandes obras de almacenamiento
                  y distribución del agua. San Luis, con 20 diques, es la
                  provincia con mayor cantidad de embalses de todo el país, que
                  garantizan seguridad hídrica para las futuras generaciones y
                  brindan excelentes propuestas turísticas. Deportes náuticos,
                  pesca, paseos en botes, sol, playa y descanso son algunas de
                  las tentadoras opciones recreativas que podés disfrutar en los
                  hermosos espejos de agua sanluiseños.
                </h4>
                <br />
                <Link to={`/atractivo/85`} key={`atractivo/85`}>
                  <div className="row mb-5">
                    <div className="col">
                      <div className="atractivo-full-item">
                        <div className="imagen">
                          <span style={{ backgroundColor: `#BF3376` }}>
                            Embalse
                          </span>
                          <img
                            className="img-fluid"
                            src={`${
                              process.env.REACT_APP_API_RECURSOS
                            }/atractivos/0_85_20181023095349.jpg`}
                            alt="Img"
                          />
                        </div>
                        <div
                          className="titulo"
                          style={{ backgroundColor: `#BF3376` }}
                        >
                          <h3>La Huertita</h3>
                        </div>
                        <div className="body">
                          <p className="text-dark mb-2">
                            Inaugurado en el año 1981, está ubicado sobre el
                            cauce del Río Quines a 15 Km. al este de la
                            localidad de San Martín, a 7 Km. del municipio y a
                            159 Km. de la Ciudad de San Luis. Con sus 470 Ha.
                            provee de riego a una extensa área cultivada en la
                            zona de Quines y Candelaria. Es un lago de aguas
                            tranquilas en un marco natural excepcional, poblado
                            de pejerreyes y de truchas arco iris, que también
                            ofrece las condiciones apropiadas para la práctica
                            de todo tipo de deportes acuáticos.
                          </p>
                          <span className="btn-novedades">
                            Leer <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={`/atractivo/98`} key={`atractivo/98`}>
                  <div className="row mb-5">
                    <div className="col">
                      <div className="atractivo-full-item">
                        <div className="imagen">
                          <span style={{ backgroundColor: `#A3BD31` }}>
                            Dique
                          </span>
                          <img
                            className="img-fluid"
                            src={`${
                              process.env.REACT_APP_API_RECURSOS
                            }/atractivos/0_98_20181023105059.jpg`}
                            alt="Img"
                          />
                        </div>
                        <div
                          className="titulo"
                          style={{ backgroundColor: `#A3BD31` }}
                        >
                          <h3>Dique de Luján</h3>
                        </div>
                        <div className="body">
                          <p className="text-dark mb-2">
                            Fue construido en 1958 sobre el río homónimo. La RN
                            Nº 146 es el acceso a este imponente embalse, que
                            está ubicado a 3,6 km del ingreso a la localidad de
                            Luján y a 125 Km. de San Luis, en el departamento
                            Ayacucho. Su encantadora apariencia de costas
                            escarpadas ofrece como lugar de playas y acceso al
                            río el sector sur del embalse..
                          </p>
                          <span className="btn-novedades">
                            Leer <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={`/atractivo/98`} key={`atractivo/98`}>
                  <div className="row mb-5">
                    <div className="col">
                      <div className="atractivo-full-item">
                        <div className="imagen">
                          <span style={{ backgroundColor: `#A3BD31` }}>
                            Dique
                          </span>
                          <img
                            className="img-fluid"
                            src={`${
                              process.env.REACT_APP_API_RECURSOS
                            }/atractivos/0_98_20181023105059.jpg`}
                            alt="Img"
                          />
                        </div>
                        <div
                          className="titulo"
                          style={{ backgroundColor: `#A3BD31` }}
                        >
                          <h3>Dique de Luján</h3>
                        </div>
                        <div className="body">
                          <p className="text-dark mb-2">
                            Fue construido en 1958 sobre el río homónimo. La RN
                            Nº 146 es el acceso a este imponente embalse, que
                            está ubicado a 3,6 km del ingreso a la localidad de
                            Luján y a 125 Km. de San Luis, en el departamento
                            Ayacucho. Su encantadora apariencia de costas
                            escarpadas ofrece como lugar de playas y acceso al
                            río el sector sur del embalse..
                          </p>
                          <span className="btn-novedades">
                            Leer <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to={`/atractivo/${atrac.id}`}
                  key={`atractivo-${atrac.id}`}
                >
                  <div className="row mb-5">
                    <div className="col">
                      <div className="atractivo-full-item">
                        <div className="imagen">
                          <span style={{ backgroundColor: `#${atrac.color}` }}>
                            {atrac.localidad} - {atrac.tipo}
                          </span>
                          <img
                            className="img-fluid"
                            src={`${
                              process.env.REACT_APP_API_RECURSOS
                            }/atractivos/${atrac.imagenes[indice].imagen}`}
                            alt="Img"
                          />
                        </div>
                        <div
                          className="titulo"
                          style={{ backgroundColor: `#${atrac.color}` }}
                        >
                          <h3>{atrac.nombre}</h3>
                        </div>
                        <div className="body">
                          <p className="text-dark mb-2">{descripcion}</p>
                          <span className="btn-novedades">
                            Leer <i className="fas fa-arrow-right" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PArchiApp.contextType = Consumer;

export default PArchiApp;
*/
