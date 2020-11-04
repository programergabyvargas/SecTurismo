import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import axios from "axios";

class PAeropuerto extends Component {
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
                {/* <h3 className={`bgc_${numero}`}>{dfecha} al {hfecha} - {e.localidad}</h3> */}
                <h3 style={{ background: "#" + e.color }}>
                  {dfecha} al {hfecha} - {e.localidad}
                </h3>
              </div>
            </Link>
            {/*<div className="overlay" style={{background: "#" + e.color}}>
                            <h3>{e.titulo}</h3>
                            <h2>{e.lugar}</h2>
                            <h4>Costo: $ {e.costo}</h4>
                            ver más <i className="fa fa-chevron-right"></i>
            </div>*/}
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
            <div className="container mb-5" />
            <div className="container">
              <div className="row mb-3" style={{ paddingTop: "150px" }}>
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>Alquiler de Autos</h3>
                </div>
                <div className="col">
                  <img
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
                    aria-expanded="true"
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
                  <div className="" id="nueva_zona">
                    <div className="card card-body">
                      <div className="row">
                        <div className="col-md-10" style={{ color: "#cb6120" }}>
                          <div className="form-group">
                            <div className="atractivo-info">
                              <h4>Avis </h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Av Pte Illia 470.
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Tel./Cel.: +54 266-444-3280 / 266
                                154540388/390
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-globe-americas" />
                                &nbsp;https://www.avis.com.ar/ -
                                sanluis@avis.com.ar
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-clock" /> &nbsp; Horario: 9 hrs
                                a 12 hrs / 17 hrs a 21 hrs
                              </span>
                              <hr />
                              <h4>Hertz </h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: Av. Fuerza Aérea 3095.
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Tel./Cel.: +54 0266 442-2427
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-globe-americas" />
                                &nbsp;https://www.hertz.com.ar/ -
                                hertzsanluis@hotmail.com
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-clock" /> &nbsp; Horario: 9 hrs
                                a 12 hrs / 17 hrs a 21 hrs
                              </span>
                            </div>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PAeropuerto.contextType = Consumer;

export default PAeropuerto;
