import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";

class PPermisoPesca extends Component {
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
      url: `${process.env.REACT_APP_API}/atractivo/'diques'`,
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
                      {atrac.localidad} - {atrac.tipo}
                    </span>
                    <img
                      className="img-fluid"
                      src={`${process.env.REACT_APP_API_RECURSOS}/atractivos/${
                        atrac.imagenes[indice].imagen
                      }`}
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
              <div className="nf-titulo">
                <span>Permiso Y Embarcación</span>
              </div>
              <span className="" style={{ color: `#808080` }}>
              <br/ ><h3>PESCA</h3>
<h4>Pejerrey:</h4>
Una caña por pescador, con máximo de 2 anzuelos sin rebaba.
Tamaño mínimo: 25 cm. <br></br>
Veda Permanente: Embalse Piscu Yacu <br></br>
Pesca de Costa:	(cupo diario) Villa General Roca (25), Esteban Agüero (25), La Toma (25), 
Vulpiani (20). <br></br>
Pesca Diurna y de Costa (7:30 hs a 22:00 hs): Las Palmeras (10)<br></br>
Pesca de Costa y Embarcado: Paso de las Carretas (35), La Huertita (35), San Felipe (35),
La Florida (35), Cruz de Piedra (35), Luján (25), Potrero de los Funes (25), Saladillo (10),
lagunas particulares (25).<br></br>

Mojarras, chanchitas, dientudos, carpas, tarariras
Una caña por pescador, con máximo de 2 anzuelos.<br></br>
En todos ambientes sin cupo ni talla mínima.<br></br>
Se encontraran vedadas cuando las especies que cohabiten con ellas estén en veda.<br></br>

<h4>Trucha:</h4>
Habilitado del 1 de enero al 31 de mayo y del 1 de noviembre al 31 de diciembre
Del 01 al 31 de Mayo devolución obligatoria: todos los ambientes de la Provincia.<br></br>
Pesca diurna y de costa (7:30 hs a 20:00 hs): Diques Berta Vidal de Battini y Nogolí
Fly Cast (Mosca sin rebaba) devolución obligatoria: Todos los ríos y desembocaduras en los diques.<br></br>
Devolución obligatoria: Diques Berta Battini de Vidal y La Estrechura
Captura de un (01) ejemplar de talla superior a 30 cm: Todos los Diques<br></br>
Prohibida la pesca embarcada en horario nocturno (20:00 a 07:30 hs.) en todos los embalses y lagunas de la Provincia.
<br></br><br></br>
<h3>BOCAS DE EXPENDIOS Y PERMISOS</h3>
Programa Medio Ambiente, Terrazas del Portezuelo, Ed. Capital, Bloque 2, Piso 2 <br></br>
Delegación Quines, Av. Pringles al 300, esq. Teodoro Llanos<br></br>
Delegación Villa Mercedes, Pescadores 328<br></br>
Delegación San Francisco del Monte de Oro, Centenario s/n. Ex Esc. Técnica<br></br>
Municipalidad de Nueva Galia, San Martín y Belgrano	<br></br>
Municipalidad de San Martín, Lafinur y 9 de Julio<br></br>
Área Natural Protegida Quebrada de Las Higueritas en Luján	<br></br>
Náutica Fabre, Buenos Aires 884, Ciudad de San Luis<br></br>
Casa de pesca El Potrillo, Junín esquina Irigoyen, Ciudad de San Luis<br></br>
Casa de pesca El Potrillo, Ciudad de Juana Koslay	<br></br>
Casa de pesca La Esquina,  Av. Perón, esquina Belgrano, Ciudad de San Luis<br></br>
Complejo Primera Laguna, Ruta 43 km 32,600. Paraje La Angelina<br></br>
Casa de pesca El Matungo, Av. Del viento Chorrillero 680, Ciudad de Juana Koslay
<br></br>Estación de Piscicultura, Coronel Pringles s/n, La Florida
<br></br><br></br>
<h3>EMBARCACIONES</h3>
Asesoramiento y consultas especificas en el Área Náutica, de lunes a viernes de 8 a 17 hs. Tel. 2664035611
<br></br>Requisitos de seguridad para embarcaciones <br></br>
1.	Toda embarcación de tipo deportiva, propulsada a motor, deberá contar de forma obligatoria con:<br></br> 
Un salvavidas por persona embarcada.<br></br>
Un remo bichero.<br></br>
Un cabo de 20 metros con su correspondiente ancla.<br></br>
Un balde de achique.<br></br>
Un matafuegos de 1 Kg. de CO2.<br></br>
Un silbato.<br></br>
Una bengala.<br></br>
Un salvavidas de rescate redondo con cabo suficientemente extenso para maniobras de salvataje.
<br></br>Luces reglamentarias.
<br></br>2.	Todas las embarcaciones a remo deberán llevar:<br></br>
Un salvavidas por persona embarcada.<br></br>
Un silbato.<br></br>
Un cabo o cadena con su correspondiente ancla (para kayaks el cabo requerido es de 5 metros y no es necesaria el ancla).
<br></br>Se aconseja además llevar un remo bichero y un balde de achique. <br></br>
3.	Los veleros deberán llevar: <br></br>
Todos los elementos que se le requieren a las demás embarcaciones con la salvedad que deberán con tres salvavidas cuando su eslora no pase de los cinco metros y cinco salvavidas cuando su eslora supere los cinco metros. 
<br></br>Se hará uso del silbato solo en casos de emergencia con toques largos y continuos (pedido de auxilio). Toda embarcación que oyera un pedido de auxilio, tiene la ineludible obligación de concurrir rápidamente hacia el lugar de donde proviniera la solicitud de ayuda y actuar con las medidas de seguridad y prudencia que requiera el caso. Será sancionado aquel que hiciera sonar el silbato sin tener una real necesidad de auxilio o ayuda. 
<br></br>4.	Todas las embarcaciones deberán contar con una identificación con el número de matriculación y cantidad de pasajeros permitidos.
<br></br><br></br>
<h3>PROCEDIMIENTO PARA MATRICULACIÓN</h3>
1- Presentarse con la embarcación en el lugar de inspección con los requisitos de seguridad correspondientes al tipo de embarcación.
<br></br>2- Presentarse en la delegación correspondiente (ver delegaciones) con la ficha técnica (otorgada en la inspección) para generar la boleta de pago según tipo de embarcación.
<br></br>3- Presentarse en el lugar de inspección de la embarcación con el talón de pago para retirar documentación emitida.
<br></br>Puntos de inspección de embarcaciones
<br></br>Delegación San Luis: Edificio Capital PB Terrazas del Portezuelo
<br></br>Delegación Villa Mercedes: Pescadores Nº 328

<br></br>Embarcaciones permitidas en cada dique
<br></br>Dique La Florida: embarcaciones a motor 4T y 2T con certificación ecológica y embarcaciones sin motor. 
<br></br>Dique Saladillo: embarcaciones a motor 4T y 2T con certificación ecológica y embarcaciones sin motor.
<br></br>Dique San Felipe: embarcaciones a motor 4 tiempos y 2 tiempos, embarcaciones sin motor.
<br></br>Dique Paso de las Carretas: embarcaciones a motor 4T y 2T con certificación ecológica y embarcaciones sin motor.
<br></br>Dique La Huertita: embarcaciones a motor 4 tiempos y 2 tiempos, embarcaciones sin motor.
<br></br>Dique Cruz de Piedra: embarcaciones a motor 4T y 2T con certificación ecológica y embarcaciones sin motor.
<br></br>En los diques Potrero de los Funes, Nogolí, Villa General Roca, Antonio Esteban Agüero, Luján, Piscu Yako, Las Palmeras, Boca del Río, La Estrechura, Berta Vidal de Battini, Vulpiani y Villa Mercedes, solo se permiten embarcaciones sin motor. 
<br></br><br></br>
              </span>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

PPermisoPesca.contextType = Consumer;
export default PPermisoPesca;