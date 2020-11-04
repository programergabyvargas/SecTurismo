import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PVallesEncantados extends Component {
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
      url: `${process.env.REACT_APP_API}/atractivo/moto/'30'`,
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
                  Moto Turismo - Valles Encantados
                </h3>
              </div>
              <h4 className="" style={{ color: `#808080` }}>
                &nbsp; &nbsp;Entornos naturales privilegiados en San Luis, hacen
                que muchos de nuestros pueblos sean únicos. Las rutas del valle
                despliegan la majestuosidad del imponente cordón de sierras
                escarpadas de los Comechingones, donde podrás visitar los saltos
                de agua más imponentes y el hogar del ave más grande de
                Sudamérica, el cóndor. Desde las alturas se puede observar el
                Valle del Conlara en toda su extensión. Los encantadores y
                apacibles pueblitos enclavados sobre la ruta Nº 1 en la famosa
                ruta “Corredor del bio comenchingones”, primera reserva natural
                habitada en el país que tiene por objetivo canalizar de manera
                ordenada el flujo de turistas y preservar los recursos naturales
                de la región, invitan al turista a entregarse de lleno al ocio,
                la aventura, los paseos y el descanso, disfrutando de
                temperaturas ideales todo el año. En todo el recorrido te
                encontrarás con lugares en donde la gastronomía típica y el
                camino de la cerveza artesanal te esperan para disfrutar el
                verdadero sabor casero, de preparación única con materia prima
                obtenida de productores de la zona y agua extraída de los
                cristalinos ríos que descienden de la sierra.
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
                <a href="https://goo.gl/maps/g17bhPZsY9sh7Q3b9" key="Tips">
                  <div className="reco-titulo" style={{ width: "300px" }}>
                    <span className="reco-t-sub2">Ver Mapa</span>
                  </div>
                </a>
              </div>
              <br></br>
              <div className="Recorridos">
                <a
                  href="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/RUTAS%20DEL%20VALLE-VALLE%20ENCANTADO%20-%2015-10-19..pdf"
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

PVallesEncantados.contextType = Consumer;
export default PVallesEncantados;
