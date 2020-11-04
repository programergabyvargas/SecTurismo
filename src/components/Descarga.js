import React, { Component } from "react";
import ReactWOW from "react-wow";

class Descarga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <ReactWOW animation="fadeIn">
        <div className="Descarga">
          <img
            src={`https://i.ibb.co/ft02QmL/SAN-LUIS-TURISMO-FULL-COLOR-TRANSP.png`}
            alt="Logo"
          />
          <a href="" style={{ textDecoration: "none" }}>
            <div className="descarga-leyenda">
              <div className="descarga-titulos">
                <span className="dt-1"> ¡Hacé click acá!</span>
                <span className="dt-2">
                  para obtener los mapas de toda la provincia
                </span>
              </div>

              <div className="descarga-icono">
                <i className="fas fa-arrow-down" />
              </div>
            </div>
          </a>
        </div>
      </ReactWOW>
    );
  }
}

export default Descarga;
