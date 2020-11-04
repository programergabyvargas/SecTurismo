/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Modal from "react-awesome-modal";
import { Link } from "react-router-dom";

export default class PantallaModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ancho: this.props.anchoImg,
      alto: this.props.altoImg,
      maginLeft: this.props.maginLeft,
      visible: false,
    };
  }
  componentDidMount() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <section>
        <Modal
          visible={this.state.visible}
          width={this.props.anchoMargen}
          height={this.props.altoMargen}
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <Link to="/turismo-interno" className="link-menu">
            <img
              style={{
                width: this.state.ancho,
                height: this.state.alto,
                margin: this.state.maginLeft,
                marginTop: 25,
              }}
              src={this.props.picture}
            />
          </Link>
          <a
            className="close"
            href="javascript:void(0);"
            onClick={() => this.closeModal()}
          />
        </Modal>
      </section>
    );
  }
}
