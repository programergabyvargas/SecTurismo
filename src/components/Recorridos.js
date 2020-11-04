import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";

//Hay un error por las imágenes estáticas (ver duplicado 1_9_20181020005804.jpg y 1_9_20181217092437.jpg) solucionar!

class Recorridos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <ReactWOW animation="fadeIn" data-wow-delay="10s">
        <div className="Recorridos ">
          <div className="mancha-sup-izq" />
          <div className="mancha-sup-der" />
          <center>
            <div className="reco-titulo">
              <br />
              <br />
              <br />
              <span className="reco-t-sub1">Recorremos</span>
              <span className="reco-t-sub2">Circuitos Turísticos</span>
            </div>
          </center>
          <div className="reco-container">
            <Link to="zona/4">
              <div id="sierras">
                <div className="cuadro-color" />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/1_4_20181020005103.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div className="cuadro-titulo">
                  <p>Sierras</p>
                  <p>Centrales</p>
                </div>
              </div>
            </Link>
            <Link to="zona/5">
              <div id="norte">
                <div className="cuadro-color" />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/norte.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div className="cuadro-titulo">
                  <p>Norte</p>
                  <p>Puntano</p>
                </div>
              </div>
            </Link>
            <Link to="zona/8">
              <div id="costa">
                <div className="cuadro-color" />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/costa.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div className="cuadro-titulo">
                  <p>Costa de los</p>
                  <p>Comechingones</p>
                </div>
              </div>
            </Link>
            <Link to="zona/1">
              <div id="valle">
                <div className="cuadro-color" />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/1_1_20181020005650.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div className="cuadro-titulo">
                  <p>Valle del Conlara</p>
                  <p>y San Martín</p>
                </div>
              </div>
            </Link>
            <Link to="zona/9">
              <div id="villa">
                <div className="cuadro-color" />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/1_9_20181020005804.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div className="cuadro-titulo">
                  <p>Villa Mercedes</p>
                  <p>y El Morro</p>
                </div>
              </div>
            </Link>
            <Link to="zona/10">
              <div id="huellas">
                <div className="cuadro-color" />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/huellas.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div className="cuadro-titulo">
                  <p>Huellas</p>
                  <p>Del Pasado</p>
                </div>
              </div>
            </Link>
            <Link to="zona/11">
              <div id="llanura">
                <div className="cuadro-color" />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/llanura.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div className="cuadro-titulo">
                  <p>Llanura</p>
                  <p>Sureña</p>
                </div>
              </div>
            </Link>
            <Link to="zona/12">
              <div id="termas">
                <div className="cuadro-color" />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/1_12_20181020005540.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div className="cuadro-titulo">
                  <p>Termas y</p>
                  <p>Salinas</p>
                </div>
              </div>
            </Link>
          </div>
          <center>
            <div className="reco-titulo">
              <span className="reco-t-sub1">además</span>
              <span className="reco-t-sub2">Caminos Alternativos</span>
            </div>
          </center>
          <div className="reco-container">
            <Link to="/PPrincipalGastronomia">
              <div id="sierras">
                <div
                  className="cuadro-color"
                  style={{ backgroundColor: "#EEB70C" }}
                />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/GASTRONOMIA.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div
                  className="cuadro-titulo"
                  style={{ color: "#EEB70C", width: "250px" }}
                >
                  <p>Disfrutar</p>
                  <p>Ruta del Sabor</p>
                </div>
              </div>
            </Link>
            <Link to="/PCerveceria">
              <div id="sierras">
                <div
                  className="cuadro-color"
                  style={{ backgroundColor: "#EEB70C" }}
                />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/cervecero.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div
                  className="cuadro-titulo"
                  style={{ color: "#EEB70C", width: "250px" }}
                >
                  <p>Disfrutar</p>
                  <p>Camino cervecero</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="reco-container">
            <Link to="/PCreerGnral">
              <div id="sierras">
                <div
                  className="cuadro-color"
                  style={{ backgroundColor: "#F1948A" }}
                />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/banner-pag-222.png`}
                  className="thumbnail"
                  alt=""
                />
                <div
                  className="cuadro-titulo"
                  style={{ color: "#F1948A", width: "250px" }}
                >
                  <p>Creer</p>
                  <p>Caminos de la Fe</p>
                </div>
              </div>
            </Link>
            <Link to="/Moto_Turismo">
              <div id="sierras">
                <div
                  className="cuadro-color"
                  style={{ backgroundColor: "#F1948A" }}
                />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/MOTO GRAL.png`}
                  className="thumbnail"
                  alt=""
                />
                <div
                  className="cuadro-titulo"
                  style={{ color: "#F1948A", width: "250px" }}
                >
                  <p>Disfrutar</p>
                  <p>Moto Turismo</p>
                </div>
              </div>
            </Link>
            {/** <Link to="/PCreerGnral">
              <div id="sierras">
                <div
                  className="cuadro-color"
                  style={{ backgroundColor: "#F1948A" }}
                />
                <img
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/zonas/circuito del milagro.jpg`}
                  className="thumbnail"
                  alt=""
                />
                <div
                  className="cuadro-titulo"
                  style={{ color: "#F1948A", width: "250px" }}
                >
                  <p>Creer</p>
                  <p>Caminos del Milagro</p>
                </div>
              </div>
            </Link>*/}
          </div>
          <div className="mancha-inf-izq" />
          <div className="mancha-inf-der" />
        </div>
      </ReactWOW>
    );
  }
}

export default Recorridos;
