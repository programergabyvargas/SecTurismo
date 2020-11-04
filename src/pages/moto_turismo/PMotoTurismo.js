import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PMotoTurismo extends Component {
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
      url: `${process.env.REACT_APP_API}/atractivo/creer/'2'`,
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
    /*const loading = this.state.loading;
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
    }*/

    return (
      <React.Fragment>
        <React.Fragment>
          <div className="container ListadoAtractivofull">
            <br></br>
            <div
              className="ZonaLocalidad-titulo"
              style={{ backgroundColor: `#722789` }}
            >
              <h3 style={{ color: `#722789` }}>Moto Turismo</h3>
            </div>
            <div className="motoVideo1">
              <center>
                <iframe
                  width="956"
                  height="538"
                  src="https://www.youtube.com/embed/x-f83n_o7-c"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </center>
            </div>
            <div className="motoVideo">
              <center>
                <iframe
                  width="300"
                  height="400"
                  src="https://www.youtube.com/embed/x-f83n_o7-c"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </center>
            </div>
            <div style={{ float: "left" }} className="Recorridos">
              <div className="reco-titulo" style={{ width: "200px" }}>
                <span className="reco-t-sub2">Introducción</span>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h4 className="" style={{ color: `#808080` }}>
              &nbsp; &nbsp;Recorrer San Luis en moto, es sorprenderte con su
              magnífica geografía, sus sierras majestuosas, ríos cristalinos,
              valles y llanuras apacibles. Es disfrutar la tonada, el chivito y
              la gente cordial, apasionada por sus raíces y tradiciones. Nuestra
              provincia despliega una moderna red vial, autopistas y caminos
              pintorescos de ensueño que invitan a vivir toda la aventura, con
              el mejor clima en un marco de naturaleza insuperable. Te
              proponemos cinco recorridos que abarcan una gran diversidad de
              paisajes, donde podrás encontrar variada hotelería y gastronomía
              local. Te permitirá tener contacto con distintas costumbres,
              conocer innumerables atractivos y realizar actividades. Rodar San
              Luis en moto es una experiencia de paseo cautivante.
            </h4>
            <br />
            <br />
            <center>
              <div className="Recorridos">
                <Link to="/Tips_Moto" key="Tips">
                  <div className="reco-titulo" style={{ width: "300px" }}>
                    <span className="reco-t-sub2">Tips y Consejos</span>
                  </div>
                </Link>
              </div>
              <br></br>
              <Link to="/Telefonos_Utiles" key="Tips">
                <div className="Recorridos">
                  <div className="reco-titulo" style={{ width: "300px" }}>
                    <span className="reco-t-sub2">Teléfonos Útiles</span>
                  </div>
                </div>
              </Link>
            </center>
            <br />
          </div>
          <br />
          <br />
          {/*<div className="container">{ListadoAtractivofull}</div>*/}
          <center>
            <div className="Recorridos">
              <div>
                <div className="titulo-creer">
                  <span className="reco-t-sub2">Vení a conocer:</span>
                </div>
              </div>
              <div className="reco-container" style={{ maxWidth: "924px" }}>
                <Link to="/Cielos_Puntanos">
                  <div id="sierras">
                    <div className="cuadro-color" />
                    <img
                      src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/CIELOS PUNTANOS.png`}
                      className="thumbnail"
                      alt=""
                    />
                    <div className="cuadro-titulo">
                      <p>CIELOS </p>
                      <p>PUNTANOS</p>
                    </div>
                  </div>
                </Link>
                <Link to="Trazosdehistoria">
                  <div id="norte">
                    <div className="cuadro-color" />
                    <img
                      src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/TRAZOS DE HISTORIA.png`}
                      className="thumbnail"
                      alt=""
                    />
                    <div className="cuadro-titulo">
                      <p>TRAZOS DE </p>
                      <p>HISTORIA</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="reco-container" style={{ maxWidth: "924px" }}>
                <Link to="VallesEncantados">
                  <div id="costa">
                    <div className="cuadro-color" />
                    <img
                      src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/VALLE ENCANTADO.png`}
                      className="thumbnail"
                      alt=""
                    />
                    <div className="cuadro-titulo">
                      <p>VALLES </p>
                      <p>ENCANTADOS</p>
                    </div>
                  </div>
                </Link>
                <Link to="SaludYvitalidad">
                  <div id="valle">
                    <div className="cuadro-color" />
                    <img
                      src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/SALUD Y VITALIDAD.png`}
                      className="thumbnail"
                      alt=""
                    />
                    <div className="cuadro-titulo">
                      <p>SALUD Y </p>
                      <p>VITALIDAD</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </center>
        </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

PMotoTurismo.contextType = Consumer;
export default PMotoTurismo;
