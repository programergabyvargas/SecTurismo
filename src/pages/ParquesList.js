import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PParques extends Component {
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
      url: `${process.env.REACT_APP_API}/atractivo/'parques'`,
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
                      {atrac.localidad} - {atrac.tipo}
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
              <div className="nf-titulo">
                <span>Parques y Urbanización</span>
              </div>
              <h4 className="" style={{ color: `#808080` }}>
                Los parques provinciales, con su cuidadoso diseño paisajístico,
                te permiten relajarte y disfrutar de la naturaleza, en medio del
                ambiente urbano. Estos placenteros refugios verdes te ofrecen
                recreación, eventos y propuestas para todos los gustos y edades.
                Las opciones van desde descansar a la sombra de grandes
                arboledas, hasta realizar deportes extremos en pistas
                especiales. Otros, ubicados a la vera de espejos de agua, son
                rincones ideales para practicar actividades náuticas y
                contactarte con la belleza de los paisajes nativos. El Monumento
                al Pueblo Puntano de la Independencia y el Monumento de
                Reivindicación Histórica al General Manuel Belgrano te acercan a
                nuestro pasado e identidad cultural. Cada uno de ellos con su
                marca distintiva, preservan vegetación autóctona, cuentan
                apasionantes historias y constituyen sitios de vital importancia
                por los beneficios ambientales y sociales que brindan a locales
                y turistas. Bienvenidos a los parques provinciales. Descubrí San
                Luis.
              </h4>
            </div>
            <br />
            <div className="container">{ListadoAtractivofull}</div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

PParques.contextType = Consumer;
export default PParques;
