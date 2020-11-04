import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PTelefonosUtiles extends Component {
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
      url: `${process.env.REACT_APP_API}/atractivo/moto/'10'`,
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
                      {atrac.localidad}
                    </span>
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${atrac.imagenes[indice].imagen}`}
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
              <div
                className="ZonaLocalidad-titulo"
                style={{ backgroundColor: `#722789` }}
              >
                <h3 style={{ color: `#722789` }}>TELÉFONOS </h3>
              </div>
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "300px" }}>
                  <span className="reco-t-sub2">TELÉFONOS Gratis:</span>
                </div>
              </div>
              <br />
              <br />
              <br />

              <h4 className="" style={{ color: `#808080` }}>
                <li>EMERGENCIAS 911 </li> <li>SEMPRO 107 </li>
                <li>ASISTENCIA A LA VÍCTIMA DE VIOLENCIA DE GÉNERO 144</li>{" "}
                <li>BOMBEROS 100 </li>
                <li>POLICÍA 101 </li>
                <li>SERVICIO DE ASISTENCIA A LA VÍCTIMA DEL DELITO 102</li>
                <li> DEFENSA CIVIL 103</li>
                <li>EMERGENCIA AMBIENTAL Juvennat 105</li>
                <li> HOSPITAL 107-118</li>
              </h4>
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "350px" }}>
                  <span className="reco-t-sub2">TELÉFONOS DE INTERÉS:</span>
                </div>
              </div>
              <br />
              <br />
              <br />

              <h4 className="" style={{ color: `#808080` }}>
                <li>Comisaría del Menor (0266) 4423509</li>{" "}
                <li>Aeropuerto Ciudad de San Luis (0266) 4422457 / 4422427 </li>
                <li>Terminal de Ómnibus (0266) 452000 Int 6089</li>{" "}
                <li>Hospital Materno Infantil (0266) 4425045</li>
                <li>Policía de la Provincia de San Luis (0266) 4423236 </li>
                <li>Policía Federal (0266) 4426777 / 4424205</li>
                <li>Cruz Roja (0266) 4431911</li>
              </h4>
              <div className="Recorridos">
                <div className="reco-titulo" style={{ width: "350px" }}>
                  <span className="reco-t-sub2">OFICINAS DE INFORMES:</span>
                </div>
              </div>
              <br></br>
              <h4 className="" style={{ color: `#808080` }}>
                <li>
                  Oficina de Informes de San Luis +54 (266) 4423479 - +54 (266)
                  4423957 – Au. Información: (266) 4452000 INT. 4049
                </li>
                <li>
                  Oficina de informes Villa de Merlo +54 (266) 4891372 - Au.
                  Información: (266) 4452000 INT. 4108{" "}
                </li>
                <li>Oficina de informes de El Trapiche +54 (266) 4891372</li>{" "}
                <li>Oficina de informes Balde +54 (266) 4891372</li>
                <li>Oficina de Informes El Volcán +54 (266) 4494278 </li>
                <li>Oficina de informes de San Francisco +54 (2651) 426063</li>
              </h4>
              <br />

              <div className="Recorridos">
                <div className="reco-titulo" style={{ width: "360px" }}>
                  <span className="reco-t-sub2">BOMBEROS VOLUNTARIOS:</span>
                </div>
              </div>
              <br></br>
              <h4 className="" style={{ color: `#808080` }}>
                <li>San Luis (0266) 4429444</li>
                <li>Carpintería (02656) 477100</li>
                <li>Concarán (02656)480222 </li>{" "}
                <li> Los Molles (02656) 477833</li>
                <li> Merlo 100 / (02656) 475066</li>
                <li>San Javier (03544) 482136</li>
                <li>Santa Rosa del Conlara (02656) 492222</li>
                <li>Tilisarao (02656) 420031</li>
              </h4>
              <br />
            
            </div>
            <br />
            <br />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
PTelefonosUtiles.contextType = Consumer;
export default PTelefonosUtiles;
