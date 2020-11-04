import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import axios from "axios";

class PArchiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      carousel: []
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
      url: `${process.env.REACT_APP_API}/eventos/50`,
      responseType: "json"
    })
      .then(response => {
        if (response.data.data.count > 0) {
          let activo = false;
          let carousel = response.data.data.registros.map((a, index) => {
            if (a.imagen === "default.jpg") {
              return null;
            }
            let estilo = {
              backgroundImage: `url(https://www.revistasavia.com/wp-content/uploads/2018/03/analisis-08-1.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            };
            if (!activo) {
              activo = true;
              return (
                <div
                  key={`caro-${index}`}
                  className="carousel-item active"
                  style={estilo}
                />
              );
            } else {
              return (
                <div
                  key={`caro-${index}`}
                  className="carousel-item"
                  style={estilo}
                />
              );
            }
          });
          self.setState({
            data: response.data.data.registros,
            carousel: carousel,
            loading: false
          });
        } else {
          //No hay registros o el id no es correcto
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.getData();
  }

  render() {
    const carousel = this.state.carousel;
    const items = this.state.data.map(e => {
      let estilo = {
        backgroundImage: `url(${
          process.env.REACT_APP_API_RECURSOS
        }/recursos/eventos/${e.foto_uno})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      };
      let dfecha = e.dfecha.split("-");
      let hfecha = e.hfecha.split("-");
      dfecha = `${dfecha[2]}/${dfecha[1]}`;
      hfecha = `${hfecha[2]}/${hfecha[1]}`;
      //let numero = Math.floor(Math.random() * (4 - 1 + 1)) + 1; //Color random
      return (
        <div key={`evento-${e.id}`} className="col-lg-4 col-md-6">
          <div className="single-card">
            <Link to={`/evento/${e.id}`} className="eve-link">
              <div className="card-bg" style={estilo} />
              <div className="card-content">
                <h2>{e.titulo}</h2>
                {/* <h3 className={`bgc_${numero}`}>{dfecha} al {hfecha} - {e.localidad}</h3> */}
                <h3 style={{ background: "#" + e.color }}>
                  {dfecha} al {hfecha} - {e.localidad}
                </h3>
              </div>
            </Link>
            {/*<div className="overlay" style={{background: "#" + e.color}}>
                            <h3>{e.titulo}</h3>
                            <h2>{e.lugar}</h2>
                            <h4>Costo: $ {e.costo}</h4>
                            ver más <i className="fa fa-chevron-right"></i>
            </div>*/}
          </div>
        </div>
      );
    });
    return (
      <div className="PEventos">
        {this.state.loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div className="container ">
              <div className="row mb-3" style={{ paddingTop: "150px" }}>
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>¡Probá nuestra app!</h3>
                </div>
                <h4 className="" style={{ color: `#722789` }}>
                  1 - Bajá la App "Turismo San Luis 4.0" para Android haciendo
                  &nbsp;
                  <a
                    href="https://play.google.com/store/apps/details?id=com.grupocentro.TurismoSanLuis&hl=es"
                    className="link"
                  >
                    click acá
                  </a>
                  &nbsp; ó en el caso que tengas Iphone hace &nbsp;
                  <a
                    href="https://itunes.apple.com/ar/app/turismo-san-luis-4-0/id1450913653?mt=8"
                    className="link"
                  >
                    click acá.
                  </a>
                  <br />
                  <br />2 - Abrí la App y escaneá algunas de las siguientes
                  postales.
                </h4>
                <br />
                <center>
                  <img
                    id="asistente"
                    src="https://i.ibb.co/GThDBQn/puertas-edificio-001.jpg"
                  />
                  <br />
                  <img
                    id="banner"
                    src="https://i.ibb.co/h8vTFqd/01-DESCUBRIR.jpg"
                  />
                  <br />
                  <br />
                  <img
                    id="banner"
                    src="https://i.ibb.co/YBkWn2Q/02-DISFRUTAR.jpg"
                  />
                  <br />
                  <br />
                  <img
                    id="banner"
                    src="https://i.ibb.co/bzPdtvY/03-RELAJARSE.jpg"
                  />
                  <br />
                  <br />
                  <img
                    id="banner"
                    src="https://i.ibb.co/bzPdtvY/03-RELAJARSE.jpg"
                  />
                  <br />
                  <br />
                  <img
                    id="banner"
                    src="https://i.ibb.co/4ZJWq4d/04-SENTIR.jpg"
                  />
                  <br />
                  <br />
                  <img
                    id="banner"
                    src="https://i.ibb.co/w45S8CC/05-VIVIR.jpg"
                  />
                  <br />
                  <br />
                  <img
                    id="banner"
                    src="https://i.ibb.co/YDRnfmM/06-CREER.jpg"
                  />
                  <br />
                  <br />
                  <img
                    id="banner"
                    src="https://i.ibb.co/hX2r1tC/07-REENCONTRARSE.jpg"
                  />
                  <br />
                  <br />
                  <img id="folleto" src="https://i.ibb.co/mb5z9c7/2.jpg" />
                  <br />
                  <br />
                  <img id="folleto" src="https://i.ibb.co/m6F835P/4.jpg" />
                  <br />
                  <br />
                  <img id="folleto" src="https://i.ibb.co/LtRVtBg/5.jpg" />
                  <br />
                  <br />
                  <img id="folleto" src="https://i.ibb.co/5hW97CY/6.jpg" />
                  <br />
                  <br />
                  <img id="folleto" src="https://i.ibb.co/HYhwNL4/7.jpg" />
                  <br />
                  <br />
                  <img id="folleto" src="https://i.ibb.co/wMwDCHS/8.jpg" />
                  <br />
                  <br />
                  <img id="folleto" src="https://i.ibb.co/0nGkLq3/1.jpg" />
                  <br />
                  <br />
                  <img id="folleto" src="https://i.ibb.co/gmhnRd2/3.jpg" />
                </center>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PArchiApp.contextType = Consumer;

export default PArchiApp;
