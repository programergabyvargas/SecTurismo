import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";

class PServicio extends Component {
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
            <div className="container">
              <div className="row mb-3" style={{ paddingTop: "150px" }}>
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>Servicios</h3>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <img alt="avion"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover"
                      }}
                      src="http://www.rovellacarranza.com.ar/wp-content/uploads/2015/04/MG_6247.jpg"
                    />
                    <Link to="/PAeropuerto">
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
                        Aeropuertos
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <img alt="agencia"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover"
                      }}
                      src="https://img.lagaceta.com.ar/fotos/notas/2018/12/28/recomendaciones-hora-contratar-paquete-turistico-agencia-viajes-794018-153357.jpg"
                    />
                    <Link to="/agenciaviajes">
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#SanFrancisco"
                        aria-expanded="false"
                        aria-controls="SanFrancisco"
                        style={{
                          backgroundColor: "#CB6120",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        Agencias de Viajes
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <img alt="default"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover"
                      }}
                      src="https://i.ytimg.com/vi/MjaCNUOwLRo/maxresdefault.jpg"
                    />
                    <Link to="/filtroalojamiento">
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#SanFrancisco"
                        aria-expanded="false"
                        aria-controls="SanFrancisco"
                        style={{
                          backgroundColor: "#A01127",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        Alojamientos
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <img alt="avion2"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover"
                      }}
                      src="https://www.apertura.com/__export/1443539630183/sites/revistaap/img/clase/2015/09/29/auto_lujjo_crop1443539630002.jpg"
                    />
                    <Link to="/PAlquileresAuto">
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#SanFrancisco"
                        aria-expanded="false"
                        aria-controls="SanFrancisco"
                        style={{
                          backgroundColor: "#5FA199",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        Alquiler de autos
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <img  alt="guia"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover"
                      }}
                      src="https://www.cenfotur.edu.pe/wp-content/uploads/2016/11/CENFOTUR-GUIA-OFICIAL.jpg"
                    />
                    <Link to="/guiaturismo">
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#SanFrancisco"
                        aria-expanded="false"
                        aria-controls="SanFrancisco"
                        style={{
                          backgroundColor: "#E6B54A",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        Guías de turismo
                      </button>
                    </Link>
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

PServicio.contextType = Consumer;

export default PServicio;
