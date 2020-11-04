import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class RegistroAlojamientosCovid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      alojamiento: {
        idguia: 1,
        razonsocial: "",
        cuit: "0",
        ingresosbrutos: "0",
        cbu: "0",
      },
      tipos: [{ id: 0, descripcion: "Loading..." }],
      chequeomunicipal: {
        habilitacion: "",
      },
      tiposcategoriasselect: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.chequeo = this.chequeo.bind(this);
    this.handleTipoCategorias = this.handleTipoCategorias.bind(this);
    this.subirFormulario = this.subirFormulario.bind(this);
  }
  handleTipoCategorias = (event) => {
    const target = event.target;
    const name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      tipos: {
        ...this.state.tipos,
        [name]: value,
      },
    });

    console.log(event.target.value);
    console.log(this.state.guia);
  };
  chequeo = (e) => {
    this.setState({
      chequeomunicipal: {
        ...this.state.chequeomunicipal,
        [e.target.name]: e.target.id,
      },
    });
  };
  handleChange(e) {
    this.setState({
      alojamiento: {
        ...this.state.alojamiento,
        [e.target.name]: e.target.value,
      },
    });
  }

  subirFormulario = (event) => {
    //this.setState({ loading: true });
    event.preventDefault();
    var data = new FormData();
    data.append("data", event.target);
    for (var [key, value] of Object.entries(this.state.alojamiento)) {
      data.append(key, value);
    }
    //Se pasa el ID del Usuario actual
    if ("WebTurId" in localStorage) {
      //Siempre debería existir!
      if (localStorage.getItem("WebTurId").length > 0) {
        data.set("iduser", localStorage.getItem("WebTurId"));
      }
    }

    console.log(`${process.env.REACT_APP_API}`);
    fetch(`${process.env.REACT_APP_API}/guia/addalojamiento/voucher`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("WebTurToken"),
        //"Content-Type": "multipart/form-data"
      },
      body: data,
    }).then((res) => {
      this.setState({ loading: false });
      if (res.ok && res.status === 200) {
        res.json().then((data) => {
          if (data.logo !== this.state.guia.logo) {
            console.log("correcto??'");
          }
        });
        //this.state.guia.logo
        this.setState({
          modal: {
            ...this.state.modal,
            msg: "Los datos se actualizaron correctamente!",
            open: true,
          },
        });
      } else {
        //409 Conflicto
        res.json().then((data) => {
          if (data.err === true) {
            let errores = "";
            if (data.errMsgs && Array.isArray(data.errMsgs)) {
              data.errMsgs.forEach((element) => {
                errores += `<p>${element}</p>`;
              });
            }
            this.setState({
              modal: {
                ...this.state.modal,
                msg: data.errMsg,
                extras: errores,
                open: true,
              },
            });
          } else {
            //Error desconocido OJO!
            this.setState({
              modal: {
                ...this.state.modal,
                msg:
                  "Error desconocido, comunicar al Administrador del sistema esta situación!",
                open: true,
              },
            });
          }
        });
      }
    });
  };

  componentDidMount() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    //Datos de la Guia
    fetch(`${process.env.REACT_APP_API}/guias/adheridos`).then((res) => {
      if (res.ok && res.status === 200) {
        res.json().then((data) => {
          console.log(data.data.registros[0]);
          this.setState({
            tipos: data.data.registros,
          });
        });
      }
    });
    //
  }

  render() {
    const tipo = this.state.tipos.map((t) => {
      return (
        <option key={"t-" + t.id} value={t.id}>
          {t.nombre} {t.id}
        </option>
      );
    });
    return (
      <div
        className="container"
        style={{ paddingTop: "150px", paddingBottom: "100px" }}
      >
        <center>
          <div className="Recorridos ">
            <div className="reco-titulo">
              <span className="reco-t-sub2">SAN LUIS, MI DESTINO</span>
            </div>
            <div className="">
              <p className="" style={{ fontSize: "30px", color: "#C3B1AD" }}>
                El siguiente formulario deberá ser completado por los
                establecimientos registrados bajo protocolo COVID-19 de la
                provincia de San Luis que deseen adherir al Programa "San Luis.
                Mi Destino".-
              </p>
            </div>
          </div>
        </center>

        <Form>
          <FormGroup>
            <FormGroup>
              <legend>Seleccione su alojamiento:</legend>
              <Input
                type="select"
                className="form-control"
                id="idtipo"
                name="idguia"
                value={this.state.tipos.id}
                onChange={this.handleChange}
              >
                {tipo}
              </Input>
            </FormGroup>
            <legend>Razón Social</legend>
            <Label>Del Establecimiento:</Label>
            <Input
              type="text"
              name="razonsocial"
              id="razonSocial"
              placeholder=""
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <legend>CUIT:</legend>
            <Label>
              Especifique sin guiones ni puntos el número completo del Clave
              Única de Identificación Tributaria del establecimiento.
            </Label>
            <Input
              type="number"
              name="cuit"
              id="CUIT "
              placeholder=""
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <legend>Inscripción Ingresos Brutos</legend>
            <Label>
              Identifique el número de inscripción en Ingresos Brutos de la
              Provincia de San Luis:
            </Label>
            <Input
              type="number"
              name="ingresosbrutos"
              id="telefono"
              placeholder=""
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Habilitación Municipal:</legend>

            <Label>¿Posee habilitación municipal vigente?</Label>
            <FormGroup check>
              <Label>
                <Input
                  type="radio"
                  id="true"
                  name="habilitacion"
                  onChange={this.chequeo}
                />
                Si {this.state.chequeomunicipal.habilitacion} <br></br>
                <Input
                  type="radio"
                  id="false"
                  name="habilitacion"
                  onChange={this.chequeo}
                  defaultChecked
                />
                No
              </Label>

              {Boolean(this.state.chequeomunicipal.habilitacion) ? (
                <Label>
                  '*Debe tener habilitacón municipal para partcipar del
                  programa.'{" "}
                </Label>
              ) : (
                ""
              )}
            </FormGroup>
          </FormGroup>
          <legend>Adhesión al Programa "San Luis, Mi Destino" </legend>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />
              Declaro que los datos consignados anteriormente revisten el
              carácter de Declaración Jurada.
            </Label>
            <br></br>
            <Label check>
              <Input type="checkbox" /> He leído y acepto las{" "}
              <a href="https://www.google.com.ar/">bases y condiciones</a> del
              Programa San Luis Mi Destino.
            </Label>
          </FormGroup>
          <FormGroup check row>
            <Button
              style={{ marginTop: 50, backgroundColor: "#632965" }}
              type="button"
              onClick={this.subirFormulario}
            >
              Aceptar
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default RegistroAlojamientosCovid;
