import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

class PTaxis extends Component {
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
                    Agencias de Taxis y Remises{" "}
                  </h3>
                </div>
                <div className="col">
                  <img alt="sanluis"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover"
                    }}
                    src="http://agenciasanluis.com/wp-content/uploads/2017/09/terrazas.jpg"
                  />
                  <button
                    className="btn btn-dark btn-block"
                    type="button"
                    data-toggle="collapse"
                    data-target="#nueva_zona"
                    aria-expanded="false"
                    aria-controls="nueva_zona"
                    style={{
                      backgroundColor: "#cb6120",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700"
                    }}
                  >
                    San Luis
                  </button>
                  <div className="collapse" id="nueva_zona">
                    <div className="card card-body">
                      <div className="row">
                        <div className="col-md-10" style={{ color: "#cb6120" }}>
                          <div className="form-group">
                            <div className="atractivo-info">
                              <h4>Cosmos Remises</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Chacabuco 1151
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: 0266 500-7500
                              </span>
                              <br />
                              <hr />
                              <h4>Norte Remis</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Juan Peral
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: 0266 444-0055
                              </span>
                              <br />
                              <hr />
                              <h4>Radiotaxis Intime</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Tomás Jofre 867, San Luis
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: 0266 443-4700
                              </span>
                              <br />
                              <hr />
                              <h4> Sol Remises</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Vicente Dupuy, San Luis
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: 0266 442-0000
                              </span>
                              <br />
                              <hr />
                              <h4>SERVITAXI SAN LUIS</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Tilisarao 699, San Luis
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: 0266 443-2040
                              </span>
                              <br />
                              <hr />
                              <h4>Taxi Express</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Dominicos Puntanos 890, San
                                Luis
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: 0266 442-6367
                              </span>
                              <br />
                              <hr />
                              <h4> Taxi La Puntana</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Manzana 104 casa 14, Au de las
                                Serranías Puntanas, San Luis
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: 0266 457-8333
                              </span>
                              <br />
                              <hr />
                              <h4> Tu Taxi</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Belgrano 1791 , San Luis
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: (0266) 442 – 4008
                              </span>
                              <br />
                              <hr />
                              <h4> Remisera Bs As</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Buenos Aires 1736 , San Luis
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: (0266) 444 – 2288
                              </span>
                              <br />
                              <hr />
                              <h4> Servitax</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Yapeyú 2091 , San Luis
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: (0266) 444 – 0600
                              </span>
                              <br />
                              <hr />
                              <h4> Remis Al Norte</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: B°Viva S Luis Mz 447 Ca 7 ,
                                San Luis
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: 0266) 15 - 440 – 0910
                              </span>
                              <br />
                              <hr />
                              <h4>Remises la Terminal</h4>
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: (02657) 48 – 0916
                              </span>
                              <br />
                              <hr />
                              <h4> Remisses Argentinos</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Estado De Israel 1650 , San
                                Luis
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Teléfono: (0266) 443 - 1777
                              </span>
                              <br />
                              <hr />
                            </div>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img alt="merlo"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover"
                        }}
                        src="http://www.rovellacarranza.com.ar/wp-content/uploads/2015/04/MG_6247.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#SanFrancisco"
                        aria-expanded="false"
                        aria-controls="SanFrancisco"
                        style={{
                          backgroundColor: "#BF3376",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        Villa De Merlo
                      </button>
                      <div className="collapse" id="SanFrancisco">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#BF3376" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h4> Remises el poeta</h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: Marquez de Sobremonte 245,
                                    Merlo, San Luis
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Teléfono: 02656 47-6600
                                  </span>
                                  <br />
                                  <hr />
                                  <h4> Remis Miguel</h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: Av. del Deporte 331,
                                    Merlo, San Luis
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Teléfono: 0266 485-4480
                                  </span>
                                  <br />
                                  <hr />
                                  <h4> Remis fénix</h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: Eva Duarte, 331 Merlo, San
                                    Luis
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Teléfono: 02656 47-4226
                                  </span>
                                  <br />
                                  <hr />
                                  <h4>Remis sol</h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: Av norte 1681, Barranca
                                    colorada, Merlo, San Luis
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Teléfono: 0266 420-2813
                                  </span>
                                  <br />
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

PTaxis.contextType = Consumer;

export default PTaxis;
