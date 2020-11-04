import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

class PContacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      carousel: [],
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/eventos/50`,
      responseType: "json",
    })
      .then((response) => {
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
              backgroundRepeat: "no-repeat",
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
            loading: false,
          });
        } else {
          //No hay registros o el id no es correcto
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.getData();
  }

  render() {
    return (
      <div className="PEventos">
        {this.state.loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div className="container">
              <div className="row mb-3" style={{ paddingTop: "150px" }}>
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>Contactanos</h3>
                </div>
                <h3
                  className=""
                  style={{ paddingLeft: "15px", color: `#722789` }}
                >
                  Estamos para ayudarte, a continuación dejamos todos los medios
                  disponibles por donde nos podemos comunicar.
                </h3>
                <br />
                <div
                  className="grillaContacto-grid-container"
                  style={{ paddingLeft: "15px" }}
                >
                  <div className="contacLlamada">
                    <i class="fas fa-phone-volume contactoIcon" />
                    <h4>
                      ¡Esperamos tu llamada! <br />
                    </h4>
                    <div>
                      <br />
                      <h5 style={{ paddingLeft: "70px" }}>
                        <a href="tel:+5492664423479"> +54 (266) 4423479</a>
                        <br />
                        <a href="tel:+5492664423957">+54 (266) 4423957 </a>
                      </h5>
                    </div>
                  </div>
                  <div className="contacRedes posicionContacto">
                    <i class="fas fa-users" />
                    <h4 className="">
                      ¡Seguinos! <br />
                    </h4>
                    <br />
                    <h5 style={{ paddingLeft: "70px" }}>
                      <div className="iconRedes">
                        <p>
                          <i className="fab fa-facebook-square" />
                          <a
                            href="https://www.facebook.com/turismodesanluis/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            &nbsp; @TurismodeSanLuis
                          </a>
                        </p>
                        <p>
                          <i className="fab fa-twitter-square" />
                          <a
                            href="https://twitter.com/TurismoSanLuis_"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            &nbsp; @TurismoSanLuis_
                          </a>
                        </p>
                        <p>
                          <i className="fab fa-instagram" />
                          <a
                            href="https://www.instagram.com/turismo_san_luis/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            &nbsp; @Turismo_san_luis
                          </a>
                        </p>
                      </div>
                    </h5>
                  </div>
                  <div className="contacLlamada" style={{ paddingTop: "10px" }}>
                    <i class="fas fa-map-marked-alt" />
                    <h4>
                      ¡Te esperamos! <br />
                    </h4>
                    <br />
                    <h5 style={{ paddingLeft: "70px" }}>
                      <a href="https://goo.gl/maps/nMd9gkUAuZJ2">
                        Av. Arturo Illia 35
                      </a>
                    </h5>
                  </div>
                  <div
                    className="contacLlamada posicionContacto"
                    style={{ paddingTop: "10px" }}
                  >
                    <i class="fas fa-mail-bulk" />
                    <h4>
                      ¡Escribinos! <br />
                    </h4>
                    <br />
                    <h5 style={{ paddingLeft: "70px" }}>
                      <a href="mailto:info@turismo.sanluis.gov.ar">
                        info@turismo.sanluis.gov.ar
                      </a>
                      <br />
                      <a href="mailto:contacto@turismo.sanluis.gov.ar">
                        contacto@turismo.sanluis.gov.ar
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PContacto.contextType = Consumer;

export default PContacto;
