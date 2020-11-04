import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PCielosPuntanos extends Component {
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
      url: `${process.env.REACT_APP_API}/atractivo/moto/'10'`,
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
                <h3 style={{ color: `#722789` }}>
                  Moto Turismo - Cielos Puntanos
                </h3>
              </div>
              <h4 className="" style={{ color: `#808080` }}>
                &nbsp; &nbsp;Partiendo desde la ciudad de San Luis rumbo a las
                sierras centrales, comenzamos a recorrer una de las rutas más
                imponentes de la geografía puntana. En la cima de las sierras a
                2088 metros sobre el nivel del mar, donde el aire es más fresco
                y puro, podemos visualizar en el horizonte los distintos cerros
                ubicados en los cuatro puntos cardinales de la provincia,
                amplios valles cubiertos con su típico manto verde y ríos que
                atraviesan las sierras desembocando sus aguas en majestuosos
                diques.<br></br> A cada kilómetro transitado de este emocionante
                circuito, nos encontraremos con una gran variedad de paisajes,
                valles, quebradas, arroyos y sierras de notable belleza y
                encanto. Podrás conocer una gran cantidad de atractivos
                naturales únicos y culturales de gran importancia nacional como
                el pueblo de La Carolina, declarado pueblo autentico por el
                Ministerio de Turismo de La Nación, debido a sus características
                de identidad única.<br></br> Lugares perdidos en el tiempo y
                rutas de alta montaña, forman parte de esta aventura que tiene
                como protagonista a las travesías, rutas trazas por encima de
                las sierras, marcadas por curvas serpenteantes que a cada paso
                desafían hasta el más experimentado conductor. Construcciones
                que reivindican a los próceres de nuestro país, como el
                Monumento a la Bandera en la localidad del Toro Negro, se
                emplazan al costado de la ruta para llevarse el record del
                mástil más alto del país y lugar de parada obligada para la foto
                del recuerdo. <br></br>Rumbo al final de este paseo, te
                encontrarás con poblados tranquilos, de gran tradición cultural
                y religiosa desembarcando en la ciudad capital como refugio
                final para el descanso con su gran oferta hotelera.
              </h4>
              <br></br>

              <br />
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "200px" }}>
                  <span className="reco-t-sub2">Imperdibles:</span>
                </div>
              </div>
              <br />
            </div>
            <br />
            <br />
            <div className="container">{ListadoAtractivofull}</div>
            <center>
              {" "}
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
              <br></br>
              <div className="Recorridos">
                <a href="https://goo.gl/maps/6RYEE5XZTJCMuxpM8" key="Tips">
                  <div className="reco-titulo" style={{ width: "300px" }}>
                    <span className="reco-t-sub2">Ver Mapa</span>
                  </div>
                </a>
              </div>
              <br></br>
              <div className="Recorridos">
                <a
                  href="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/ALTA%20SERRANIA-CIELOS%20PUNTANOS-INFO-15-10-19.pdf"
                  key="Tips"
                >
                  <div className="reco-titulo" style={{ width: "300px" }}>
                    <span className="reco-t-sub2">Descargar Ficha</span>
                  </div>
                </a>
              </div>
              <br></br>
              <br></br>
              <br></br>
            </center>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

PCielosPuntanos.contextType = Consumer;
export default PCielosPuntanos;
