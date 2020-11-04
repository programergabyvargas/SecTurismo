import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PTrazosHistoria extends Component {
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
      url: `${process.env.REACT_APP_API}/atractivo/moto/'20'`,
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
                  Moto Turismo - Trazos de Historia
                </h3>
              </div>
              <h4 className="" style={{ color: `#808080` }}>
                &nbsp; &nbsp;Este recorrido te invita a descubrir pintorescos
                pueblos puntanos impregnados de historia que se entrelazan entre
                curvas y pasados comunes. Tierra llena de rincones con herencia,
                folklor y costumbres típicas, auténticos testigos que conservan
                en la memoria un pasado de rica tradición minera que se remonta
                desde los tiempos de la colonia. El mármol ónix en la Toma y el
                granito en Potrerillo y San Martin. Enmarcado en un paisaje
                serrano de impactante belleza, a cada paso transitado, podrás
                conocer magníficos diques y embalses enclavados en las sierras,
                ríos de aguas transparentes, lugares de observación de flora y
                fauna autóctona anfitriones naturales que saludan al visitante
                que recorre la geografía norteña de San Luis. Vestigios de
                millones de años en el tiempo, el Parque Bajo de Veliz abre sus
                puertas a los visitantes de afición por los yacimientos
                paleontológicos o simple curiosidad por lo que antecedió a la
                vida humana en la tierra. Viví la experiencia única de visitar
                estos lugares en donde su gente, alegre, amable y acogedora, te
                esperan para hacer de tu viaje, una experiencia inolvidable.
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
                <a href="https://goo.gl/maps/9c7fnddrDJNZiL247" key="Tips">
                  <div className="reco-titulo" style={{ width: "300px" }}>
                    <span className="reco-t-sub2">Ver Mapa</span>
                  </div>
                </a>
              </div>
              <br></br>
              <div className="Recorridos">
                <a
                  href="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/MATICES%20NORTENOS-TRAZOS%20DE%20HISTORIA-INFO%2015-10-19.pdf"
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

PTrazosHistoria.contextType = Consumer;
export default PTrazosHistoria;
