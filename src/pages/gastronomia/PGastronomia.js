import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import GoogleMap from "../../components/subcomponentes/GoogleMap";
import MaxImage from "../../components/subcomponentes/MaxImage";

class PGastronomia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: 0,
      dataAtractivo: {
        color: "722789"
      },
      carousel: [],
      fotos: [],
      img: {
        src: "",
        visible: false
      }
    };
    this.getData = this.getData.bind(this);
    this.verImagen = this.verImagen.bind(this);
    this.closeImg = this.closeImg.bind(this);
  }

  verImagen(e) {
    this.setState({
      img: {
        src: e.target.src,
        visible: true
      }
    });
  }

  closeImg() {
    this.setState({
      img: {
        src: "",
        visible: false
      }
    });
  }

  getData() {
    var token = this.context.token;
    var self = this;
    //Datos del Atractivo
    axios({
      method: "get",
      headers: {
        Authorization: token
      },
      url: `${process.env.REACT_APP_API}/gastronomia/${self.state.id}`,
      responseType: "json"
    })
      .then(response => {
        if (response.data.data.count > 0) {
          self.setState(
            {
              dataAtractivo: response.data.data.registros[0]
            },
            () => {
              //Imagenes del Atractivo
              axios({
                method: "get",
                headers: {
                  Authorization: token
                },
                url: `${process.env.REACT_APP_API}/gastronomia/${
                  self.state.id
                }/imagenes`,
                responseType: "json"
              })
                .then(response => {
                  if (response.data.data.count > 0) {
                    let activo = false;
                    let carousel = response.data.data.registros.map(
                      (a, index) => {
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
                              key={`caro-${index}`}
                              className="carousel-item active"
                              style={estilo}
                            >
                              <h5 className="pd-top">
                                {self.state.dataAtractivo.nombre}
                              </h5>
                            </div>
                          );
                        } else {
                          return (
                            <div
                              key={`caro-${index}`}
                              className="carousel-item"
                              style={estilo}
                            >
                              <h5 className="pd-top">
                                {self.state.dataAtractivo.nombre}
                              </h5>
                            </div>
                          );
                        }
                      }
                    );
                    let fotos = response.data.data.registros.map((a, index) => {
                      return (
                        <img
                          key={`img-atr-${a.id}`}
                          className="img-fluid"
                          src={`${
                            process.env.REACT_APP_API_RECURSOS
                          }/atractivos/${a.imagen}`}
                          alt="Img"
                          onClick={e => {
                            this.verImagen(e);
                          }}
                        />
                      );
                    });
                    self.setState({
                      carousel: carousel,
                      fotos: fotos
                    });
                  } else {
                    //Error no se enocntró el id
                  }
                })
                .catch(error => {
                  console.log(error);
                });
            }
          );
        } else {
          //Error no se encontró el id
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
    const fotos = this.state.fotos;
    return (
      <div className="Atractivo" style={{ marginTop: "150px"}}>
        {this.state.loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div
              className="ZonaLocalidad-titulo"
              style={{ backgroundColor: `#${this.state.dataAtractivo.color}` }}
            >
              <h3 style={{ color: `#${this.state.dataAtractivo.color}` }}>
                {this.state.dataAtractivo.nombre}
              </h3>
            </div>

            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="Atractivo-data">
                    <div className="atractivo-texto">
                      {this.state.dataAtractivo.descripcion}
                    </div>
                    <div className="atractivo-fotos">{fotos}</div>
                    <div className="atractivo-ubicacion">
                      <span>
                        <i className="fas fa-map-marker" /> Ubicación
                      </span>
                      <div id="mapa-atr" style={{ width: "100%" }}>
                        <GoogleMap
                          lat={this.state.dataAtractivo.latitud}
                          lng={this.state.dataAtractivo.longitud}
                          zoom="10"
                          gwidth="100%"
                          gheight="400px"
                        />
                      </div>
                      <div
                        className="d-flex justify-content-center p-2"
                        style={{ width: "100%" }}
                      >
                        <span>
                          {this.state.dataAtractivo.latitud}{" "}
                          {this.state.dataAtractivo.longitud}
                        </span>
                      </div>
                    </div>
                    <div className="atractivo-info">
                      <span>
                        <i className="fas fa-clock" /> Horarios
                      </span>
                      <ul>
                        <li>Lunes: {this.state.dataAtractivo.lunes}</li>
                        <li>Martes: {this.state.dataAtractivo.martes}</li>
                        <li>Miércoles: {this.state.dataAtractivo.miercoles}</li>
                        <li>Jueves: {this.state.dataAtractivo.jueves}</li>
                        <li>Viernes: {this.state.dataAtractivo.viernes}</li>
                        <li>Sábado: {this.state.dataAtractivo.sabado}</li>
                        <li>Domingo: {this.state.dataAtractivo.domingo}</li>
                      </ul>
                      <span>
                        <i className="fas fa-user" /> Contacto
                      </span>
                      <span className="pr-4">
                        Domicilio: {this.state.dataAtractivo.domicilio}
                      </span>
                      <span className="pr-4">
                        Tel./Cel.: +54 9 {this.state.dataAtractivo.telefono}
                      </span>
                      <span className="pr-4">
                        Email: {this.state.dataAtractivo.mail}
                      </span>
                      <span className="pr-4">
                        Web: {this.state.dataAtractivo.web}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MaxImage
              src={this.state.img.src}
              visible={this.state.img.visible}
              onClose={this.closeImg}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

PGastronomia.contextType = Consumer;

export default PGastronomia;
