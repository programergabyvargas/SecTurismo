import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PCreerGnral extends Component {
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
                      src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${
                        atrac.imagenes[indice].imagen
                      }`}
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
    }

    return (
      <React.Fragment>
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div className="container ListadoAtractivofull">
            <div className="ZonaLocalidad-titulo" style={{backgroundColor: `#722789`}}>
                            <h3 style={{color: `#722789`}}>Creer en San Luis</h3>
                        </div>
              <h4 className="" style={{ color: `#808080` }}>
                “Creer en San Luis” es encontrar las razones para vivir y
                disfrutar el espíritu de Semana Santa durante todo el año,
                recorriendo los caminos de la fe sanluiseña en donde uno puede
                compartir en familia o con amigos, la paz y la belleza de
                nuestros paisajes; la energía de nuestra gente y las expresiones
                de la fe en cada punto de nuestra geografía. ¡Bienvenidos!
              </h4>
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "200px" }}>
                  <span className="reco-t-sub2">Imperdibles</span>
                </div>
              </div>
              <br />
            </div>
            <br />
            <br />
            <div className="container">{ListadoAtractivofull}</div>
            <center>
              <div className="Recorridos">
              <div>
                <div className="titulo-creer" >
                  <span className="reco-t-sub2">También vení a conocer:</span>
                </div>
              </div>
                <div className="reco-container" style={{maxWidth: "924px"}}>
                  <Link to="PZonaCreer/4/Sierras de San Luis">
                    <div id="sierras">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/sierrasreli.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Sierras</p>
                        <p>Centrales</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaCreer/5/Norte Puntano">
                    <div id="norte">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/nortereli.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Norte</p>
                        <p>Puntano</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaCreer/8/Los Comechingones">
                    <div id="costa">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/comechingonesreli.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Costa de los</p>
                        <p>Comechingones</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaCreer/1/Conlara">
                    <div id="valle">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/conlarareli.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Valle del Conlara</p>
                        <p>y San Martín</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaCreer/9/Circuito del Morro">
                    <div id="villa">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/mercedesreli.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Villa Mercedes</p>
                        <p>y El Morro</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="PZonaCreer/11/Llanura Sureña">
                    <div id="llanura">
                      <div className="cuadro-color" />
                      <img
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/zonas/llanurareli.jpg`}
                        className="thumbnail"
                        alt=""
                      />
                      <div className="cuadro-titulo">
                        <p>Llanura</p>
                        <p>Sureña</p>
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

PCreerGnral.contextType = Consumer;
export default PCreerGnral;
