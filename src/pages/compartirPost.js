import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

class compartirPost extends Component {
  render() {
    return (
      <div>
        <FacebookShareButton
          url={this.props.Url}
          quote={`${this.props.Titulo} - ${this.props.Resumen}`}
        >
          <FacebookIcon round size={32} />
        </FacebookShareButton>
        <TwitterShareButton url={this.props.Url} title={this.props.Titulo}>
          <TwitterIcon round size={32} />
        </TwitterShareButton>
      </div>
    );
  }
}

compartirPost.propTypes = {
  Url: PropTypes.string,
  Titulo: PropTypes.string,
  Resumen: PropTypes.string
};

export default compartirPost;
