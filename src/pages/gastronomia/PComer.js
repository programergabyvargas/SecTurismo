import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

class PComer extends Component {
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
            <div className="container" style={{ paddingTop: "150px" }}>
              <center>
                <div className="Recorridos ">
                  <div className="reco-titulo">
                    <span className="reco-t-sub2"> ¡Muy Pronto! </span>
                  </div>
                  <div className="">
                    <p
                      className=""
                      style={{ fontSize: "50px", color: "#C3B1AD" }}
                    >
                      Próximamente podrás ver aquí nuestra nueva ruta
                      gastronómica.
                    </p>
                  </div>
                </div>
              </center>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PComer.contextType = Consumer;

export default PComer;
