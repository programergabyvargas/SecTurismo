import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

class PGuiaTurismo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      carousel: [],
      sanluis: [],
      carpinteria: [],
      volcan: [],
      potrero: [],
      merlo: [],
      punta: []
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
      url: `${process.env.REACT_APP_API}/guiasturismo`,
      responseType: "json"
    })
      .then(response => {
        console.log(response.data.data.registros.length);
        var i = 0;
        for (i = 0; i < response.data.data.registros.length; i++) {
          if (response.data.data.registros[i].ciudad === "Ciudad de San Luis") {
            this.state.sanluis.push(response.data.data.registros[i]);
          } else if (response.data.data.registros[i].ciudad === "Carpintería")
            this.state.carpinteria.push(response.data.data.registros[i]);
          else if (response.data.data.registros[i].ciudad === "El Volcán")
            this.state.volcan.push(response.data.data.registros[i]);
          else if (
            response.data.data.registros[i].ciudad === "Potrero de Los Funes"
          )
            this.state.potrero.push(response.data.data.registros[i]);
          else if (response.data.data.registros[i].ciudad === "Villa de Merlo")
            this.state.merlo.push(response.data.data.registros[i]);
          else if (response.data.data.registros[i].ciudad === "La Punta")
            this.state.punta.push(response.data.data.registros[i]);
        }
        console.log(this.state.sanluis);
        self.setState({
          loading: false
        });
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
    const sanluis = this.state.sanluis.map(nov => {
      return (
        <div key={`nov-f-${nov.nombre}`} className="row mb-5">
          <div className="col">
            <div className="titulo">
              <h3>{nov.nombre}</h3>
              <span className="pr-4">
                <i className="fas fa-user" />
                &nbsp; Categoría: {nov.categoria}
              </span>
              <br />
              <span className="pr-4">
                <i class="fas fa-phone-volume" />
                &nbsp; Teléfono: {nov.telefono}
              </span>
              <br />
              <span className="pr-4 ">
                <i className="fas fa-map-marker" />
                &nbsp; Ámbito Ejercicio: {nov.ambito}
              </span>
              <br />
              <span>
                <i class="fas fa-envelope" /> &nbsp; {nov.correo}
              </span>
              <hr />
            </div>
          </div>
        </div>
      );
    });
    const merlo = this.state.merlo.map(nov => {
      return (
        <div key={`nov-f-${nov.nombre}`} className="row mb-5">
          <div className="col">
            <div className="titulo">
              <h3>{nov.nombre}</h3>
              <span className="pr-4">
                <i className="fas fa-user" />
                &nbsp; Categoría: {nov.categoria}
              </span>
              <br />
              <span className="pr-4">
                <i class="fas fa-phone-volume" />
                &nbsp; Teléfono: {nov.telefono}
              </span>
              <br />
              <span className="pr-4 ">
                <i className="fas fa-map-marker" />
                &nbsp; Ámbito Ejercicio: {nov.ambito}
              </span>
              <br />
              <span>
                <i class="fas fa-envelope" /> &nbsp; {nov.correo}
              </span>
              <hr />
            </div>
          </div>
        </div>
      );
    });
    const punta = this.state.punta.map(nov => {
      return (
        <div key={`nov-f-${nov.nombre}`} className="row mb-5">
          <div className="col">
            <div className="titulo">
              <h3>{nov.nombre}</h3>
              <span className="pr-4">
                <i className="fas fa-user" />
                &nbsp; Categoría: {nov.categoria}
              </span>
              <br />
              <span className="pr-4">
                <i class="fas fa-phone-volume" />
                &nbsp; Teléfono: {nov.telefono}
              </span>
              <br />
              <span className="pr-4 ">
                <i className="fas fa-map-marker" />
                &nbsp; Ámbito Ejercicio: {nov.ambito}
              </span>
              <br />
              <span>
                <i class="fas fa-envelope" /> &nbsp; {nov.correo}
              </span>
              <hr />
            </div>
          </div>
        </div>
      );
    });
    const carpinteria = this.state.carpinteria.map(nov => {
      return (
        <div key={`nov-f-${nov.nombre}`} className="row mb-5">
          <div className="col">
            <div className="titulo">
              <h3>{nov.nombre}</h3>
              <span className="pr-4">
                <i className="fas fa-user" />
                &nbsp; Categoría: {nov.categoria}
              </span>
              <br />
              <span className="pr-4">
                <i class="fas fa-phone-volume" />
                &nbsp; Teléfono: {nov.telefono}
              </span>
              <br />
              <span className="pr-4 ">
                <i className="fas fa-map-marker" />
                &nbsp; Ámbito Ejercicio: {nov.ambito}
              </span>
              <br />
              <span>
                <i class="fas fa-envelope" /> &nbsp; {nov.correo}
              </span>
              <hr />
            </div>
          </div>
        </div>
      );
    });
    const potrero = this.state.potrero.map(nov => {
      return (
        <div key={`nov-f-${nov.nombre}`} className="row mb-5">
          <div className="col">
            <div className="titulo">
              <h3>{nov.nombre}</h3>
              <span className="pr-4">
                <i className="fas fa-user" />
                &nbsp; Categoría: {nov.categoria}
              </span>
              <br />
              <span className="pr-4">
                <i class="fas fa-phone-volume" />
                &nbsp; Teléfono: {nov.telefono}
              </span>
              <br />
              <span className="pr-4 ">
                <i className="fas fa-map-marker" />
                &nbsp; Ámbito Ejercicio: {nov.ambito}
              </span>
              <br />
              <span>
                <i class="fas fa-envelope" /> &nbsp; {nov.correo}
              </span>
              <hr />
            </div>
          </div>
        </div>
      );
    });
    const volcan = this.state.volcan.map(nov => {
      return (
        <div key={`nov-f-${nov.nombre}`} className="row mb-5">
          <div className="col">
            <div className="titulo">
              <h3>{nov.nombre}</h3>
              <span className="pr-4">
                <i className="fas fa-user" />
                &nbsp; Categoría: {nov.categoria}
              </span>
              <br />
              <span className="pr-4">
                <i class="fas fa-phone-volume" />
                &nbsp; Teléfono: {nov.telefono}
              </span>
              <br />
              <span className="pr-4 ">
                <i className="fas fa-map-marker" />
                &nbsp; Ámbito Ejercicio: {nov.ambito}
              </span>
              <br />
              <span>
                <i class="fas fa-envelope" /> &nbsp; {nov.correo}
              </span>
              <hr />
            </div>
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
                <div className="row mb-3">
                  <div className="col">
                    <img
                      alt="terrazas"
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
                          <div
                            className="col-md-10"
                            style={{ color: "#cb6120" }}
                          >
                            <div className="form-group">
                              <div className="atractivo-info">{sanluis}</div>
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
                      alt="merlo"
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
                              <div className="atractivo-info" />
                              {merlo}
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
                      alt="merlo"
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
                      data-target="#Punta"
                      aria-expanded="false"
                      aria-controls="Punta"
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
                    <div className="collapse" id="Punta">
                      <div className="card card-body">
                        <div className="row">
                          <div
                            className="col-md-10"
                            style={{ color: "#A3BD31" }}
                          >
                            <div className="form-group">
                              <div className="atractivo-info" />
                              {punta}
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
                      alt="carpinteria"
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
                                {carpinteria}
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
                      alt="potrero"
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
                                {potrero}
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
                      alt="carpinteria"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover"
                      }}
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Balneario_La_Hoya_en_El_Volc%C3%A1n.jpg"
                    />
                    <button
                      className="btn btn-dark btn-block"
                      type="button"
                      data-toggle="collapse"
                      data-target="#Volcán"
                      aria-expanded="false"
                      aria-controls="Volcán"
                      style={{
                        backgroundColor: "#336535",
                        height: "50px",
                        fontSize: "1.2rem",
                        lineHeight: "1.8rem",
                        fontWeight: "700"
                      }}
                    >
                      El Volcán
                    </button>
                    <div className="collapse" id="Volcán">
                      <div className="card card-body">
                        <div className="row">
                          <div
                            className="col-md-10"
                            style={{ color: "#336535" }}
                          >
                            <div className="form-group">
                              <div className="atractivo-info">
                                {volcan}
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
          </React.Fragment>
        )}
      </div>
    );
  }
}

PGuiaTurismo.contextType = Consumer;

export default PGuiaTurismo;

{
  /*

                <br></br>
                 
                  <br />
                  
                  
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="potrero"
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
                  </div>*/
}
