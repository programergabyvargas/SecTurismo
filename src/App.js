import React, { Component } from "react";
//import { Provider, Consumer } from "./context";
import { Provider } from "./context";
import "./App.css";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import ToTop from "./components/ToTop";

import PHome from "./pages/PHome";
import PZona from "./pages/PZona";
import PNovedades from "./pages/novedades/PNovedades";
import PNovedad from "./pages/novedades/PNovedad";
import PLocalidad from "./pages/PLocalidad";
import PAtractivo from "./pages/atractivo/PAtractivo";
import PEventos from "./pages/PEventos";
import PEvento from "./pages/PEvento";
import PListadoAtractivos from "./pages/atractivo/PListadoAtractivos";
import PListadoGastronomia from "./pages/gastronomia/PListadoGastronomia";
import PAlojamiento from "./pages/PAlojamiento";
import PFiltroAlojamiento from "./pages/variosmenu/PFiltroAlojamiento";
import PAgenciaViajes from "./pages/servicios/PAgenciaViajes";
import PGuiaTurismo from "./pages/servicios/PGuiaTurismo";
import PAeropuerto from "./pages/servicios/PAeropuerto";
import PAlquileresAuto from "./pages/servicios/PAlquileresAuto";
import PCasasCambio from "./pages/servicios/PCasasCambio";
import PTaxis from "./pages/servicios/PTaxis";
import PArchivosApp from "./pages/variosmenu/PArchivosApp";
import PContacto from "./pages/variosmenu/PContacto";
import PDiques from "./pages/variosmenu/Diques";
import Recorridos from "./components/Recorridos";
import PComer from "./pages/gastronomia/PComer";
import PServicios from "./pages/servicios/PServicios";
import PParquesList from "./pages/variosmenu/ParquesList";
import PPermisoPesca from "./pages/servicios/PPermisoPesca";
import PCreerGnral from "./pages/PCreerGnral";
import PZonaCreer from "./pages/PZonaCreer";
import Prueba from "./pages/variosmenu/Prueba";
import PCerveceria from "./pages/gastronomia/PCerveceria";
import PZonaCerveceria from "./pages/gastronomia/PZonaCerveceria";
import PGastronomia from "./pages/gastronomia/PGastronomia";
import PPrincipalGastronomia from "./pages/gastronomia/PPrincipalGastronomia";
import PZonaGastronomica from "./pages/gastronomia/PZonaGastronomica";
import PCursoMarketing from "./pages/PCursoMarketing";
import PMotoTurismo from "./pages/moto_turismo/PMotoTurismo";
import PCielosPuntanos from "./pages/moto_turismo/PCielosPuntanos";
import PConsejos from "./pages/moto_turismo/PConsejos";
import PTelefonosUtiles from "./pages/moto_turismo/PTelefonosUtiles";
import PTrazosHistoria from "./pages/moto_turismo/PTrazosHistoria";
import PCoronavirus from "./pages/PCoronavirus";
import RegistroAgenciasdeViajes from "./pages/variosmenu/RegistroAgenciasdeViajes";
import RegistroGuiasTurismo from "./pages/variosmenu/RegistroGuiasTurismo";
import ListadoGuiasCovid from "./pages/variosmenu/ListadoGuiasCovid";
import ListadoAgenciasCovid from "./pages/variosmenu/ListadoAgenciasCovid";
import BotonTurismoInterno from "./components/subcomponentes/BotonTurismoInterno";

import Footer from "./components/Footer";
import PVallesEncantados from "./pages/moto_turismo/PVallesEncantados";
import PSaludYVitalidad from "./pages/moto_turismo/PSaludYVitalidad";
import RegistroAlojamientos from "./pages/covid/voucher/RegistroAlojamientos";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router history={Router.hashHistory}>
          <React.Fragment>
            <Menu />
            <Switch>
              <Route exact path="/" component={PHome} />
              <Route exact path="/novedades" component={PNovedades} />
              <Route exact path="/novedad/:id" component={PNovedad} />
              <Route exact path="/zona/:id" component={PZona} />
              <Route exact path="/localidad/:id" component={PLocalidad} />
              <Route exact path="/atractivo/:id" component={PAtractivo} />
              <Route exact path="/gastronomia/:id" component={PGastronomia} />
              <Route
                exact
                path="/atractivos/:id"
                component={PListadoAtractivos}
              />
              <Route
                exact
                path="/gastronomialistado/:id"
                component={PListadoGastronomia}
              />
              <Route exact path="/eventos" component={PEventos} />
              <Route exact path="/evento/:id" component={PEvento} />
              <Route exact path="/alojamiento/:id" component={PAlojamiento} />
              <Route
                exact
                path="/filtroalojamiento"
                component={PFiltroAlojamiento}
              />
              <Route exact path="/agenciaviajes" component={PAgenciaViajes} />
              <Route exact path="/guiaturismo" component={PGuiaTurismo} />
              <Route exact path="/PAeropuerto" component={PAeropuerto} />
              <Route exact path="/coronavirus" component={PCoronavirus} />
              <Route
                exact
                path="/PAlquileresAuto"
                component={PAlquileresAuto}
              />
              <Route exact path="/PCasasCambio" component={PCasasCambio} />
              <Route exact path="/PTaxis" component={PTaxis} />
              <Route
                exact
                path="/Charla_Marketing"
                component={PCursoMarketing}
              />
              <Route exact path="/PArchivosApp" component={PArchivosApp} />
              <Route exact path="/PContacto" component={PContacto} />
              <Route exact path="/diques" component={PDiques} />
              <Route exact path="/Recorridos" component={Recorridos} />
              <Route exact path="/PComer" component={PComer} />
              <Route exact path="/PServicios" component={PServicios} />
              <Route exact path="/PParquesList" component={PParquesList} />
              <Route exact path="/PPermisoPesca" component={PPermisoPesca} />
              <Route exact path="/PCreerGnral" component={PCreerGnral} />
              <Route exact path="/Prueba" component={Prueba} />
              <Route exact path="/Moto_Turismo" component={PMotoTurismo} />
              <Route
                exact
                path="/Cielos_Puntanos"
                component={PCielosPuntanos}
              />
              <Route exact path="/Tips_Moto" component={PConsejos} />
              <Route
                exact
                path="/Telefonos_Utiles"
                component={PTelefonosUtiles}
              />
              <Route
                exact
                path="/Trazosdehistoria"
                component={PTrazosHistoria}
              />
              <Route
                exact
                path="/VallesEncantados"
                component={PVallesEncantados}
              />
              <Route
                exact
                path="/SaludYvitalidad"
                component={PSaludYVitalidad}
              />
              <Route
                exact
                path="/RegistroAgenciasdeViajes"
                component={RegistroAgenciasdeViajes}
              />
              <Route
                exact
                path="/RegistroGuiasTurismo"
                component={RegistroGuiasTurismo}
              />
              <Route
                exact
                path="/PZonaCreer/:id/:zona"
                component={PZonaCreer}
              />
              <Route
                exact
                path="/PZonaCerveceria/:id/:zona"
                component={PZonaCerveceria}
              />
              <Route
                exact
                path="/PZonaGastronomica/:id/:zona"
                component={PZonaGastronomica}
              />
              <Route exact path="/PCerveceria" component={PCerveceria} />
              <Route
                exact
                path="/PPrincipalGastronomia"
                component={PPrincipalGastronomia}
              />
              <Route
                exact
                path="/listado-guias-covid"
                component={ListadoGuiasCovid}
              />
              <Route
                exact
                path="/listado-agencias-covid"
                component={ListadoAgenciasCovid}
              />
              <Route
                exact
                path="/turismo-interno"
                component={BotonTurismoInterno}
              />
              <Route
                exact
                path="/registro-alojamientos-covid"
                component={RegistroAlojamientos}
              />
            </Switch>
            <ToTop showAt={400} />
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
  /*
	render() {
		return (
			<Provider>
				<Consumer>
					{ value => {
						return (
							<Router history={Router.hashHistory}>
								<React.Fragment>
									<Switch>
										<Route exact path="/" component={PHome} />
										<Route exact path="/novedades" component={PNovedades} />
										<Route exact path="/zona/:id" component={PZona} />
										<Route exact path="/localidad/:id" component={PLocalidad} />
										<Route exact path="/atractivo/:id" component={PAtractivo} />
									</Switch>
									<Footer />
								</React.Fragment>
							</Router>
						);
					}}
				</Consumer>
			</Provider>
		);
	}
	*/
}

export default App;
