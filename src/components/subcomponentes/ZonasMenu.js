import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

const ZonaMenuUno = (props) => {
  const dzonas = props.data.map((zona) => {
    return (
      <DataZona
        key={`zona-${zona.id}`}
        data={zona}
        oniClick={props.onZonaClick}
      />
    );
  });
  return (
    <React.Fragment>
      <div className="ZonaMenu-Zonas">
        <h4>Zonas Turísticas</h4>
        <div className="ZonaMenu-Data">{dzonas}</div>
      </div>
      <div className="ZonaMenu-Lista">
        <h4>Destinos</h4>
        <ul>
          <li>
            <Link
              to="/localidad/6"
              className="link"
              onClick={props.onZonaClick}
            >
              Ciudad de San Luis
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/33"
              className="link"
              onClick={props.onZonaClick}
            >
              Villa Mercedes
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/31"
              className="link"
              onClick={props.onZonaClick}
            >
              Villa de Merlo
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/22"
              className="link"
              onClick={props.onZonaClick}
            >
              Potrero de los Funes
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/25"
              className="link"
              onClick={props.onZonaClick}
            >
              San Francisco
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/9"
              className="link"
              onClick={props.onZonaClick}
            >
              El Trapiche
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/5"
              className="link"
              onClick={props.onZonaClick}
            >
              Carpintería
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/47"
              className="link"
              onClick={props.onZonaClick}
            >
              La Carolina
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/18"
              className="link"
              onClick={props.onZonaClick}
            >
              Nogolí
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/26"
              className="link"
              onClick={props.onZonaClick}
            >
              San Jerónimo
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/13"
              className="link"
              onClick={props.onZonaClick}
            >
              La Punta
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/15"
              className="link"
              onClick={props.onZonaClick}
            >
              Los Molles
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/61"
              className="link"
              onClick={props.onZonaClick}
            >
              Justo Daract
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/2"
              className="link"
              onClick={props.onZonaClick}
            >
              Balde
            </Link>
          </li>
          <li>
            <Link
              to="/localidad/19"
              className="link"
              onClick={props.onZonaClick}
            >
              Nueva Galia
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

const DataZona = (props) => {
  return (
    <Link to={`/zona/${props.data.id}`} onClick={props.oniClick}>
      <div
        className="ZonaMenu-Item"
        style={{ backgroundColor: `#${props.data.color}` }}
      >
        <img src={props.data.foto} alt="Img" />
        <span>{props.data.nombre}</span>
      </div>
    </Link>
  );
};
{
  /*const ZonaMenuDos = (props) => {
    return(
        <React.Fragment>
            <div className="ZonaMenu-Lista">
                <ul>
                    <li><Link to="/atractivo/153" className="link" onClick={props.onZonaClick}>Parque de las Naciones</Link></li>
                    <li><Link to="/atractivo/154" className="link" onClick={props.onZonaClick}>Parque la Cerámica</Link></li>
                    <li><Link to="/atractivo/8" className="link" onClick={props.onZonaClick}>Parque Nativo</Link></li>
                    <li><Link to="/atractivo/46" className="link" onClick={props.onZonaClick}>Parque Provincial Costanera Río Quinto</Link></li>
                    <li><Link to="/atractivo/73" className="link" onClick={props.onZonaClick}>Monumento Al Pueblo Puntano De La Independencia</Link></li>
                    <li><Link to="/atractivo/35" className="link" onClick={props.onZonaClick}>Parque Zanjitas Pueblo Heroico</Link></li>
                </ul>
            </div>
        </React.Fragment>
    );
} */
}

const ZonaMenuDos = (props) => {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="ZonaMenu-Lista mr-3">
          <ul>
            <li>
              <Link
                to="/PAeropuerto"
                className="link"
                onClick={props.onZonaClick}
              >
                Aeropuertos
              </Link>
            </li>
            {/* <li>
              <Link
                to="/agenciaviajes"
                className="link"
                onClick={props.onZonaClick}
              >
                Agencias de Viaje
              </Link>
            </li>
*/}
            <li>
              <Link
                to="/PAlquileresAuto"
                className="link"
                onClick={props.onZonaClick}
              >
                Alquileres de autos
              </Link>
            </li>

            <li>
              <a
                href="http://entedecontrolderutas.com/contacto/"
                className="link"
                onClick={props.onZonaClick}
              >
                Estados de ruta
              </a>
            </li>
            {/* <li>
              <Link
                to="/guiaturismo"
                className="link"
                onClick={props.onZonaClick}
              >
                Guías de Turismo
              </Link>
            </li>*/}

            <li>
              <Link
                to="/PCasasCambio"
                className="link"
                onClick={props.onZonaClick}
              >
                Casa de cambio
              </Link>
            </li>
            <li>
              <a
                href="http://www.clima.edu.ar/"
                className="link"
                onClick={props.onZonaClick}
              >
                Clima
              </a>
            </li>
          </ul>
        </div>
        <div className="ZonaMenu-Lista mr-3">
          <ul>
            <li>
              <a
                href="http://www.salud.sanluis.gov.ar/mapa/"
                className="link"
                onClick={props.onZonaClick}
              >
                Emergencias
              </a>
            </li>
            <li>
              <Link to="/PArchivosApp" className="link">
                ¡Probá la App!
              </Link>
            </li>
            <li>
              <Link
                to="/novedades"
                className="link"
                onClick={props.onZonaClick}
              >
                Prensa turística
              </Link>
            </li>

            <li>
              <Link
                to="/Pcontacto"
                className="link"
                onClick={props.onZonaClick}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

const ZonaMenuTres = (props) => {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="ZonaMenu-Lista mr-3">
          <ul>
            <li>
              <Link
                to="/RegistroGuiasTurismo"
                className="link"
                onClick={props.onZonaClick}
              >
                ACTIVIDAD PROFESIONAL GUÍAS DE TURISMO
              </Link>
            </li>
            <li>
              <Link
                to="/RegistroAgenciasdeViajes"
                className="link"
                onClick={props.onZonaClick}
              >
                EXCURSIONES Y TOURS DE AGENCIAS DE VIAJES{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

const ZonaMenuCuatro = (props) => {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="ZonaMenu-Lista mr-3">
          <ul>
            {/*<li>
              <Link to="/eventos" className="link" onClick={props.onZonaClick}>
                Calendario de Eventos
              </Link>
            </li> */}
            <li>
              <Link
                to="/PParquesList"
                className="link"
                onClick={props.onZonaClick}
              >
                Parques Provinciales
              </Link>
            </li>
            <li>
              <Link to="/Diques" className="link" onClick={props.onZonaClick}>
                Diques Y Embalses
              </Link>
            </li>
            {/* <li>
              <Link
                to="/filtroalojamiento"
                className="link"
                onClick={props.onZonaClick}
              >
                Alojamientos
              </Link>
            </li>*/}
            <li>
              <Link
                to="/PPrincipalGastronomia"
                className="link"
                onClick={props.onZonaClick}
              >
                Ruta Gastronómica
              </Link>
            </li>
            <li>
              <Link
                to="/PCerveceria"
                className="link"
                onClick={props.onZonaClick}
              >
                Caminos Cerveceros
              </Link>
            </li>
            <li>
              <Link
                to="/PCreerGnral"
                className="link"
                onClick={props.onZonaClick}
              >
                Creer en San Luis
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
const ZonaMenuCinco = (props) => {
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="ZonaMenu-Lista mr-3">
          <ul>
            <li>
              <Link
                to="/listado-guias-covid"
                className="link"
                onClick={props.onZonaClick}
              >
                Listado guías adheridos
              </Link>
            </li>
            <li>
              <Link
                to="/listado-agencias-covid"
                className="link"
                onClick={props.onZonaClick}
              >
                Listado agencias adheridos
              </Link>
            </li>
            <li>
              <a
                href="http://protocoloturismo.sanluis.gov.ar/alojamiento/"
                className="link"
                onClick={props.onZonaClick}
              >
                Listado de Alojamientos adheridos
              </a>
            </li>
            <li>
              <Link
                to="/coronavirus"
                className="link"
                onClick={props.onZonaClick}
              >
                Info Importante
              </Link>
              <span className="link-menu" onClick={(e) => this.setMenu(4, e)}>
                <img
                  style={{
                    height: `20px`,
                    marginLeft: "5px",
                    marginTop: "-5px",
                  }}
                  src={`${process.env.REACT_APP_API_RECURSOS}/recursos/coronel3.png`}
                />
              </span>
            </li>
            <li>
              <Link
                to="/RegistroGuiasTurismo"
                className="link"
                onClick={props.onZonaClick}
              >
                Registro ACTIVIDAD PROFESIONAL GUÍAS DE TURISMO
              </Link>
            </li>
            <li>
              <Link
                to="/RegistroAgenciasdeViajes"
                className="link"
                onClick={props.onZonaClick}
              >
                Registro EXCURSIONES Y TOURS DE AGENCIAS DE VIAJES
              </Link>
            </li>
            <li>
              <a
                href="http://protocoloturismo.sanluis.gov.ar/"
                className="link"
                onClick={props.onZonaClick}
              >
                Registro para alojamientos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

class ZonasMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      idMenu: 1,
      dataZonas: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.idMenu !== prevProps.idMenu) {
      this.setState({
        idMenu: this.props.idMenu,
      });
    }
  }

  componentDidMount() {
    this.setState({
      idMenu: this.props.idMenu,
    });
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/zonas`,
      responseType: "json",
    })
      .then((response) => {
        self.setState(
          {
            dataZonas: response.data.data.registros,
          },
          () => {
            this.setState({ loading: false });
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const loading = this.state.loading;
    var MenuView = null;
    switch (this.state.idMenu) {
      case 1:
        MenuView = (
          <ZonaMenuUno
            data={this.state.dataZonas}
            onZonaClick={this.props.onZonaClick}
          />
        );
        break;
      case 2:
        MenuView = <ZonaMenuDos onZonaClick={this.props.onZonaClick} />;
        break;
      case 3:
        MenuView = <ZonaMenuTres onZonaClick={this.props.onZonaClick} />;
        break;
      case 4:
        MenuView = <ZonaMenuCuatro onZonaClick={this.props.onZonaClick} />;
        break;
      case 5:
        MenuView = <ZonaMenuCinco onZonaClick={this.props.onZonaClick} />;
        break;
      default:
        MenuView = (
          <ZonaMenuUno
            data={this.state.dataZonas}
            onZonaClick={this.props.onZonaClick}
          />
        );
    }
    //const menu = () => { return(<ZonaMenuUno dataZonas={this.state.dataZonas} />); };
    return (
      <div className="ZonasMenu">
        {loading ? "Cargando..." : <React.Fragment>{MenuView}</React.Fragment>}
      </div>
    );
  }
}

ZonasMenu.contextType = Consumer;

export default ZonasMenu;
