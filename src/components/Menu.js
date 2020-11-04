import React, { Component } from "react";
import { Link } from "react-router-dom";
import ZonasMenu from "./subcomponentes/ZonasMenu";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSubMenu: 1,
      visibleMenu: false,
      mostrar: "block",
      isLoaded: false,
      newMode: false,
      localidades: {
        data: [
          {
            id: 0,
            nombre: "Cargando...",
            visible: true,
          },
        ],
        selected: 0,
      },
      filtro: "",
      verLista: false,
      MsgVisible: false,
      MsgBody: "",
    };
    this.cambiar = this.cambiar.bind(this);
    this.handleFiltroClick = this.handleFiltroClick.bind(this);
    this.handleBusquedaChange = this.handleBusquedaChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.fireNew = this.fireNew.bind(this);
    this.setMenu = this.setMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleFormError = this.handleFormError.bind(this);
    this.handleFormOk = this.handleFormOk.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
  }
  cambiar() {
    this.setState({ mostrar: "none" });
    console.log("GOLA");
  }

  closeMenu() {
    this.setState({ visibleMenu: !this.state.visibleMenu });
  }

  setMenu(id) {
    if (this.state.idSubMenu === id) {
      this.setState({ visibleMenu: !this.state.visibleMenu });
    } else {
      this.setState(
        {
          idSubMenu: id,
        },
        () => {
          this.setState({ visibleMenu: false });
        }
      );
    }
  }
  fireNew() {
    this.setState({
      localidades: {
        ...this.state.localidades,
        selected: 0,
      },
      newMode: true,
    });
  }

  handleFormError(msg) {
    let msgshow = "";
    if (Array.isArray(msg)) {
      msgshow = msg.join(", ");
    } else {
      msgshow = msg;
    }
    this.setState({
      MsgVisible: true,
      MsgBody: msgshow,
    });
  }

  handleFormOk(registro) {
    registro = JSON.parse(registro);
    if (registro.id === 0) {
      this.handleNew(registro);
    } else {
      this.handleSave(registro);
    }
  }

  handleFormCancel() {
    this.setState({ newMode: false });
  }

  handleNew(registro) {
    //La Api devuelve insertId
    fetch(`${process.env.REACT_APP_API_HOST}/ciudad`, {
      method: "POST",
      headers: {
        Authorization: "asdssffsdff",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registro),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (!result.err) {
            this.setState(
              {
                newMode: false,
                MsgVisible: true,
                MsgBody: "La Localidad se agregó correctamente.",
              },
              () => {
                this.componentDidMount();
                //Esto posiblemente no funcione bien
                /*
                this.setState({
                    localidades: {
                        selected: result.insertId
                    }
                })
                */
              }
            );
          } else {
            this.setState({
              MsgVisible: true,
              MsgBody: result.errMsgs.join(", "),
            });
          }
        },
        (error) => {
          //???
          this.setState({
            MsgVisible: true,
            MsgBody: error,
          });
        }
      );
  }

  handleSave(registro) {
    fetch(`${process.env.REACT_APP_API_HOST}/ciudad/${registro.id}`, {
      method: "PATCH",
      headers: {
        Authorization: "asdssffsdff",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registro),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (!result.err) {
            this.setState({
              MsgVisible: true,
              MsgBody: "Los datos se actualizaron correctamente.",
            });
          } else {
            this.setState({
              MsgVisible: true,
              MsgBody: result.errMsgs.join(", "),
            });
          }
        },
        (error) => {
          //???
          this.setState({
            MsgVisible: true,
            MsgBody: error,
          });
        }
      );
  }

  handleBusquedaChange(event) {
    let valor = event.target.value;
    this.setState({ filtro: valor }, () => {
      var copy = Object.assign([], this.state.localidades.data);
      copy = copy.map((d) => {
        if (d.nombre.toLowerCase().indexOf(valor.toLowerCase()) > -1) {
          d.visible = true;
        } else {
          d.visible = false;
        }
        return d;
      });
      this.setState({
        localidades: {
          ...this.state.localidades,
          data: copy,
          selected: 0,
        },
        mostrar: "block",
      });
    });
  }

  handleFiltroClick(id) {
    this.setState(
      {
        localidades: {
          ...this.state.localidades,
          selected: id,
          visible: false,
        },
      },
      () => {
        if (window.scrollY > 350) {
          window.scrollTo(0, 140);
        }
      }
    );
  }

  componentDidMount() {
    //Lista de Localidades
    fetch(`${process.env.REACT_APP_API}/ciudades`, {
      method: "GET",
      headers: {
        Authorization: "asdssffsdff",
        //"Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (!result.err) {
            var setX = result.data.registros.map((v) => {
              return {
                ...v,
                visible: false,
              };
            });
            this.setState(
              {
                localidades: {
                  data: setX,
                  selected: setX[0].id,
                },
              },
              () => {
                this.handleFiltroClick(this.state.localidades.selected);
              }
            );
          } else {
            this.setState({
              MsgVisible: true,
              MsgBody: result.errMsg,
            });
          }
        },
        (error) => {
          //???
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const filtro = this.state.localidades.data.map((lf) => {
      return (
        // active

        <Link
          key={`lloc-${lf.id}`}
          to={`/localidad/${lf.id}`}
          className="linkBusqueda"
          onClick={this.cambiar}
          style={{ display: this.state.mostrar }}
        >
          <div
            className={`spanloc ${
              lf.id === this.state.localidades.selected ? "active" : ""
            }${lf.visible ? " d-block" : " d-none"}`}
            key={`lloc-${lf.id}`}
          >
            <center>
              <p style={{ textDecoration: "none" }}>{lf.nombre} </p>
            </center>
            <hr />
          </div>
        </Link>
      );
    });
    return (
      <div className="Menu">
        <div className="container-fluid menu-ul animated bounceInDown delay-2s">
          <ul>
            <li>
              <Link to="/" className="link-menu">
                <i className="fas fa-home" />
              </Link>
            </li>
            <li>
              <span className="link-menu" onClick={(e) => this.setMenu(1, e)}>
                ¿QUÉ VISITAMOS?
              </span>
            </li>
            <li>
              <span className="link-menu" onClick={(e) => this.setMenu(4, e)}>
                ¿Qué hacemos?
              </span>
            </li>
            {/*<li>
              <span className="link-menu" onClick={e => this.setMenu(2, e)}>
                ¡PARQUES Y PLAZAS!
              </span>
            </li> */}
            <li>
              <span className="link-menu" onClick={(e) => this.setMenu(2, e)}>
                ¡A PLANIFICAR!
              </span>
            </li>
            <li>
              <span className="link-menu" onClick={(e) => this.setMenu(5, e)}>
                Turismo Interno
              </span>
            </li>
            <li>
              <span className="link-menu" onClick={(e) => this.setMenu(4, e)}>
                <img
                  style={{ height: `20px`, marginLeft: "-15px" }}
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/coronel3.png`}
                />
              </span>
            </li>

            <li className="link-menu">
              <div className="containeres">
                <input
                  type="text"
                  placeholder="Buscar localidades..."
                  name="buscar"
                  id="buscar"
                  className="buscador"
                  value={this.state.filtro}
                  onChange={this.handleBusquedaChange}
                  autoComplete="on"
                />
                <div className="search" />
              </div>
              <ul>
                <li className="listaBusqueda">{filtro}</li>
              </ul>
            </li>
            {/*<li>
              <a
                href="https://goo.gl/KdkxQM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="redesMobile fab fa-whatsapp"
                  style={{ paddingLeft: "0px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/turismodesanluis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="redesMobile fab fa-facebook" />
              </a>
              <a
                href="https://twitter.com/TurismoSanLuis_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="redesMobile fab fa-twitter" />
              </a>
              <a
                href="https://www.instagram.com/turismo_san_luis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="redesMobile fab fa-instagram" />
              </a>
            </li>
            <li>
              <div className="link-menu">
                <div className="form-group">
                  <input
                    type="text"
                    name="buscar"
                    id="buscar"
                    className="form-control"
                    value={this.state.filtro}
                    onChange={this.handleBusquedaChange}
                    autoComplete="on"
                  />
                </div>
              </div>
            </li>*/}
          </ul>
        </div>
        <div className="logo">
          {/* <a
            href="https://goo.gl/KdkxQM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="redes fab fa-whatsapp animated bounceInDown delay-2s"
              style={{ right: "110px" }}
            />
          </a> */}
          <a
            href="https://www.facebook.com/turismodesanluis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="redes fab fa-facebook animated bounceInDown delay-2s"
              style={{ right: "50px" }}
            />
          </a>
          <a
            href="https://twitter.com/TurismoSanLuis_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="redes fab fa-twitter animated bounceInDown delay-2s"
              style={{ right: "80px" }}
            />
          </a>
          <a
            href="https://www.instagram.com/turismo_san_luis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="redes fab fa-instagram animated bounceInDown delay-2s" />
          </a>

          <Link to="/" className="link-menu  animated bounceInDown delay-2s">
            <img
              src={`https://i.ibb.co/ft02QmL/SAN-LUIS-TURISMO-FULL-COLOR-TRANSP.png`}
              alt="San Luis"
            />
          </Link>
        </div>

        <div className="logoGob animated bounceInDown delay-2s" style={{}}>
          <Link to="/" className="link-menu  ">
            <img src={`https://i.ibb.co/7g7LDjz/logo-gob.png`} alt="San Luis" />
          </Link>
        </div>
        {this.state.visibleMenu ? (
          <div className="menu-visita-container animated fadeIn">
            <div className="menu-visita">
              <ZonasMenu
                idMenu={this.state.idSubMenu}
                onZonaClick={this.closeMenu}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Menu;
