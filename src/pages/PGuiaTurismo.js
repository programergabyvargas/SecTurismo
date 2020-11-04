import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import axios from "axios";

class PGuiaTurismo extends Component {
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
            <div className="container mb-5" />
            <div className="container">
              <div className="row mb-3" style={{ paddingTop: "150px" }}>
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>Guías de Turismo</h3>
                </div>
                <div className="col">
                  <img
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover"
                    }}
                    src="http://agenciasanluis.com/wp-content/uploads/2017/09/terrazas.jpg"
                  />
                  <button
                    className="btn btn-dark btn-block"
                    type="button"
                    data-toggle="collapse"
                    data-target="#nueva_zona"
                    aria-expanded="false"
                    aria-controls="nueva_zona"
                    style={{
                      backgroundColor: "#cb6120",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700"
                    }}
                  >
                    San Luis
                  </button>
                  <div className="collapse" id="nueva_zona">
                    <div className="card card-body">
                      <div className="row">
                        <div className="col-md-10" style={{ color: "#cb6120" }}>
                          <div className="form-group">
                            <div className="atractivo-info">
                              <h3>ALFONZO, Juan Alberto – Legajo N° 132</h3>
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Categoría: Guía Profesional
                              </span>
                              <br />
                              <span className="pr-4">
                                <i class="fas fa-phone-volume" />
                                &nbsp; Teléfono: 434956/ 154695702
                              </span>
                              <br />
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Ámbito Ejercicio: Provincia de San Luis
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                betursanluis12@hotmail.com
                              </span>
                              <hr />
                              <h3> TOLDO, Luis Fabián – Legajo N° 190</h3>
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Categoría: Guía Profesional
                              </span>
                              <br />
                              <span className="pr-4">
                                <i class="fas fa-phone-volume" />
                                &nbsp; Teléfono: 0266 – 4464440
                              </span>
                              <br />
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Ámbito Ejercicio: Provincia de San Luis
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                lftoldo@hotmail.com{" "}
                              </span>
                              <hr />
                              <h3> GIMENEZ, María – Legajo N° 204</h3>
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Categoría: Guía Profesional
                              </span>
                              <br />
                              <span className="pr-4">
                                <i class="fas fa-phone-volume" />
                                &nbsp; Teléfono: 2664 848159
                              </span>
                              <br />
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Ámbito Ejercicio: Merlo
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                mariamercedesgimenez5@gmail.com
                              </span>
                              <hr />
                              <h3>LOPEZ, Jorge Daniel – Legajo N° 159</h3>
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Categoría: Guía Profesional
                              </span>
                              <br />
                              <span className="pr-4">
                                <i class="fas fa-phone-volume" />
                                &nbsp; Teléfono: 0266 154 404588
                              </span>
                              <br />
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Ámbito Ejercicio: Merlo
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                guiajorgelopez@gmail.com
                              </span>
                              <hr />
                              <h3>
                                ORTIZ SUAREZ, Fernando Jorge – Legajo N° 158
                              </h3>
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Categoría: Guía Profesional
                              </span>
                              <br />
                              <span className="pr-4">
                                <i class="fas fa-phone-volume" />
                                &nbsp; Teléfono: 02656 15411655
                              </span>
                              <br />
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Ámbito Ejercicio: Merlo
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                guiajorgelopez@gmail.com
                              </span>
                              <hr />
                              <h3>LENING, Kevin Alexis – Legajo N° 208</h3>
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Categoría: Guía Profesional
                              </span>
                              <br />
                              <span className="pr-4">
                                <i class="fas fa-phone-volume" />
                                &nbsp; Teléfono: 2664 861930
                              </span>
                              <br />
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Ámbito Ejercicio: Provincia de San Luis
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                kevin.lening64gmail.com
                              </span>
                              <hr />
                              <h3>
                                ILLANES, Cristian Guillermo – Legajo N° 209
                              </h3>
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Categoría: Guía Profesional
                              </span>
                              <br />
                              <span className="pr-4">
                                <i class="fas fa-phone-volume" />
                                &nbsp; Teléfono: 266 4007011
                              </span>
                              <br />
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Ámbito Ejercicio: Provincia de San Luis
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                clishillanes83@gmail.com
                              </span>
                              <hr />
                              <h3>
                                PASETTI SIGNORIO, Florencia – Legajo N° 210
                              </h3>
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Categoría: Guía Profesional
                              </span>
                              <br />
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Ámbito Ejercicio: Provincia de San Luis
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                florpasetti@hotmail.com
                              </span>
                              <hr />
                              <h3>IZAGUIRRE, María Angélica- Legajo Nº 153</h3>
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Categoría: Guía Profesional
                              </span>
                              <br />
                              <span className="pr-4">
                                <i class="fas fa-phone-volume" />
                                &nbsp; Teléfono: 02664 154725956
                              </span>
                              <br />
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Ámbito Ejercicio: Provincia de San Luis
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                mariangelica_63@hotmail.com
                              </span>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover"
                        }}
                        src="http://www.lavillademerlo.com.ar/data1/images/merlosanluis01.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#Merlo"
                        aria-expanded="false"
                        aria-controls="Merlo"
                        style={{
                          backgroundColor: "#336535",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        Merlo
                      </button>
                      <div className="collapse" id="Merlo">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#336535" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h3> MARQUEZ, Silvana – Legajo N° 101</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 0266 432982/ 154553113
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <hr />
                                  <h3> PALLERO, Claudia– Legajo N° 102</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono:02656 474301/ 0266 154846273
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    claudina@gmail.com
                                  </span>
                                  <hr />
                                  <h3>
                                    MARASCHI, Mariela Julia– Legajo N° 106
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Idóneo
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 0266 154835845
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <hr />
                                  <h3>
                                    SANCHEZ, Gladys Silvana – Legajo N° 207
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 2664 476884 002025
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    gladyssanchez@hotmail.com
                                  </span>
                                  <hr />
                                  <h3>SEBASTIANO, Lionella – Legajo N° 112</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 02656 473835/ 15297643
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    lionellasebastiano@yahoo.com.ar
                                  </span>
                                  <hr />
                                  <h3>ONTIVEROS, Jorge Luis – Legajo N° 118</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Idóneo
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 02656 474153
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    comechingon@merlosl.com.ar
                                  </span>
                                  <hr />
                                  <h3>
                                    PARAPUGNA, Mabel Ester – Legajo N° 126
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 02656 479221/ 15701779
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    mabelparapugna@yahoo.com.ar
                                  </span>
                                  <hr />
                                  <h3>
                                    PAYOTE, Marcelo Santiago – Legajo N° 129
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 476559/ 154246070
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    cabanaelrincon@hotmail.com
                                  </span>
                                  <hr />
                                  <h3>CASTRO, Carlos Omar – Legajo N° 146</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 02656 479640
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    charlycastroguia@hotmail.com
                                  </span>
                                  <hr />
                                  <h3> RUBIO, Fanny Beatriz – Legajo N° 154</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 02656 476556
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    fannyrubio@hotmail.com.ar
                                  </span>
                                  <hr />
                                  <h3> ALCON, Carla María – Legajo N° 160</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 0266 154576172
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    carlamerlosl@hotmail.com
                                  </span>
                                  <hr />
                                  <h3>
                                    MACHUCA, Diego Sebastián – Legajo N° 162
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Baqueano
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 02656 4744740
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Villa de Merlo
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    diegosebastianmachuca@gmail.com
                                  </span>
                                  <hr />
                                  <h3>
                                    CASTELLANO, Fernando Nicolás – Legajo N° 167
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 0266 154252174
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    fernicocastellano@hotmail.com
                                  </span>
                                  <hr />
                                  <h3>CASAS QUEIPO, Marisol – Legajo N° 168</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 0266 154366461
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <hr />
                                  <h3>
                                    POLLINI, Luciana Vanina – Legajo N° 169
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 0266 4639450
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    ipolgtur@hotmail.com
                                  </span>
                                  <hr />
                                  <h3>ROMERO, Ileana Wanda – Legajo N° 177</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 02656 479551/ 0266
                                    154836775
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    fernan-wanda@merlosl.com.ar
                                  </span>
                                  <hr />
                                  <h3>GULLERMO, Sergio - Legajo N° 179</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 02656 473755/ 0266
                                    154317560
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    sergiogullermo@gmail.com
                                  </span>
                                  <hr />
                                  <h3>
                                    ROMERO, Patricia Andrea - Legajo N° 180
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 02656 473403/ 02657 526917
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    andrearomero48@yahoo.com.ar
                                  </span>
                                  <hr />
                                  <h3>PEREZ, Cleira - Legajo N° 182</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 266154776444
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <hr />
                                  <h3>MOLINA, Mara Graciela - Legajo N° 184</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 266445705614
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    maraguiadeturismo@outlook.com
                                  </span>
                                  <hr />
                                  <h3>ROJAS, Mariana - Legajo N° 185</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 0266 154690504/ 02656
                                    478516
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    rojasmariana24@hotmail.com
                                  </span>
                                  <hr />
                                  <h3>MARTINEZ, José - Legajo N° 186</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 266154746873
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    josemartinezmerlo@gmail.com
                                  </span>
                                  <hr />
                                  <h3>LANARO, Rodrigo - Legajo N° 191</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 0266- 154313045/
                                    02656479972
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    rodrigo.lanaro@survielle.com.ar
                                  </span>
                                  <hr />
                                  <h3>
                                    MAGALLAN, Melania Angélica - Legajo N° 193
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 02664 745506/ 2656 473755
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <hr />
                                  <h3>
                                    SUAREZ, Carlos Marcelo - Legajo N° 201
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    marcelosuarezguiatur@yahoo.com
                                  </span>
                                  <hr />
                                  <h3>AMAYA, Martín Aquiles - Legajo N° 202</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Baqueano
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 2656 475208
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    hotalgarrobo@merlo.sl.com.ar
                                  </span>
                                  <hr />
                                  <h3>BELFIORE, Marcelo - Legajo N° 203</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Baqueano
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 2656 15412090
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    deloscondores@gmail.com
                                  </span>
                                  <hr />
                                  <h3>DEL PINO, Jorgelina - Legajo N° 205</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 2664 360218
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    delpino2212@gmail.com
                                  </span>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover"
                        }}
                        src="https://cypnoticias.com.ar/wp-content/uploads/2018/01/parque-astron%C3%B3mico-la-punta-san-luis.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#VillaMercedes"
                        aria-expanded="false"
                        aria-controls="VillaMercedes"
                        style={{
                          backgroundColor: "#A3BD31",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        La Punta
                      </button>
                      <div className="collapse" id="VillaMercedes">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#A3BD31" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h3>GALMES, Alberto - Legajo N° 119</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 2664 - 566020
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    betogalmes@gmail.com
                                  </span>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover"
                        }}
                        src="https://www.caminosanluis.com.ar/wp-content/uploads/2013/01/IGLESIA.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#JuanaKoslay"
                        aria-expanded="false"
                        aria-controls="JuanaKoslay"
                        style={{
                          backgroundColor: "#CB6120",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        La Carolina
                      </button>
                      <div className="collapse" id="JuanaKoslay">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#CB6120" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h3>
                                    VELAZQUEZ, Marcos Damián - Legajo N° 156
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Baqueano
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 266 154863806
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    marcosdv1981@hotmail.com
                                  </span>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover"
                        }}
                        src="http://2.bp.blogspot.com/-598UBHYcPXQ/VE0ZR6WV7GI/AAAAAAAAhDE/ZzdWtdvRH8Q/s1600/DSCN7133.JPG"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#SanFrancisco"
                        aria-expanded="false"
                        aria-controls="SanFrancisco"
                        style={{
                          backgroundColor: "#BF3376",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        Concarán
                      </button>
                      <div className="collapse" id="SanFrancisco">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#BF3376" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h3>TORRES, Nicolina - Legajo N° 206</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 2657 396023
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    nicol_16_pop@hotmail.com
                                  </span>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover"
                        }}
                        src="https://www.tripin.travel/wp-content/uploads/2017/04/carpinteria2.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#Carpintería"
                        aria-expanded="false"
                        aria-controls="Carpintería"
                        style={{
                          backgroundColor: "#336535",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        Carpintería
                      </button>
                      <div className="collapse" id="Carpintería">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#336535" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h3>
                                    TRONCOSO, Érica Vanesa - Legajo N° 207
                                  </h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Profesional
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono:2656 407491 2664 010161
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    erica.troncoso@htmail.com
                                  </span>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover"
                        }}
                        src="http://www.hotelpotrero.sanluis.gov.ar/images/slider/index/f1.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#Potrero"
                        aria-expanded="false"
                        aria-controls="Potrero"
                        style={{
                          backgroundColor: "#CB6120",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700"
                        }}
                      >
                        Potrero de los Funes
                      </button>
                      <div className="collapse" id="Potrero">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#CB6120" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h3>MARTINELLI, Martin - Legajo N° 181</h3>
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Categoría: Guía Baqueano
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i class="fas fa-phone-volume" />
                                    &nbsp; Teléfono: 4495428/ 4400418
                                  </span>
                                  <br />
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Ámbito Ejercicio: Provincia de San
                                    Luis
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    aventurasanluis@gmail.com
                                  </span>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PGuiaTurismo.contextType = Consumer;

export default PGuiaTurismo;
