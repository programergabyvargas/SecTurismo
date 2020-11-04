import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

class RegistroAgenciasdeViajes extends Component {
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
            <div className="container mb-5" />
            <div className="container">
              <div className="row mb-3" style={{ paddingTop: "150px" }}>
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>
                    Registro Agencia de Viajes
                  </h3>
                </div>
                <div className="col">
                  <center>
                    <h2 style={{ color: `#722789`, fontWeight: "bold" }}>
                      HAGA CLICK PARA DESCARGAR EL PROTOCOLO PARA EXCURSIONES Y
                      GUÍAS DE TURISMO - TURISMO INTERNO
                    </h2>

                    <a
                      href= "https://www.sanluis.gov.ar/wp-content/uploads/PROTOCOLO-PARA-EXCURSIONES-Y-GUI%CC%81AS-DE-TURISMO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: `200px`, fontWeight: "bold" }}
                        className="img-fluid"
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/DNU.png`}
                        alt="Img"
                      />
                    </a>
                  </center>
                </div>
                <br />
                <br />
                <div className="registro1">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfkGGXb1U0fgSYXztRLMRiOhDVSk2tAVldR-yEUzZsf9BQxeA/viewform?embedded=true"
                    width="400"
                    height="1200"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  >
                    Cargando…
                  </iframe>
                </div>
                <div className="registro2">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfkGGXb1U0fgSYXztRLMRiOhDVSk2tAVldR-yEUzZsf9BQxeA/viewform?embedded=true"
                    width="1150"
                    height="1300"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  >
                    Cargando…
                  </iframe>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

RegistroAgenciasdeViajes.contextType = Consumer;

export default RegistroAgenciasdeViajes;
