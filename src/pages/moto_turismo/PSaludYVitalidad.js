import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PSaludYVitalidad extends Component {
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
      url: `${process.env.REACT_APP_API}/atractivo/moto/'40'`,
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
                  Moto Turismo - Salud y Vitalidad
                </h3>
              </div>
              <h4 className="" style={{ color: `#808080` }}>
                &nbsp; &nbsp;Este original recorrido comienza con la visita a
                uno de los paisajes más impresionantes de la vasta tierra
                sanluiseña, “Las salinas del bebedero” Este majestuoso desierto
                blanco, junto a la laguna del Bebedero, se presenta como la
                ocasión perfecta para no solo recrear la vista, sino para
                disfrutar del silencio y el reflejo del sol en este paisaje de
                llanura blanca. Siguiendo el camino marcado, llegaremos a dos
                destinos saludables más solicitados por sus importantes
                propiedades terapéuticas, las termas de Balde y San Jerónimo,
                recomendados para combatir el estrés y mejorar la salud. Después
                de cargar las pilas, el viaje por este circuito continúa con
                rumbo hacia el norte de la provincia pasando por el costado
                oeste de las sierras centrales para luego atravesarlas y llegar
                al tradicional circuito serrano, con sus ríos de agua cristalina
                y apacibles, ideales para descansar y disfrutar en familia.
                Luego de pasar por la travesía de Potrero - La Punta, donde los
                atardeceres tienen un color especial todos los días, se llega a
                la ciudad de San Luis capital, fin del camino y escenario de la
                cita con la gastronomía y la noche puntana, con una amplia
                oferta de actividades nocturnas para disfrutar solo o
                acompañado.
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
                <a href="https://goo.gl/maps/PfPr8PJmTgYr1Vjd7" key="Tips">
                  <div className="reco-titulo" style={{ width: "300px" }}>
                    <span className="reco-t-sub2">Ver Mapa</span>
                  </div>
                </a>
              </div>
              <br></br>
              <div className="Recorridos">
                <a
                  href="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/2.10%20F%20TERMAS%2C%20SALINAS%20Y%20DIQUES-%28%20SALUD%20Y%20VITALIDAD%29%20-%20NUEVO15-10-19.pdf"
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

PSaludYVitalidad.contextType = Consumer;
export default PSaludYVitalidad;
