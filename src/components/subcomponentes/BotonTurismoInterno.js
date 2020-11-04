import React, { Component } from "react";
//import { Grid, Dev } from "gymnast";
import { Link } from "react-router-dom";

export default class BotonTurismoInterno extends Component {
  render() {
    return (
      <div className="container mb-5">
        <div className="container">
          <div className="row mb-3" style={{ paddingTop: "150px" }}>
            <div className="pantallaGrande">
              <center>
                <div className="row">
                  <div className="one-third column">
                    <Link to="/listado-guias-covid" className="link-menu">
                      <img
                        style={{ height: 200, width: 350 }}
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETA_EXCURSIONES.jpg`}
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="one-third column">
                    <Link to="/listado-agencias-covid" className="link-menu">
                      <img
                        style={{ height: 200, width: 400 }}
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETAS_AGENCIAS.jpg`}
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="one-third column">
                    <a
                      href="http://protocoloturismo.sanluis.gov.ar/alojamiento/"
                      className="link-menu"
                    >
                      <img
                        style={{ height: 200, width: 400 }}
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETAS_ALOJAMIENTO.jpg`}
                        alt="Img"
                      />
                    </a>
                  </div>
                  <div className="row">
                    <div className="one column">
                      <Link to="/coronavirus" className="link-menu">
                        <img
                          style={{ height: 270, width: "97%" }}
                          className="img-fluid"
                          src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETAS_WEB.jpg`}
                          alt="Img"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
        <div className="row mb-3" style={{ paddingTop: "40px" }}>
          <div className="pantallaChica">
            <center>
              <div className="one-third column">
                <Link to="/listado-guias-covid" className="link-menu">
                  <img
                    style={{ height: 200, width: 350 }}
                    className="img-fluid"
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETA_EXCURSIONES.jpg`}
                    alt="Img"
                  />
                </Link>
              </div>
              <div className="one-third column">
                <Link to="/listado-agencias-covid" className="link-menu">
                  <img
                    style={{ height: 200, width: 400 }}
                    className="img-fluid"
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETAS_AGENCIAS.jpg`}
                    alt="Img"
                  />
                </Link>
              </div>
              <div className="one-third column">
                <a
                  href="http://protocoloturismo.sanluis.gov.ar/alojamiento/"
                  className="link-menu"
                >
                  <img
                    style={{ height: 200, width: 400 }}
                    className="img-fluid"
                    src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETAS_ALOJAMIENTO.jpg`}
                    alt="Img"
                  />
                </a>
              </div>
              <div className="row">
                <div className="one-third column">
                  <Link to="/coronavirus" className="link-menu">
                    <img
                      style={{ height: 100, width: "90%" }}
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/recursos/modal/TARJETAS_WEB.jpg`}
                      alt="Img"
                    />
                  </Link>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
