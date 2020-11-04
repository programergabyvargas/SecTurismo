import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="logom">
          <Link to="/" className="link-menu">
            <img
              className="img-fluid"
              src={`https://i.ibb.co/ft02QmL/SAN-LUIS-TURISMO-FULL-COLOR-TRANSP.png`}
              alt="Primavera San Luis"
            />
          </Link>
        </div>
        <div className="ministerio">
          <h3>Secretaría de Turismo</h3>
          <p>Av. Illia 35, esq. Junín</p>
          {/*<p>
            <a href="tel:+5492664423479">+54 (266) 4423479</a>
          </p>
          <p>
            <a href="tel:+5492664644938">+54 (266) 4644938</a>
          </p>*/}
          <p>San Luis, Capital</p>
        </div>
        <div className="social">
          <h3>Seguinos</h3>
          <p>
            <i className="fab fa-facebook-square" />
            <a
              href="https://www.facebook.com/turismodesanluis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; @TurismodeSanLuis
            </a>
          </p>
          <p>
            <i className="fab fa-twitter-square" />
            <a
              href="https://twitter.com/TurismoSanLuis_"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; @TurismoSanLuis_
            </a>
          </p>
          <p>
            <i className="fab fa-instagram" />
            <a
              href="https://www.instagram.com/turismo_san_luis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; @Turismo_san_luis
            </a>
          </p>
        </div>
        <div className="institucional">
          <img
            className="img-fluid"
            src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/pngsecretaria.png"
            alt="San Luis Nos Une"
          />
        </div>
      </div>
    );
  }
}

export default Footer;
