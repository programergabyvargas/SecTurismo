import React, { Component } from "react";
import { Consumer } from "../context";
import CompendioDeMedidas from "../components/coronavirus/CompendioDeMedidas";
import { Link } from "react-router-dom";

import axios from "axios";

class PCoronavirus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      carousel: [],
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/eventos/50`,
      responseType: "json",
    })
      .then((response) => {
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
              backgroundRepeat: "no-repeat",
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
            loading: false,
          });
        } else {
          //No hay registros o el id no es correcto
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.getData();
  }

  render() {
    return (
      <div className="PEventos">
        {this.state.loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div className="container mb-5" />
            <div className="container">
              <div className="row mb-3" style={{ paddingTop: "150px" }}>
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>
                    Información Importante - coronavirus
                  </h3>
                </div>
                <div className="col">
                  <center>
                    <h2 style={{ color: `#722789`, fontWeight: "bold" }}>
                      HAGA CLICK PARA DESCARGAR EL PROTOCOLO PARA ALOJAMIENTOS
                      TURÍSTICOS
                    </h2>

                    <a
                      href={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/protocoloAlojamientos.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: `200px`, fontWeight: "bold" }}
                        className="img-fluid"
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/DNU.png`}
                        alt="Img"
                      />
                    </a>
                  </center>
                  <h2 style={{ color: `#722789`, fontWeight: "bold" }}>
                    ¿QUÉ ES?
                  </h2>
                  <h2>
                    Es un virus que se transmite de persona a persona y puede
                    causar enfermedades que van desde un resfriado común, hasta
                    enfermedades más graves como neumonía o bronquitis.
                  </h2>

                  <br />
                  <h2 style={{ color: `#722789`, fontWeight: "bold" }}>
                    ¿CÓMO SE PREVIENE?
                  </h2>
                  <h2>
                    <li>
                      Intensificar la limpieza y desinfección. Hacerlo al menos
                      tres veces al día.
                    </li>
                    <li>
                      Exhibir en espacios de circulación las recomendaciones y
                      números de teléfonos del Ministerio de Salud de la Nación
                      y de la Provincia de San Luis.{" "}
                    </li>
                    <li>
                      Ofrecer alcohol en gel y garantizar la provisión de agua y
                      jabón.
                    </li>
                    <li>
                      Mantener al menos dos metros de distancia entre mesas,
                      sillones o elementos de reunión.
                    </li>
                  </h2>
                  <br />
                  <center>
                    <img
                      style={{ fontWeight: "bold" }}
                      className="img-fluid placasCoronavirus"
                      src={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/prevencion.jpeg`}
                      alt="Img"
                    />
                  </center>
                  <br />
                  <h2>
                    El Ministerio de Turismo y Deportes de la Nación junto con
                    el Ministerio de Salud han conformado distintas resoluciones
                    e instructivos. Dejaremos los enlaces correspondientes donde
                    podrás descargarlos para luego imprimirlos.
                  </h2>
                  <p>Hacé Click en el icono para descargar el Instructivo</p>
                  <center>
                    <a
                      href={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/Agencia.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: `200px` }}
                        className="img-fluid"
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/boton agencia.png`}
                        alt="Img"
                      />
                    </a>
                    <br />
                    <h2>Agencias de viajes - Resolución 125</h2>
                    <a
                      href={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/Hotelero.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: `200px`, fontWeight: "bold" }}
                        className="img-fluid"
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/boton hoteleria.png`}
                        alt="Img"
                      />
                    </a>
                    <br />
                    <h2>Hoteleros/Gastronómicos - Resolución 126</h2>
                    <a
                      href={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/DNU.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: `200px`, fontWeight: "bold" }}
                        className="img-fluid"
                        src={`${
                          process.env.REACT_APP_API_RECURSOS
                        }/recursos/DNU.png`}
                        alt="Img"
                      />
                    </a>
                    <br />
                    <h2>
                      Decreto de Necesidad y Urgencia (DNU) - Emergencia
                      Sanitaria
                    </h2>
                  </center>
                  <br />
                  <h2 style={{ color: `#722789`, fontWeight: "bold" }}>
                    FLYER PARA DESCARGAR E IMPRIMIR (TAMAÑO A4)
                  </h2>
                  <br />
                  <center>
                    <img
                      style={{ fontWeight: "bold" }}
                      className="img-fluid placasCoronavirus"
                      src={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/placa-enfermedad.jpg`}
                      alt="Img"
                    />
                    <br />
                    <br />
                    <img
                      style={{ fontWeight: "bold" }}
                      className="img-fluid placasCoronavirus"
                      src={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/MEDIDAS3.jpg`}
                      alt="Img"
                    />
                    <br />
                    <br />
                    <img
                      style={{ fontWeight: "bold" }}
                      className="img-fluid placasCoronavirus"
                      src={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/MEDIDAS2.jpg`}
                      alt="Img"
                    />
                    <br />
                    <br />
                    <img
                      style={{ fontWeight: "bold" }}
                      className="img-fluid placasCoronavirus"
                      src={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/MEDIDAS1.jpg`}
                      alt="Img"
                    />
                    <br />
                    <br />

                    <img
                      style={{ fontWeight: "bold" }}
                      className="img-fluid placasCoronavirus"
                      src={`${
                        process.env.REACT_APP_API_RECURSOS
                      }/recursos/MEDIDAS.jpg`}
                      alt="Img"
                    />
                  </center>
                  <CompendioDeMedidas />
                  <h5>
                    *La información será actualizada de acuerdo a las medidas
                    que tome el Gobierno Nacional, a las que adhiera el Gobierno
                    de la Provincia de San Luis.
                  </h5>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PCoronavirus.contextType = Consumer;

export default PCoronavirus;
