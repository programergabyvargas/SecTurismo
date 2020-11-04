import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";
import Viewer from "./Viewer";

/*
    Ej de uso: <Alojamientos idLocalidad="0" data={array} />
*/

class Alojamientos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            idLocalidad: 0,
            data: [],
            alojamientos: [],
            visibles: 4
        };
        this.setData = this.setData.bind(this);
        this.calculoVisibles = this.calculoVisibles.bind(this);
    }

    calculoVisibles() {
        var w = window.innerWidth;
        //console.log(w);
        if(w > 1200) {
            this.setState({visibles: 4});
        } else if(w <= 1200 && w >= 1024) {
            this.setState({visibles: 3});
        } else if(w <= 1024 && w >= 768) {
            this.setState({visibles: 2});
        } else {
            this.setState({visibles: 1});
        }
    }

    setData() {
        const token = this.context.token;
        var self = this;
        this.setState({
            loading: true
        }, () => {
            if(parseInt(self.state.idLocalidad) === 0) {
                self.setState({
                    alojamientos: self.state.data,
                    loading: false
                });
            } else {
                axios({
                    method: "get",
                    headers: {
                        "Authorization": token
                    },
                    url: `${process.env.REACT_APP_API}/guias/ciudad/${self.state.idLocalidad}/full`,
                    responseType: 'json'
                })
                .then((response) => {
                    self.setState({
                        alojamientos: response.data.data.registros,
                        loading: false
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            }
            
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.idLocalidad !== prevProps.idLocalidad || this.props.data !== prevProps.data) {
            this.setState({
                loading: true,
                idLocalidad: this.props.idLocalidad,
                data: this.props.data
            }, () => {
                this.setData();
            });
        }
    }

    componentDidMount() {
        this.setState({
            idLocalidad: this.props.idLocalidad,
            data: this.props.data
        }, () => {
            this.setData();
        });
        window.addEventListener("resize", this.calculoVisibles);
        this.calculoVisibles();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.calculoVisibles);
    }

    render() {
        const loading = this.state.loading;
        const alojamientos = this.state.alojamientos.map((alo) => {
            let foto = "default.jpg";
            if(alo.fotos.length > 0) {
                foto = alo.fotos[0].imagen;
            }
            return(
                <div key={`alo-card-${alo.id}`} className="alo-card m-3">
                    <div className="img-box">
                        <div className="img-content">
                            <div className="nombre">{alo.nombre}</div>
                            <img className="" src={`${process.env.REACT_APP_API}/imagenes/${foto}`} alt="Img" />
                        </div>
                    </div>
                    <div className="details">
                        <div className="content">
                            <div className="nombre">{alo.nombre}</div>
                            <ul className="detalles">
                                <li>{alo.tipo}</li>
                                <li><p><a href={`mailto:${alo.mail}?Subject=Consulta`}>{alo.mail}</a></p></li>
                                <li><p><a href={`tel:+549${alo.caracteristica}${alo.telefono}`}>+54 9 {alo.caracteristica} - {alo.telefono}</a></p></li>
                                <li><p><a href={`http://${alo.web}`} target="_blank" rel="noopener noreferrer">{alo.web}</a></p></li>
                            </ul>
                            <div className="vermas">
                                <Link to={`/alojamiento/${alo.id}`}><i className="fas fa-book-open"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <React.Fragment>
                {
                    loading ?
                    <div>Cargando...</div>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Viewer visibles={this.state.visibles}>
                                    {alojamientos}
                                </Viewer>
                            </div>
                        </div>
                    </div>
                }
                <style jsx="true">{`
                `}</style>
            </React.Fragment>
        );
    }
}

Alojamientos.contextType = Consumer;

export default Alojamientos;