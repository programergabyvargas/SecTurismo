import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

class Pueba extends Component {
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
    return (
      <div className="PEventos">
        {this.state.loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div className="container">
              <div className="row mb-3" style={{ paddingTop: "150px" }}>
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>Parque Nativo Prueba Video</h3>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <img alt="avion"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover"
                      }}
                      src="http://agenciasanluis.com/wp-content/uploads/2016/07/FAU_4596.jpg"
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
                      <a href="https://www.youtube.com/watch_popup?v=VwFrSHxso4A">
                        Ver Video
                      </a>
                    </button>
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

Pueba.contextType = Consumer;

export default Pueba;
