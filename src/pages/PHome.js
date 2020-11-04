import React, { Component } from "react";
import Recorridos from "../components/Recorridos";
import EventoForm from "../components/EventoForm";
import Descarga from "../components/Descarga";
import Novedades from "../components/Novedades";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";
import PantallaModal from "../components/subcomponentes/Modal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      contador: "",
      visible: true,
    };

    this.state = { time: {} };

    this.timer = 0;

    this.startTimer = this.startTimer.bind(this);

    this.countDown = this.countDown.bind(this);
  }
  secondsToTime() {
    let now = new Date();
    let y2k = new Date("Jul 02 2019 16:27:59");
    let days = (y2k - now) / 1000 / 60 / 60 / 24;
    let daysRound = Math.floor(days);
    let hours = (y2k - now) / 1000 / 60 / 60 - 24 * daysRound;
    let hoursRound = Math.floor(hours);
    let minutes =
      (y2k - now) / 1000 / 60 - 24 * 60 * daysRound - 60 * hoursRound;
    let minutesRound = Math.floor(minutes);
    let seconds =
      (y2k - now) / 1000 -
      24 * 60 * 60 * daysRound -
      60 * 60 * hoursRound -
      60 * minutesRound;
    let secondsRound = Math.round(seconds);
    let sec = secondsRound == 1 ? " seg" : " seg";
    let min = minutesRound == 1 ? " min " : " min ";
    let hr = hoursRound == 1 ? " hora" : " horas ";
    let dy = daysRound == 1 ? " día" : " días ";

    {
      /*let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);

    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;

    let seconds = Math.ceil(divisor_for_seconds);
    */
    }
    if (hoursRound.toString().length == 1) {
      hoursRound = "0" + hoursRound;
    }
    if (minutesRound.toString().length == 1) {
      minutesRound = "0" + minutesRound;
    }
    if (secondsRound.toString().length == 1) {
      secondsRound = "0" + secondsRound;
    }

    let obj = {
      d: "0" + daysRound,

      h1: hoursRound.toString().substring(0, 1),
      h2: hoursRound.toString().substring(1, 2),
      m1: minutesRound.toString().substring(0, 1),
      m2: minutesRound.toString().substring(1, 2),
      s1: secondsRound.toString().substring(0, 1),
      s2: secondsRound.toString().substring(1, 2),
    };

    return obj;
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  componentDidMount() {
    this.setState({
      visible: true,
    });

    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState({ loading: false });
    let timeLeftVar = this.secondsToTime();

    this.setState({ time: timeLeftVar });
    this.startTimer();
  }
  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.

    let seconds = this.state.seconds - 1;

    this.setState({
      time: this.secondsToTime(),

      seconds: seconds,
    });

    // Check if we're at zero.

    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div className="Home">
        {this.state.loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div className="menu-y-slider">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <div>
                  <div>
                    {/*
                <center>
                  <ReactWOW animation="fadeIn" data-wow-delay="10s">
                    <div className="contenedorContador">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/uNNc3DCvpko?rel=0&amp;autoplay=1&loop=1&playlist=8WO8rnRnZGg&mute=1&showinfo=0&controls=0"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      />
                      <div style={{display:"nones"}} className="contador">
                        <span className="titulo">
                          Esperando el Eclipse Solar
                        </span>
                        <br />
                        <span className="tiempo">
                          <div className="horas">{this.state.time.h1}</div>
                          <div className="horas2">{this.state.time.h2}</div>
                          <div className="separador">:</div>
                          <div className="minutos">{this.state.time.m1}</div>
                          <div className="minutos2">{this.state.time.m2}</div>
                          <div className="separador">:</div>
                          <div className="segundos">{this.state.time.s1}</div>
                          <div className="segundos2">{this.state.time.s2}</div>
                          <br />
                          <br />
                        </span>
                        <div className="textoTiempo">
                          <div className="horas">Horas </div>
                          <div className="minutos">Minutos </div>
                          <div className="segundos">Segundos </div>
                        </div>
                      </div>
                    </div>
                  </ReactWOW>
                </center>
*/}

                    <div className="carousel-inner">
                      <center>
                        <div className="pantallaGrande">
                          <PantallaModal
                            anchoMargen="850px"
                            altoMargen="600px"
                            anchoImg="800px"
                            altoImg="550px"
                            picture="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/modal/modalHorizontal.jpeg"
                          />
                        </div>
                      </center>
                      <div className="pantallaChica">
                        <PantallaModal
                          anchoMargen="280px"
                          altoMargen="550px"
                          anchoImg="250px"
                          altoImg="500px"
                          maginLeft="15px"
                          picture="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/modal/modalVertical.jpeg"
                        />
                      </div>
                      <ReactWOW animation="fadeIn" data-wow-delay="10s">
                        <div className="carousel-item img-slider-2 active">
                          <img
                            className=" tituloCarrusel  animated flipInX delay-2s"
                            src=" http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/colores.png"
                          />
                          <img
                            className=" tituloCarrusel2  animated flipInX delay-2s"
                            src=" http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/enSanLuis.png"
                          />
                        </div>
                        <div className="carousel-item img-slider-3">
                          <img
                            className="tituloCarrusel  animated flipInX delay-2s"
                            src=" http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/serenidad.png"
                          />

                          <img
                            className="tituloCarrusel2  animated flipInX delay-2s"
                            src=" http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/enSanLuis.png"
                          />
                        </div>

                        <div className="carousel-item img-slider-1">
                          <img
                            className=" tituloCarrusel  animated flipInX delay-2s"
                            src=" http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/calidez.png"
                          />
                          <img
                            className=" tituloCarrusel2  animated flipInX delay-2s"
                            src=" http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/enSanLuis.png"
                          />
                        </div>
                      </ReactWOW>
                    </div>
                  </div>

                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                  {/* <div className="imagenHome animated flipInX delay-2s">
                    <img src="http://turismo.sanluis.gov.ar/api-turismo/public/recursos/carousel/logo_carrusel.png" />
                    </div>*/}
                  <div className="slider-home-leyenda animated flipInX delay-2s">
                    <h1>En San Luis</h1>
                    <span>Viví experiencias únicas</span>
                  </div>
                </div>
              </div>
            </div>
            <Recorridos />
            {/* 
            <ReactWOW animation="fadeIn" data-wow-delay="10s">
              <EventoForm />
            </ReactWOW>*/}
            <br />
            <br />
            <br />
            <Novedades time="10000" />

            <Descarga />
            <div className="Recorridos">
              <div className="reco-titulo">
                <span className="reco-t-sub2">Nuestras Redes</span>
              </div>
            </div>
            <br />
            <div class="grid-container">
              <div>
                <center>
                  <Link to="/" className="link-menu">
                    <img
                      className="img-fluid"
                      src={`https://i.ibb.co/fGXVJvH/LOGO-INS.png`}
                      alt="Primavera San Luis"
                      style={{ width: "300px" }}
                    />
                  </Link>
                  <br />
                  <br />

                  {/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js" />
                  <iframe
                    src="//lightwidget.com/widgets/b1d0a9aa676b5c91b1d4db290b168f9a.html"
                    scrolling="no"
                    allowtransparency="true"
                    className="instagram lightwidget-widget "
                  />*/}
                  <script src="https://cdn.lightwidget.com/widgets/lightwidget.js" />
                  <iframe
                    src="//lightwidget.com/widgets/b6f0a3e74f58596f8c1d72d412fc2b0f.html"
                    scrolling="no"
                    allowtransparency="true"
                    className="instagram lightwidget-widget"
                  />
                </center>
              </div>
              <div>
                <center>
                  <div style={{ width: "100%" }}>
                    <Link to="/" className="link-menu">
                      <img
                        className="img-fluid"
                        src={`https://i.ibb.co/pdtB79Z/LOGO-FACE.png`}
                        alt="Primavera San Luis"
                        style={{ width: "300px" }}
                      />
                    </Link>
                  </div>
                  <br />
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fturismodesanluis%2F&tabs=timeline&width=1000&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1914035878882625"
                    className="facebook"
                    scrolling="no"
                    frameborder="0"
                    allowTransparency="true"
                    allow="encrypted-media"
                  />
                </center>
              </div>
            </div>
            <br />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Home;
