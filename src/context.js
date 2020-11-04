import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

//Provider
export class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            token: ""
        }
        this.getToken = this.getToken.bind(this);
        this.getToken();
    }

    async getToken() {
        let self = this;
        let data_user = {
            email: "hansjal@gmail.com",
            password: "quilmes"
        }
        let respuesta = await axios.post(`${process.env.REACT_APP_API}/user/login`, data_user);
        let { token } = respuesta.data.data;
        self.setState({
            token,
            loading: false
        });
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {
                    this.state.loading ?
                    ""
                    :
                    this.props.children
                }
            </Context.Provider>
        )
    }
}

//Consumer
export const Consumer = Context.Consumer;
