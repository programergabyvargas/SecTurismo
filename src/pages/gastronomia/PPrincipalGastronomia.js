import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PPrincipalGastronomia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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

  getData() {}

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
                <h3 style={{ color: `#722789` }}>DISFRUTAR - CAMINO DE LOS SABORES PUNTANOS</h3>
              </div>
              <h4 className="" style={{ color: `#808080` }}>
                Disfrutar en San Luis, es descubrir en su encantadora geografía
                sabores y aromas en sus platos típicos, elaborados con
                ingredientes que conquistan el paladar de los apasionados del
                buen comer. Te invitamos a recorrer los caminos de los sabores
                puntanos donde cada rincón tiene para brindar una oferta variada
                de expresiones gastronómicas, patrimonio de nuestros pueblos, de
                nuestra cultura y su gente.
              </h4>
              <br />
            </div>
            <br />
            <br />
            <div className="container">{ListadoAtractivofull}</div>
            <center>
              <div className="Recorridos">
                <div>
                  <div className="titulo-creer">
                    <span className="reco-t-sub2">Vení a conocer:</span>
                  </div>
                </div>
                <div className="reco-container" style={{ maxWidth: "924px" }}>
                  <Link to="PZonaGastronomica/4/Sierras Centrales">
                    <div id="sierras">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/ZONAS G 2.jpeg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Sierras</p>
                        <p>Centrales</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaGastronomica/5/Norte Puntano">
                    <div id="norte">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/ZONAS G 3.jpeg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Norte</p>
                        <p>Puntano</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaGastronomica/8/Los Comechingones">
                    <div id="costa">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/ZONAS G 4.jpeg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Costa de los</p>
                        <p>Comechingones</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaGastronomica/1/Conlara">
                    <div id="valle">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/ZONAS G 5.jpeg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Valle del Conlara</p>
                        <p>y San Martín</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaGastronomica/9/Circuito del Morro">
                    <div id="villa">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/ZONAS G.jpeg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Villa Mercedes</p>
                        <p>y El Morro</p>
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

PPrincipalGastronomia.contextType = Consumer;
export default PPrincipalGastronomia;
