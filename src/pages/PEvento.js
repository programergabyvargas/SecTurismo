import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
import { Link } from "react-router-dom";
import MaxImage from "../components/subcomponentes/MaxImage";

class PEvento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      evento: {
        color: "722789",
        dfecha: "0000-00-00",
        hfecha: "0000-00-00",
        foto_uno: "default.jpg",
        foto_dos: "default.jpg",
        dhora: "00:00:00",
        hhora: "00:00:00",
      },
      img: {
        visible: false,
        src: "",
      },
      carousel: [],
      dataNueva: ""
    };
    this.getData = this.getData.bind(this);
    this.clickImg = this.clickImg.bind(this);
    this.closeImg = this.closeImg.bind(this);
  }

  clickImg(visible, src) {
    console.log(visible);
    console.log(src);
    this.setState({
      img: {
        visible: visible,
        src: src,
      },
    });
  }

  closeImg() {
    this.setState({
      img: {
        visible: false,
        src: "",
      },
    });
  }

  getData() {
    var token = this.context.token;
    var id = parseInt(this.props.match.params.id);
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/evento/${id}`,
      responseType: "json",
    })
      .then((response) => {
        if (response.data.data.count > 0) {
          let carousel = [];
          let estilo = {
            backgroundImage: "",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          };
          let activo = "active";
          let registro = response.data.data.registros[0];
          console.log(registro.descripcionHTML);

          //if(registro.foto_uno !== "default.jpg") {
          if (registro.foto_uno) {
            estilo = {
              ...estilo,
              backgroundImage: `url(${
                process.env.REACT_APP_API_RECURSOS
              }/recursos/eventos/${registro.foto_uno})`,
            };
            carousel.push(
              <div
                key={`caro-uno`}
                className={`carousel-item ${activo}`}
                style={estilo}
              >
                <h5 className="pd-top"> </h5>
              </div>
            );
            activo = "";
          }
          if (registro.foto_dos !== "default.jpg") {
            estilo = {
              ...estilo,
              backgroundImage: `url(${
                process.env.REACT_APP_API_RECURSOS
              }/recursos/eventos/${registro.foto_dos})`,
            };
            carousel.push(
              <div
                key={`caro-dos`}
                className={`carousel-item ${activo}`}
                style={estilo}
              >
                <h5 className="pd-top"> </h5>
              </div>
            );
          }
          self.setState({
            evento: registro,
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
    let dfecha = this.state.evento.dfecha.split("-");
    let hfecha = this.state.evento.hfecha.split("-");
    dfecha = `${dfecha[2]}/${dfecha[1]}`;
    hfecha = `${hfecha[2]}/${hfecha[1]}`;
    let dhora = this.state.evento.dhora.split(":");
    let hhora = this.state.evento.hhora.split(":");
    dhora = `${dhora[0]}:${dhora[1]}`;
    hhora = `${hhora[0]}:${hhora[1]}`;
    return (
      <div
        className="PEvento"
        style={{ background: "#" + this.state.evento.color }}
      >
        {this.state.loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            "
            <div className="container p-4">
              <div className="row mt-3" style={{ paddingTop: "150px" }}>
                <div className="col evento-titulo">
                  <i className="fas fa-hand-point-right" />{" "}
                  {this.state.evento.titulo}
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-xs-12 col-md-6 bg-white text-dark text-uppercase text-center rounded p-2">
                  Del {dfecha} al {hfecha} - {this.state.evento.localidad}
                </div>
              </div>
              <div className="row mt-2 pb-5">
                <div className="col-xs-12 col-md-4">
                  <div className="d-flex flex-column">
                    <img
                      className="img-fluid"
                      src={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/eventos/${this.state.evento.foto_uno}`}
                      alt="Foto"
                      onClick={(e) =>
                        this.clickImg(
                          true,
                          `${
                            process.env.REACT_APP_API_RECURSOS
                          }/recursos/eventos/${this.state.evento.foto_uno}`
                        )
                      }
                    />
                    {this.state.evento.foto_dos !== "default.jpg" ? (
                      <img
                        className="img-fluid mt-2"
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/eventos/${this.state.evento.foto_dos}`}
                        alt="Foto"
                        onClick={(e) =>
                          this.clickImg(
                            true,
                            `${
                              process.env.REACT_APP_API_RECURSOS
                            }/recursos/eventos/${this.state.evento.foto_dos}`
                          )
                        }
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-xs-12 col-md-4">
                  {this.state.evento.descripcionHTML}
                </div>
                <div className="col">
                  <ul className="evento-data">
                    <li>
                      <i className="fas fa-map-marker-alt" /> Ubicación
                    </li>
                    <li>{this.state.evento.lugar}</li>
                    <li>{this.state.evento.direccion}</li>
                    <li>{this.state.evento.localidad}</li>
                    <li>
                      <i className="far fa-clock" /> Horario
                    </li>
                    <li>
                      De {dhora} hs a {hhora} hs
                    </li>
                    <li>
                      <i className="fas fa-dollar-sign" /> Costo
                    </li>
                    <li>$ {this.state.evento.costo}</li>
                    <li>
                      <i className="fas fa-users" /> Invita
                    </li>
                    <li>{this.state.evento.invita}</li>
                    <li>
                      <i className="fas fa-user-tie" /> Organiza
                    </li>
                    <li>{this.state.evento.organiza}</li>
                  </ul>
                </div>
              </div>
              <center>
                <div id="atractivos">
                  <Link to={`/eventos`}>
                    <div className="all-link">
                      <div style={{ color: "white", fontSize: "30px" }}>
                        <i className="fas fa-arrow-alt-circle-right" /> IR A
                        TODOS LOS EVENTOS
                      </div>
                    </div>
                  </Link>
                </div>
              </center>
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

PEvento.contextType = Consumer;

export default PEvento;
