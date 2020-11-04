import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

class PAgenciaViajes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      carousel: [],
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    var token = this.context.token;
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: token,
      },
      url: `${process.env.REACT_APP_API}/eventos/50`,
      responseType: "json",
    })
      .then((response) => {
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
              backgroundRepeat: "no-repeat",
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
            loading: false,
          });
        } else {
          //No hay registros o el id no es correcto
        }
      })
      .catch((error) => {
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
            <div className="container mb-5" />
            <div className="container">
              <div className="row mb-3" style={{ paddingTop: "150px" }}>
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>Agencias de Viajes</h3>
                </div>
                <div className="col">
                  <img
                    alt="terrazas"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src="http://agenciasanluis.com/wp-content/uploads/2017/09/terrazas.jpg"
                  />
                  <button
                    className="btn btn-dark btn-block"
                    type="button"
                    data-toggle="collapse"
                    data-target="#nueva_zona"
                    aria-expanded="false"
                    aria-controls="nueva_zona"
                    style={{
                      backgroundColor: "#cb6120",
                      height: "50px",
                      fontSize: "1.2rem",
                      lineHeight: "1.8rem",
                      fontWeight: "700",
                    }}
                  >
                    San Luis
                  </button>
                  <div className="collapse" id="nueva_zona">
                    <div className="card card-body">
                      <div className="row">
                        <div className="col-md-10" style={{ color: "#cb6120" }}>
                          <div className="form-group">
                            <div className="atractivo-info">
                              <h4>ALITURIS S.A. – E.V.T. – Legajo N° 650</h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: COLON Nº 733 – 5700 – SAN LUIS
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Tel./Cel.: 0266 – 442-3034
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                info@alituris.com
                              </span>
                              <br />
                              <span>
                                <i className="fas fa-clock" />
                                &nbsp; Representante: MORALES DE ZABALA, VIVIANA
                                ELISA – Registro: 3516.
                              </span>
                            </div>
                            <hr />
                            <div className="atractivo-info">
                              <h4>
                                BadaracViajes.com – E.V.T. – Legajo N° 17864
                              </h4>
                              <span className="pr-4 ">
                                <i className="fas fa-map-marker" />
                                &nbsp; Dirección: LAVALLE N°635 – 5700 – SAN
                                LUIS
                              </span>
                              <br />
                              <span className="pr-4">
                                <i className="fas fa-user" />
                                &nbsp; Tel./Cel.: 0266 – 4437557 / 266 - 4190354
                              </span>
                              <br />
                              <span>
                                <i class="fas fa-envelope" /> &nbsp;
                                info@badaracviajes.com
                              </span>
                              <br />
                              <span>
                                <i className="fas fa-clock" />
                                &nbsp; Representante: CADELAGO, MARIANA –
                                Registro: 16280.
                              </span>
                            </div>
                            <hr />
                            <h4>DAIMAR TOUR E.V.T. – Legajo N° 13553</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: LAVALLE Nº 911 – 5700 – SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 -444-6543
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              daimarturismo@hotmail.com.ar
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: PEDROZO, MARIA ANGELICA –
                              Registro: 14134
                            </span>
                            <hr />
                            <h4>
                              BENZAQUEN VIAJES Y TURISMO – E.V.T. Legajo N°
                              12171
                            </h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: San Martín Nº 874 Local 31 –
                              5700 – SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 442-3698
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              eleonorabenzaquen@yahoo.com.ar
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: GUTIERREZ SOTO, FERNANDA
                              SOLEDAD – Registro: 12915
                            </span>
                            <hr />
                            <h4>DASSO VIAJES – Legajo N° 3495</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: Rivadavia 444, Local Unidad A –
                              SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 442-1017
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              www.dassoviajes.tur.ar -
                              agencia@dassoviajes.com.ar
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: DASSO, JUAN JOSE. Registro:
                              4940
                            </span>
                            <hr />
                            <h4> DESTINO SAN LUIS E.V.T. – Legajo N° 13288</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: JUNIN Nº 818 “1” – 5700 – SAN
                              LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 444-6381
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              julietam@destinosanluis.com.ar
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: SORIA, MARIA GUADALUPE –
                              Registro: 10314
                            </span>
                            <hr />
                            <h4> EL PUNTANO VIAJES E.V.T. – Legajo N° 16261</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: JULIO ROCA Nº 1088 – 5700 – SAN
                              LUIS
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              cabanaelrincon@hotmail.com
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante:VELAZQUEZ, CINTHIA DESIREE –
                              Registro: 12772
                            </span>
                            <hr />
                            <h4> GIMATUR S.R.L. E.V.T. – Legajo N° 5813</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: PTE. ILLIA ESQ. CASEROS Nº 305
                              P.B. LOC. 5 Y – 5700 – SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 443-5751
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              gimatursl@velocom.com.ar
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: FERNANDEZ, NIRMA PETRONA –
                              Registro: 3019
                            </span>
                            <hr />
                            <h4>
                              HOODA JAZBANI – FRANQUICIA DE LOZADA VIAJES E.V.T.
                              Legajo N° 16125
                            </h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: COLON Nº 626 – 5700 – SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 501-1807
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              hooda.jazbani@lozadaviajes.com
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: SOSA, MARINA SOLEDAD –
                              Registro: 13966
                            </span>
                            <hr />
                            <h4>
                              LAS QUIJADAS TURISMO E.V.T. – Legajo N° 10669
                            </h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: SAN MARTIN Nº 874 PB y EP “36” –
                              5700 – SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 446-5161
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              quijadasturismo@hotmail.com
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: BUSTOS, CLAUDIA PATRICIA –
                              Registro: 4962
                            </span>
                            <hr />
                            <h4>LOURDES TOUR E.V.T. – Legajo N° 12561</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: BOLIVAR Nº 935 – 5700 – SAN LUIS
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              lourdestour1@hotmail.com
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: BELINAUX, JOSE IGNACIO –
                              Registro: 10564
                            </span>
                            <hr />
                            <h4>LUCIANO FRANCHI E.V.T. – Legajo N° 9875</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: CASEROS Nº 867 – 5700 – SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 442-3740
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              vljcsociedad@gmail.com
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: FRANCHI, LUCIANO – Registro:
                              7817
                            </span>
                            <hr />
                            <h4>MONTERO VIAJES E.V.T. – Legajo N° 10644</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: CASEROS Nº 637 – 5700 – SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 444-3782
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              monteroviajes@yahoo.com.ar
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: FERRON, FRANCISCO ALBERTO –
                              Registro: 9898
                            </span>
                            <hr />
                            <h4>NALA VIAJES E.V.T. – Legajo N° 14895</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: MITRE Nº 693 – 5700 – SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 266 – 154883030
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              rodriguezbarrerapepe@hotmail.com
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: NEILOR, MARCELO MARIO –
                              Registro: 12172
                            </span>
                            <hr />
                            <h4>SAN LUIS TRAVEL E.V.T. – Legajo N° 13542</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: PRINGLES Nº 335 – 5700 – SAN
                              LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 444-6585
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              andresarellano@lic.net.ar
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: ARELLANO, GERARDO ANDRES –
                              Registro: 8603
                            </span>
                            <hr />
                            <h4>SEMARDIC VIAJES - Legajo N° 17218</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: Bolivar 935 LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 2664367920
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              semardicsanluis@gmail.com
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: DIONELA, AMAYA{" "}
                            </span>
                            <hr />
                            <h4>SIGLATUR E.V.T. – Legajo N° 8643</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: PEDERNERA Nº 869 – 5700 – SAN
                              LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 442-2499
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              siglatur@speedy.com.ar
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: TORQUATTI, SILVIA NELIDA –
                              Registro: 3970
                            </span>
                            <hr />
                            <h4>VIAJES INOLVIDABLES SAN LUIS </h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: JULIO A. ROCA Nº 260 “69” – 5700
                              – SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 442-8318
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              pablomc7@hotmail.com
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: STURINO, MARTA DEL VALLE –
                              Registro: 14809
                            </span>
                            <hr />
                            <h4> VIAJES NO COMUNES E.V.T. – Legajo N° 8786</h4>
                            <span className="pr-4 ">
                              <i className="fas fa-map-marker" />
                              &nbsp; Dirección: PRESIDENTE ILLIA Nº 599 LOCAL 2
                              – 5700 – SAN LUIS
                            </span>
                            <br />
                            <span className="pr-4">
                              <i className="fas fa-user" />
                              &nbsp; Tel./Cel.: 0266 – 442-8265
                            </span>
                            <br />
                            <span>
                              <i class="fas fa-envelope" /> &nbsp;
                              ventasnocomunes@speedy.com.ar{" "}
                            </span>
                            <br />
                            <span>
                              <i className="fas fa-clock" />
                              &nbsp; Representante: DI GENNARO, MARIA FATIMA –
                              Registro: 5105
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="merlo"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src="http://www.lavillademerlo.com.ar/data1/images/merlosanluis01.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#Merlo"
                        aria-expanded="false"
                        aria-controls="Merlo"
                        style={{
                          backgroundColor: "#336535",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700",
                        }}
                      >
                        Merlo
                      </button>
                      <div className="collapse" id="Merlo">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#336535" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h4>
                                    COMECHINGON VIAJES A.T. – Legajo N° 11788
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: AV.DEL SOL Nº 182 – 5881 –
                                    MERLO
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    comechingon@merlo-sl.com.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: GAILHAC, VICTORIA –
                                    Registro: 8580
                                  </span>
                                  <hr />
                                  <h4>
                                    COOPERATIVA TELEFÓNICA, OTROS SERVICIOS
                                    PÚBLICOS Y DE CRÉDITO E.S.F.L.
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: POETA AGÜERO Nº 770 PB “1”
                                    – 5881 – MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-7410
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    coopmerlo@merlo-sl.com.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: ORTIZ SUAREZ, FERNANDO
                                    JORGE – Registro: 8533
                                  </span>
                                  <hr />
                                  <h4>
                                    DECIDIMERLO.COM E.V.T. – Legajo N° 14448
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: POETA CONTI Nº 512 – 5881
                                    – MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-4740
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    josecarlosmachuca@hotmail.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: MACHUCA, MARIANA PAULA
                                    – Registro: 11969
                                  </span>
                                  <hr />
                                  <h4>
                                    EL PAJARO AZUL E.V.T. – Legajo N° 13385.
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: GÜEMES Nº 422 – 5881 –
                                    MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-3319
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    martahbenavides@gmail.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: BENAVIDEZ, MARTA HEBE
                                    – Registro: 8805
                                  </span>
                                  <hr />
                                  <h4>
                                    FERNANDEZ GUARDIA – FRANQUICIA DE LOZADAS
                                    VIAJES E.V.T. Legajo N° 15612
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: AV.DEL SOL Nº 215 LOCAL 3
                                    – 5881 – MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-0437
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    marcela.rodriguez@lozadaviajes.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: LUCCIONI, DANIELA
                                    PAOLA – Registro: 13614
                                  </span>
                                  <hr />
                                  <h4>
                                    GALO VIAJES Y TURISMO E.V.T. – Legajo N°
                                    15641
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: YANZON Nº 65 LOCAL 4 –
                                    5881 – MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-0504
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    galoviajesyturismo@outlook.com.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: GABALDO, MARIA ESTELA
                                    – Registro: 10583
                                  </span>
                                  <hr />
                                  <h4>
                                    MAGNA TURISMO E.V.T. – Legajo N° 13121
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: AV. DEL SOL Nº 574 – 5881
                                    – MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-5618
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    jcontiviajes@arnetbiz.com.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: DEMORO PRADO, ROMINA
                                    PATRICIA – Registro: 13320
                                  </span>
                                  <hr />
                                  <h4>
                                    MYSTIC ARGENTINA E.V.T. – Legajo N° 13197
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: LOS ALMENDROS Nº 560 –
                                    5881 – MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-6323
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    mysticargentina@live.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: CIUFFO FRATTAROLI,
                                    GINA VANINA – Registro: 10320
                                  </span>
                                  <hr />
                                  <h4>
                                    NASELU VIAJES Y TURISMO E.V.T. – Legajo N°
                                    15301
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: MARTE Nº 350 LOCAL 2 –
                                    5881 – MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-0547
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    mtorres.canablaya@gmail.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: BECERRA CASTILLO,
                                    LUCAS EDUARDO – Registro: 12953
                                  </span>
                                  <hr />
                                  <h4>
                                    SERRANIAS TOUR E.V.T – Legajo N° 12357
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: AV.DEL SOL Nº 186 – 5881 –
                                    MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.:02656 – 47-4737
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    mtorres.canablaya@gmail.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: SEBASTIANO, LIONELLA
                                    ALEJANDRA – Registro: 8329
                                  </span>
                                  <hr />
                                  <h4>
                                    SERRANIAS TOUR E.V.T – Legajo N° 12357
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: AV.DEL SOL Nº 186 – 5881 –
                                    MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.:02656 – 47-4737
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: SEBASTIANO, LIONELLA
                                    ALEJANDRA – Registro: 8329
                                  </span>
                                  <hr />
                                  <h4>TORRES TUR E.V.T. – Legajo N° 11822</h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: TERMINAL DE OMNIBUS RUTA
                                    PROV. Nº 1 – LOCALES 18 Y – 5881-MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-4071
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    torrestur@merlo-sl.com.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: YVANEZ, MIGUEL ANTONIO
                                    – Registro: 8842
                                  </span>
                                  <hr />
                                  <h4>
                                    TURISMO IMPACTO E.V.T. – Legajo N° 13122
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: AV.DEL SOL Nº 416
                                    P.B.LOCAL 10 – 5881 – MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-3706
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: ESCOBEDO, BEATRIZ
                                    ESTER – Registro: 8670
                                  </span>
                                  <hr />
                                  <h4>
                                    TURISMO MATEY E.V.T. – Legajo N° 14185
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: AV. DEL SOL Nº 1205 – 5881
                                    – MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 47-6086
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    turismomatey@gmail.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: GROSSO, MARIANA
                                    ELIZABETH – Registro: 8721
                                  </span>
                                  <hr />
                                  <h4>VOLANDO BAJO E.V.T. – Legajo N° 13034</h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: PRINGLES Nº 459 – 5881 –
                                    MERLO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02656 – 0047-6248
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    volandobajoturismo@hotmail.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: DORSO, MARTA GRACIELA
                                    – Registro: 10176
                                  </span>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="mercedes"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src="https://www.caminosanluis.com.ar/wp-content/uploads/2014/03/Complejo-Molino-Fenix-1-VM.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#VillaMercedes"
                        aria-expanded="false"
                        aria-controls="VillaMercedes"
                        style={{
                          backgroundColor: "#EAAB2D",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700",
                        }}
                      >
                        Villa Mercedes
                      </button>
                      <div className="collapse" id="VillaMercedes">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#EAAB2D" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h4>
                                    ALO E.V.T. – E.V.T. – Legajo N° 14.072
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: Tucumán 137 – VILLA
                                    MERCEDES
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    conozcanos_sanluis@yahoo.com.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: LUCERO OCAMPO, ALFREDO
                                    LUIS ANTONIO. Registro: 543
                                  </span>
                                  <hr />
                                  <h4>
                                    BRESSIA.COM SERVICIOS TURISTICOS – E.V.T. –
                                    Legajo N° 14192
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: Manuel Lainez Nº 21 DPTO 1
                                    – 5730 – VILLA MERCEDES
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    paulinaojeda_6@hotmail.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: OJEDA, PAULINA –
                                    Registro: 9586
                                  </span>
                                  <hr />
                                  <h4>FERMI TOUR E.V.T. – Legajo N° 7196</h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: LAVALLE Nº 462 – 5730 –
                                    VILLA MERCEDES
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02657 – 43-0569
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    Info@fermutour.tur.ar /
                                    fermitour@infovia.com.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: CRESPO, FERMIN MARCELO
                                    – Registro: 1348
                                  </span>
                                  <hr />
                                  <h4>FEEL TRAVEL – Legajo N° 16026</h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: PEDERNERA Nº 599 – 5730 –
                                    VILLA MERCEDES
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02657 – 42-7980
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    marcela.martinuk@feeltravel.com.ar
                                    consultas@feeltravel.com.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: ALMADA, GABRIELA
                                    ALEJANDRA – Registro: 13685
                                  </span>
                                  <hr />
                                  <h4> PEUCA YAL E.V.T. – Legajo N° 12441</h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: PESCADORES Nº 238 – 5730 –
                                    VILLA MERCEDES
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 2657435222 / 2657434612 /
                                    2657600468
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    info@peucayal.tur.ar /
                                    peucayal@peucayal.tur.ar /
                                    www.peucayal.tur.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: BENITEZ, JESUS ALFREDO
                                    – Registro: 7302
                                  </span>
                                  <hr />
                                  <h4>
                                    SILVUSKY TOURS E.V.T. – Legajo N° 10186
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: AV. 25 DE MAYO Nº 819 –
                                    5730 – VILLA MERCEDES
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.:02657 430444 / wtp 15391077
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    info@silvusky.tur.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: SILVANI, LUCIANA
                                    SOLEDAD – Registro: 12114
                                  </span>
                                  <hr />
                                  <h4>TEMPORADAS E.V.T. – Legajo N° 12094</h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: URQUIZA Nº 135 – 5730 –
                                    VILLA MERCEDES
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02657 – 42-0047
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    temporadasviajes@yahoo.es
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: ASTUDILLO, CESAR
                                    DANIEL – Registro: 10334
                                  </span>
                                  <hr />
                                  <h4>
                                    VIAJES Y TURISMO CALLE ANGOSTA E.V.T. –
                                    Legajo N° 13614
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: MULLEADY Nº 87 – 5730 –
                                    VILLA MERCEDES
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02657 – 42-8293
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    calleangostaviajes@yahoo.com.ar
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: LESCANO, YESICA
                                    DANIELA – Registro: 12142
                                  </span>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="janakoslay"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src="https://i.ibb.co/hDn3Xz9/MONUMENTO-PUEBLO-PUNTANO-2-juana-koslay.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#JuanaKoslay"
                        aria-expanded="false"
                        aria-controls="JuanaKoslay"
                        style={{
                          backgroundColor: "#CB6120",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700",
                        }}
                      >
                        Juana Koslay
                      </button>
                      <div className="collapse" id="JuanaKoslay">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#CB6120" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h4>
                                    INDICO VIAJES E.V.T. – Legajo N° 15556
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección:AV. SANTOS ORTIZ KM. 781
                                    “1” – 5701
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 0266 – 440-3757
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    agenciaindicoviajes@gmail.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: LOMBARDO, CARLA ITATI
                                    – Registro: 13035
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row mb-3">
                    <div className="col">
                      <img
                        alt="sanfrancisco"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src="http://espiritu-viajero.com/wp-content/uploads/2016/02/san-francisco-del-monte-de-oro-11.jpg"
                      />
                      <button
                        className="btn btn-dark btn-block"
                        type="button"
                        data-toggle="collapse"
                        data-target="#SanFrancisco"
                        aria-expanded="false"
                        aria-controls="SanFrancisco"
                        style={{
                          backgroundColor: "#A3BD31",
                          height: "50px",
                          fontSize: "1.2rem",
                          lineHeight: "1.8rem",
                          fontWeight: "700",
                        }}
                      >
                        San Francisco del Monte de Oro
                      </button>
                      <div className="collapse" id="SanFrancisco">
                        <div className="card card-body">
                          <div className="row">
                            <div
                              className="col-md-10"
                              style={{ color: "#A3BD31" }}
                            >
                              <div className="form-group">
                                <div className="atractivo-info">
                                  <h4>
                                    SAN FRANCISCO DEL MONTE DE ORO TURISMO
                                    ALTERNATIVO E.V.T. – Legajo N° 15946
                                  </h4>
                                  <span className="pr-4 ">
                                    <i className="fas fa-map-marker" />
                                    &nbsp; Dirección: PRINGLES Nº S/N° – 5705 –
                                    SAN FRANCISCO DEL MONTE DE ORO
                                  </span>
                                  <br />
                                  <span className="pr-4">
                                    <i className="fas fa-user" />
                                    &nbsp; Tel./Cel.: 02664 – 33-4221
                                  </span>
                                  <br />
                                  <span>
                                    <i class="fas fa-envelope" /> &nbsp;
                                    GLOBBE@hotmail.com
                                  </span>
                                  <br />
                                  <span>
                                    <i className="fas fa-clock" />
                                    &nbsp; Representante: SEPAK, ALEXANDER –
                                    Registro: 13794
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

PAgenciaViajes.contextType = Consumer;

export default PAgenciaViajes;
