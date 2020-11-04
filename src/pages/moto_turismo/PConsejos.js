import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PConsejos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: 0,
      data: [
        {
          descripcion: "",
          imagenes: [{ imagen: "default.jpg" }]
        }
      ],
      index: 0
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
      url: `${process.env.REACT_APP_API}/atractivo/moto/'10'`,
      responseType: "json"
    })
      .then(response => {
        if (response.data.data.count > 0) {
          self.setState({
            data: response.data.data.registros
          });
        } else {
          //Error no se enocntró el id
        }
      })
      .catch(error => {
        console.log(error);
      });
    self.setState({ loading: false });
  }

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    this.setState(
      {
        id: this.props.match.params.id
      },
      () => {
        this.getData();
      }
    );
  }

  render() {
    const loading = this.state.loading;
    var ListadoAtractivofull = null;
    if (this.state.data.length > 0) {
      ListadoAtractivofull = this.state.data.map(atrac => {
        let descripcion = "";
        if (atrac.descripcion.length > 395) {
          descripcion = atrac.descripcion.substr(0, 395) + "...";
        } else {
          descripcion = atrac.descripcion;
        }
        let indice = Math.floor(Math.random() * atrac.imagenes.length);
        return (
          <Link to={`/atractivo/${atrac.id}`} key={`atractivo-${atrac.id}`}>
            <div className="row mb-5">
              <div className="col">
                <div className="atractivo-full-item">
                  <div className="imagen">
                    <span style={{ backgroundColor: `#${atrac.color}` }}>
                      {atrac.localidad}
                    </span>
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${atrac.imagenes[indice].imagen}`}
                      alt="Img"
                    />
                  </div>
                  <div
                    className="titulo"
                    style={{ backgroundColor: `#${atrac.color}` }}
                  >
                    <h3>{atrac.nombre}</h3>
                  </div>
                  <div className="body">
                    <p className="text-dark mb-2">{descripcion}</p>
                    <span className="btn-novedades">
                      Leer <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }

    return (
      <React.Fragment>
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <React.Fragment>
            <div className="container ListadoAtractivofull">
              <div
                className="ZonaLocalidad-titulo"
                style={{ backgroundColor: `#722789` }}
              >
                <h3 style={{ color: `#722789` }}>Consejos </h3>
              </div>
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "250px" }}>
                  <span className="reco-t-sub2">Recomendaciones:</span>
                </div>
              </div>
              <br />
              <br />
              <br />

              <h4 className="" style={{ color: `#808080` }}>
                <li>Revisá bien tu moto antes de salir.</li>
                <li>
                  Asegurate de llevar las herramientas necesarias y principales
                  que puedan sacarte de un apuro en la ruta.
                </li>
                <li>
                  Conocé previamente las rutas y distancias que vas a realizar
                  durante tu recorrido. Te ayudará a aprovechar el viaje y a
                  disfrutar de los tiempos de una mejor manera.
                </li>
                <li>
                  Llevá siempre una copia de la llave de tu moto en un lugar
                  distinto al llavero principal.{" "}
                </li>
                <li>
                  Cargá combustible antes que tu indicador esté marcando el
                  tanque vacío.
                </li>
                <li>
                  Protegé tu dinero y tu documentación de una manera especial.{" "}
                </li>
                <li>
                  Asegurá tu equipaje de manera que no pierdas cosas en el
                  camino.
                </li>
                <li> Mantené siempre limpio el visor de tu casco.</li>
                <li>
                  Disfrutá cada kilómetro, cada parada, cada persona conocida,
                  cada ciudad recorrida y cada momento que pases con tu moto en
                  la ruta.
                </li>
                <li>
                  Anticipate llevando entre tu equipaje un "aerosol sella
                  pinchaduras”.
                </li>
                <li>
                  Contale a todo el mundo lo que hiciste. Pensá que vas a ayudar
                  a muchos motociclistas que aún tienen miedo de lanzarse a la
                  ruta.
                </li>
              </h4>
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "250px" }}>
                  <span className="reco-t-sub2">Requisitos:</span>
                </div>
              </div>
              <br />
              <br />
              <br />

              <h4 className="" style={{ color: `#808080` }}>
                A nivel nacional, la Agencia Nacional de Seguridad Vial indica
                que los requisitos son (Artículo 40 de la Ley de Tránsito
                24.449):
                <li>
                  Licencia de conducir habilitante para el tipo de vehículo que
                  se conduce.
                </li>
                <li>
                  La cédula de identificación de la moto vigente (verde o azul
                  según corresponda).
                </li>
                <li>Documento Nacional de Identidad del conductor.</li>
                <li>Constancia de Revisión Técnica Obligatoria en vigencia.</li>
                <li>
                  Llevar la cantidad de ocupantes que marca la capacidad del
                  vehículo.
                </li>
                <li>Utilizar cascos homologados y llevarlos abrochados.</li>
                <li>
                  Si la moto no tiene parabrisas, su conductor debe usar
                  anteojos..
                </li>
                <li>
                  {" "}
                  Contar con el seguro obligatorio (Responsabilidad Civil contra
                  Terceros No Transportados).
                </li>
                <li>
                  Respetar los límites de tolerancia de alcohol en sangre que
                  establece la Ley Nacional de Tránsito y las de la Provincia de
                  San Luis.
                </li>
                <li>
                  Casco: La utilización de CASCO es OBLIGATORIA en todo el
                  territorio nacional. Tenerlo desabrochado también es una falta
                  que puede incurrir en una multa.
                </li>
              </h4>
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "250px" }}>
                  <span className="reco-t-sub2">El Ritmo:</span>
                </div>
              </div>
              <br />
              <br />
              <br />

              <h4 className="" style={{ color: `#808080` }}>
                <li>
                  {" "}
                  - El camino: ninguna ruta es igual a la que ya se transitó o a
                  la que viene. Estado, tamaño, longitud de rectas, curvas y
                  elevación dictará el ritmo de viaje.
                </li>
                <li>
                  - El clima: es conveniente anticiparte a los cambios de clima
                  y tener en cuenta el estado del tiempo para planificar mejor
                  el viaje.
                </li>{" "}
                <li>
                  - La moto y yo: ni la moto ni vos tienen que sufrir para poder
                  llegar a destino. La combinación precisa de la posición de
                  manejo y la velocidad de la moto da como resultado un viaje
                  placentero y seguro.
                </li>
              </h4>
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "250px" }}>
                  <span className="reco-t-sub2"> TU CUERPO:</span>
                </div>
              </div>
              <br />
              <br />
              <br />

              <h4 className="" style={{ color: `#808080` }}>
                <li>
                  Programá tu viaje con tiempo suficiente para planear las
                  etapas del viaje y las paradas necesarias de descanso.
                </li>
                <li>
                  Conocé tus propios límites. Acomodá las etapas del viaje a tu
                  cuerpo. El cansancio genera estrés y hace que disfrutes menos.
                </li>
                <li>
                  Protegete contra eventuales caídas, usá casco, calzado
                  protector y ropa preferentemente de colores bien visibles
                  (evitar el negro).
                </li>
              </h4>
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "250px" }}>
                  <span className="reco-t-sub2"> El equipaje:</span>
                </div>
              </div>
              <br />
              <br />
              <br />

              <h4 className="" style={{ color: `#808080` }}>
                <li>
                  La cantidad de equipaje que se llevés estará determinada por
                  la distancia que vas a recorrer.
                </li>
                <li>
                  Doblá la ropa de manera que ocupe el menor espacio posible.
                </li>
                <li>
                  Equipará el peso del equipaje de manera uniforme y bien sujeto
                  para que no se vea afectado el equilibrio al viajar.
                </li>
                <li>
                  Usá bolsas de nylon para individualizar y proteger la carga,
                  si no disponés de alforjas impermeables.
                </li>
                <li>
                  Disponé en lugares de rápido acceso la documentación
                  importante, ropa de lluvia y objetos indispensables que
                  necesites mientras haces el viaje.
                </li>
                <li>
                  Circulá con ropa adecuada y medidas de seguridad a fin de
                  evitar o sufrir quemaduras o lesiones graves ante una caída.
                </li>
              </h4>
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "250px" }}>
                  <span className="reco-t-sub2"> IMPRESCINDIBLE:</span>
                </div>
              </div>
              <br />
              <br />
              <br />

              <h4 className="" style={{ color: `#808080` }}>
                <li> GPS para moto (a prueba de lluvia, polvo y sacudones).</li>
                <li> Mapa en papel.</li>
                <li> Copia de llaves.</li>
                <li>
                  Visor del casco limpio de bichos y suciedad. Viajá seguro.
                </li>
                <li> Kit de aseo personal y jabón para lavar la ropa.</li>
                OTROS
                <li> Pañuelo</li>
                <li> Candado y llaves</li>
                <li> Cámara digital</li>
                <li>Celular y cargador</li>
                <li>Malla</li>
                <li>Linterna y pilas</li>
                <li>Botiquín</li>
                <li>Mapas, GPS y su cargador</li>
                <li>Manguerita</li>
                <li>Gorro</li>
                <li>Bolsitas de plástico</li>
                <li>Equipo de lluvia</li>
                <li>Botella de agua</li>
                <li>Snacks</li>
                <li>Cepillo para limpiar la cadena</li>
                <li>Casco y traba</li>
                <li>Guantes pesados</li>
                <li>Anteojos para el sol</li>
                <li>Pantalla solar y manteca de cacao</li>
                <li>Camperón y buzo con capucha</li>
                <li>Tarjetas de crédito y débito</li>
                <li>"Duct tape"</li>
                <li>Tapones para los oídos</li>
                <li>Botas para moto</li>
                <li>Toallitas de papel</li>
                <li>Medidor de presión</li>
                <li>Correas</li>
                <li>Equipo de higiene personal</li>
              </h4>
              <div style={{ float: "left" }} className="Recorridos">
                <div className="reco-titulo" style={{ width: "250px" }}>
                  <span className="reco-t-sub2"> PARA PREVENIR:</span>
                </div>
              </div>
              <br />
              <br />
              <br />

              <h4 className="" style={{ color: `#808080` }}>
                <li>
                  Confiabilidad: revisar la mecánica de la moto antes de salir
                  de viaje.
                </li>
                <li>
                  Pinchadura: llevar siempre 2 aerosoles "infla y sella
                  pinchaduras" o cámara de repuesto.
                </li>
                <li>
                  Inflado de neumáticos: la presión debe ser la indicada por el
                  fabricante y tener en cuenta el peso a cargar por la moto.
                </li>
                <li>
                  Cortar la cadena: mantener correctamente lubricada la cadena,
                  piñón y corona. En caso de urgencia por rotura llevar uno o
                  dos eslabones de unión para reemplazar.
                </li>
                <li>
                  Cortar el cable de Embrague/Freno: llevar uno o dos cables
                  para poder darle una solución momentánea.
                </li>
                <li>
                  Romper los pernos de la corona: llevar 4 tornillos y 4 tuercas
                  de la corona. Ocupa poco espacio pero soluciona mucho.
                </li>
                <li>
                  Pérdida de combustible: llevar unos centímetros de manguera
                  para combustible para reemplazar momentáneamente por la que
                  esta fisurada.
                </li>
                <li>Autonomía: llenar el tanque cuantas veces sea posible.</li>
              </h4>
              <br />
            </div>
            <br />
            <br />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
PConsejos.contextType = Consumer;
export default PConsejos;
