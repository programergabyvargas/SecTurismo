import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import axios from "axios";

class Novedadesfull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        var token = this.context.token;
        var self = this;
        axios({
            method: "get",
            headers: {
                "Authorization": token
            },
            url: `${process.env.REACT_APP_API}/novedades/12`,
            responseType: 'json'
        })
        .then((response) => {
            self.setState({
                data: response.data.data.registros,
                loading: false
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const novedades = this.state.data.map((nov) => {
            let descripcion = nov.descripcion.substr(0, 450) + "...";
            let fecha = nov.fecha.split("-");
            return(
                <div key={`nov-f-${nov.id}`} className="row mb-5">
                    <div className="col">
                        <div className="novedad-full-item">
                            <div className="imagen">
                                <span style={{backgroundColor: nov.color}}>{`${fecha[2]}/${fecha[1]}/${fecha[0]}`} - {nov.localidad}</span>
                                <img className="img-fluid" src={`${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/${nov.foto_uno}`} alt="Img" />
                            </div>
                            <div className="titulo" style={{backgroundColor: nov.color}}>
                                <h3>{nov.titulo}</h3>
                                <h3>{nov.subtitulo}</h3>
                            </div>
                            <div className="body">
                                <p className="text-dark mb-2">{descripcion}</p>
                                <Link to={`/novedad/${nov.id}`}><span className="btn-novedades">Leer <i className="fas fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <React.Fragment>
                <div className="container Novedadesfull">
                    <div className="nf-titulo">
                        <span>NOVEDADES</span>
                    </div>
                </div>
                <div className="container">
                    {novedades}
                </div>
            </React.Fragment>
        );
    }
}

Novedadesfull.contextType = Consumer;

export default Novedadesfull;