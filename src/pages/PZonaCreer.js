import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PZonaCreer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataZona: {},
      localidadesDataZona: [],
      carousel: [],
      links: [],
      atractivos: []
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    var token = this.context.token;
    //verificar que el id sea un número > a 0
    //Datos de la Zona
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token
      },
      url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}`,
      /*
            auth: {
                username: 'janedoe',
                password: 's00pers3cret'
            },
            */
      responseType: "json"
    })
      .then(response => {
        console.log("zonaas");
        console.log(response.data.data.registros[0].nombre);
        if (response.data.data.count > 0) {
          self.setState({
            dataZona: response.data.data.registros[0]
          });
        } else {
          //Error no se enocntró el id
        }
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
    //Localidades de la Zona
    axios({
      method: "get",
      headers: {
        Authorization: token
      },
      url:
        `${process.env.REACT_APP_API}/atractivo/'Creer "Camino de la Fe de ` +
        this.props.match.params.zona +
        `"'`,
      responseType: "json"
    })
      .then(response => {
        console.log( this.props.match.params.zona);
        console.log(response.data.data.count);
        if (response.data.data.count > 0) {
          self.setState(
            {
              localidadesDataZona: response.data.data.registros
            },
            () => {
              //Para armar el Carousel y los Links
              axios({
                method: "get",
                headers: {
                  Authorization: token
                },
                url: `${process.env.REACT_APP_API}/zona/${
                  this.props.match.params.id
                }/creer/'Creer "Camino de La Fe Circuito del Morro"'`,
                responseType: "json"
              })
                .then(response => {
                  if (response.data.imagenes.length > 0) {
                    //Carousel
                    var activo = false;
                    var fotos = response.data.imagenes.map((a, index) => {
                      if (a.imagen === "default.jpg") {
                        return null;
                      }
                      let estilo = {
                        backgroundImage: `url(${
                          process.env.REACT_APP_API_RECURSOS
                        }/atractivos/${a.imagen})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      };
                      if (!activo) {
                        activo = true;
                        return (
                          <div
                            key={`caro-${a.idlocalidad}-${index}`}
                            className="carousel-item active"
                            style={estilo}
                          >
                            <h5 className="pd-top">{a.nombre_localidad}</h5>
                            <h5>{a.nombre_atractivo}</h5>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            key={`caro-${a.idlocalidad}-${index}`}
                            className="carousel-item"
                            style={estilo}
                          >
                            <h5 className="pd-top">{a.nombre_localidad}</h5>
                            <h5>{a.nombre_atractivo}</h5>
                          </div>
                        );
                      }
                    });
                    self.setState({ carousel: fotos });
                    //Links
                    var links = response.data.imagenes.map((a, index) => {
                      /*
                                let estilo = {
                                    backgroundImage: `url(${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.imagen})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                };
                                */
                      //Debe pasar a Link!
                      return (
                        <Link
                          to={`/localidad/${a.idlocalidad}`}
                          key={`img-link-${a.idlocalidad}-${index}`}
                        >
                          <img
                            className="img-fluid"
                            style={{
                              borderColor: `#${self.state.dataZona.color}`
                            }}
                            src={`${
                              process.env.REACT_APP_API_RECURSOS
                            }/atractivos/${a.imagen}`}
                            title={a.nombre_atractivo}
                            alt="Thubmail"
                          />
                        </Link>
                      );
                    });
                    self.setState({ links: links });
                  } else {
                    console.log("Nada de nada!");
                  }
                  this.setState({ loading: false });
                })
                .catch(error => {
                  console.log(error);
                  this.setState({ loading: false });
                });
            }
          );
        } else {
          //Error no se enocntró el id
        }
        this.setState({ loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getData();
    }
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.getData();
  }

  render() {
    //console.log(atractivosData);
    const localidades = this.state.localidadesDataZona.map(atrac => {
      return (
        <Link to={`/atractivo/${atrac.id}`} key={`atractivo-${atrac.id}`}>
          <div className="row mb-5">
            <div className="col">
              <div className="atractivo-full-item">
                <div className="imagen">
                  <span
                    style={{ backgroundColor: `#${this.state.dataZona.color}` }}
                  >
                    {atrac.nombre_localidad}
                  </span>
                  <img
                    className="img-fluid"
                    src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${
                      atrac.imagenes[0].imagen
                    }`}
                    alt="Img"
                  />
                </div>
                <div
                  className="titulo"
                  style={{ backgroundColor: `#${this.state.dataZona.color}` }}
                >
                  <h3>{atrac.nombre}</h3>
                </div>
                <div className="body">
                  <p className="text-dark mb-2" style={{ height: "200px" }}>
                    {atrac.descripcion}
                  </p>
                  <span
                    className="btn-novedades"
                    style={{ backgroundColor: `#${this.state.dataZona.color}` }}
                  >
                    Leer <i className="fas fa-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
    return (
      <div className="Zona">
        {this.state.loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div
              className="ZonaDetalle-titulo"
              style={{
                backgroundColor: `#${this.state.dataZona.color}`,
                marginTop: "150px"
              }}
            >
              <h3 style={{ color: `#${this.state.dataZona.color}` }}>
                Caminos de la fe "{this.state.dataZona.nombre}"
              </h3>
            </div>
            <div className="container mb-5">
              <div className="row">
                <div className="col ZonaDetalle-Body">
                  <div id="mapasl">
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/mapas/mini/${
                        this.state.dataZona.mini
                      }`}
                      alt="SL"
                    />
                  </div>
                  <div id="texto">
                    <p style={{fontSize:"20px"}}>{this.state.dataZona.descripcionCreer}</p>
                    <div>
                      <h3 style={{ color: `#${this.state.dataZona.color}` }}>
                        Postas religiosas de
                      </h3>
                      <h1 style={{ color: `#${this.state.dataZona.color}` }}>
                        {this.state.dataZona.nombre}
                      </h1>
                    </div>
                  </div>
                  <div id="mapa">
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${
                        this.state.dataZona.mapa
                      }`}
                      alt="Mapa"
                    />
                  </div>
                </div>
              </div>
              <div className="container" style={{ marginTop: "" }}>
                {localidades}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

PZonaCreer.contextType = Consumer;
export default PZonaCreer;

/*import atractivosData from '../data/atractivos';

class PZonaCreer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataZona: {},
            localidadesDataZona: [],
            carousel: [],
            links: [],
            atractivos: []
        }
        this.getData = this.getData.bind(this);
    }

    getData() {
        var token = this.context.token;
        //verificar que el id sea un número > a 0
        //Datos de la Zona
        var self = this;
        axios({
            method: "get",
            headers: {
                "Authorization": token
            },
            url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}`,
            /*
            auth: {
                username: 'janedoe',
                password: 's00pers3cret'
            },
            
            responseType: 'json'
        })
        .then((response) => {
            if(response.data.data.count > 0) {
                self.setState({
                    dataZona: response.data.data.registros[0]
                });
            } else {
                //Error no se enocntró el id
            }
            this.setState({loading: false});
        })
        .catch((error) => {
            console.log(error);
            this.setState({loading: false});
        });
        //Localidades de la Zona
        axios({
            method: "get",
            headers: {
                "Authorization": token
            },
            url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}/ciudades`,
            responseType: 'json'
        })
        .then((response) => {
            if(response.data.data.count > 0) {
                self.setState({
                    localidadesDataZona: response.data.data.registros
                }, () => {
                    //Para armar el Carousel y los Links
                    axios({
                        method: "get",
                        headers: {
                            "Authorization": token
                        },
                        url: `${process.env.REACT_APP_API}/zona/${this.props.match.params.id}/creer/'Creer "Camino de La Fe Circuito del Morro"'`,
                        responseType: 'json'
                    })
                    .then((response) => {
                        if(response.data.imagenes.length > 0) {
                            //Carousel
                            var activo = false;
                            var fotos = response.data.imagenes.map((a, index) => {
                                if(a.imagen === "default.jpg") {
                                    return null;
                                }
                                let estilo = {
                                    backgroundImage: `url(${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.imagen})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                };
                                if(!activo) {
                                    activo = true;
                                    return (
                                        <div key={`caro-${a.idlocalidad}-${index}`} className="carousel-item active" style={estilo}>
                                            <h5 className="pd-top">{a.nombre_localidad}</h5>
                                            <h5>{a.nombre_atractivo}</h5>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={`caro-${a.idlocalidad}-${index}`} className="carousel-item" style={estilo}>
                                            <h5 className="pd-top">{a.nombre_localidad}</h5>
                                            <h5>{a.nombre_atractivo}</h5>
                                        </div>
                                    );
                                }
                            });
                            self.setState({carousel: fotos});
                            //Links
                            var links = response.data.imagenes.map((a, index) => {
                                /*
                                let estilo = {
                                    backgroundImage: `url(${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.imagen})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                };
                                
                                //Debe pasar a Link!
                                return (
                                    <Link to={`/localidad/${a.idlocalidad}`} key={`img-link-${a.idlocalidad}-${index}`}>
                                        <img 
                                            className="img-fluid"
                                            style={{borderColor: `#${self.state.dataZona.color}`}}
                                            src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${a.imagen}`}
                                            title={a.nombre_localidad}
                                            alt="Thubmail" />
                                    </Link>
                                );
                            });
                            self.setState({links: links});
                        } else {
                            console.log("Nada de nada!");
                        }
                        this.setState({loading: false});
                    })
                    .catch((error) => {
                        console.log(error);
                        this.setState({loading: false});
                    });
                });
            } else {
                //Error no se enocntró el id
            }
            this.setState({loading: false});
        })
        .catch((error) => {
            console.log(error);
            this.setState({loading: false});
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.getData();
        }
    }

    componentDidMount() {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
        this.getData();
    }

    render() {
        //console.log(atractivosData);
        const localidades = this.state.localidadesDataZona.map((localidad) => {
            return (<Link to={`/localidad/${localidad.idciudad}`} key={`localidad-${localidad.id}`}>{localidad.ciudad} / </Link>);
        });
        const links = this.state.links;
        const carousel = this.state.carousel;
        return (
            <div className="Zona">
                {
                    this.state.loading ?
                    <div>Cargando...</div>
                    :
                    <React.Fragment>
                        <div className="menu-y-slider">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {carousel}
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                                <div className="slider-home-leyenda">
                                    <h1 className="mb-5">Zona Turística</h1>
                                </div>
                            </div>
                        </div>
                        <div className="ZonaDetalle-titulo" style={{backgroundColor: `#${this.state.dataZona.color}`}}>
                            <h3 style={{color: `#${this.state.dataZona.color}`}}>Caminos de la fe "{this.state.dataZona.nombre}"</h3>
                        </div>
                        <div className="container mb-5">
                            <div className="row">
                                <div className="col ZonaDetalle-Body">
                                    <div id="mapasl">
                                        <img className="img-fluid" src={`${process.env.REACT_APP_API_RECURSOS}/mapas/mini/${this.state.dataZona.mini}`} alt="SL" />
                                    </div>
                                    <div id="texto">
                                        <p>{this.state.dataZona.descripcionCreer}</p>
                                        <div>
                                            <h5 style={{color: `#${this.state.dataZona.color}`}}>Postas religiosas de</h5>
                                            <h4 style={{color: `#${this.state.dataZona.color}`}}>{this.state.dataZona.nombre}</h4>
                                        </div>
                                        <div>
                                            <div className="text-links">
                                                {localidades}
                                            </div>
                                            <div>
                                                <a className="btn btn-block mt-3 text-white" href={`${process.env.REACT_APP_API_RECURSOS}/folletos/${this.state.dataZona.pdf}`} target="_blank" rel="noopener noreferrer" style={{backgroundColor: `#${this.state.dataZona.color}`}}><i className="fas fa-file-pdf"></i> Descargar Folletería</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="mapa">
                                        <img className="img-fluid" src={`${process.env.REACT_APP_API_RECURSOS}/mapas/${this.state.dataZona.mapa}`} alt="Mapa" />
                                    </div>
                                    <div id="imagenes">
                                        {links}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

PZonaCreer.contextType = Consumer;

export default PZonaCreer;*/
