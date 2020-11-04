import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";

class Novedades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      index: 0,
      timerID: false
    };
    this.stop = this.stop.bind(this);
    this.carouselTimer = this.carouselTimer.bind(this);
  }

  carouselTimer() {
    let indice = parseInt(this.state.index, 10);
    indice++;
    if (indice > this.state.data.length - 1) {
      indice = 0;
    }
    this.setState(
      {
        index: indice
      },
      () => {
        let oldData = Object.assign([], this.state.data);
        oldData = oldData.map(d => {
          return { ...d, display: "none" };
        });
        let newDataItem = oldData[indice];
        newDataItem["display"] = "block";
        oldData[indice] = newDataItem;
        this.setState({
          data: oldData
        });
      }
    );
  }

  stop() {
    clearInterval(this.state.timerID);
  }

  componentDidMount() {
    //A los datos del Fetch hay que agregar la propiedad display: "none"
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token
      },
      url: `${process.env.REACT_APP_API}/novedades/12`,
      responseType: "json"
    })
      .then(response => {
        let data = response.data.data.registros.map(novedad => {
          novedad.display = "none";
          return novedad;
        });
        self.setState(
          {
            data: data,
            loading: false
          },
          () => {
            if (parseInt(response.data.data.count, 10) > 0) {
              let timer = setInterval(self.carouselTimer, self.props.time);
              self.setState(
                {
                  timerID: timer
                },
                () => {
                  self.carouselTimer();
                }
              );
            }
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  render() {
    const items = this.state.data.map(item => {
      let descripcion = item.descripcion.substr(0, 150) + "...";
      let fecha = item.fecha.split("-");
      //<div key={`ci-${item.id}`} className="animated fadeInRight delay-2s" style={{display: item.display, width: "100%"}}></div>
      return (
        <div
          key={`ci-${item.id}`}
          className=""
          style={{ display: item.display, width: "100%" }}
        >
          <div className="row">
            <div className="col-sm-3">
              <img
                className="img-fluid"
                style={{ height: "200px" }}
                src={`${
                  process.env.REACT_APP_API_RECURSOS
                }/recursos/novedades/${item.foto_uno}`}
                alt="Foto"
              />
            </div>
            <div className="col-sm-9">
              <Link
                to={`/novedad/${item.id}`}
                className="link"
                style={{ color: "white" }}
              >
                <div className="d-flex justify-content-between">
                  <h1>{item.titulo}</h1>
                  <span className="pt-3">{`${fecha[2]}/${fecha[1]}/${
                    fecha[0]
                  }`}</span>
                </div>

                <div>
                  <h4>{item.subtitulo}</h4>
                </div>
                <div>
                  <p>{descripcion}</p>
                </div>
                <div className="d-flex justify-content-end">
                  <i className="fas fa-book-open" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container mb-3">
        <div className="row">
          <div className="col">
            <div className="Novedades">
              <Link to="/novedades" className="novedades-leyenda">
                <div className="background-bar" />
                <div className="texto">
                  <ul>
                    <li>No</li>
                    <li>Ve</li>
                    <li>Da</li>
                    <li>Des</li>
                    <li>
                      <i className="fas fa-arrow-right" />
                    </li>
                  </ul>
                </div>
              </Link>
              <div className="novedades-body">{items}</div>
            </div>
          </div>
        </div>
        {/*<button type="btn btn-primary" onClick={this.stop}>Stop</button> */}
      </div>
    );
  }
}

Novedades.contextType = Consumer;

export default Novedades;
