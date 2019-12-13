import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Section extends Component {
  static defaultProps = {
    text: "Texte temporaire par défaut"
  };

  static propTypes = {
    text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.textInput = props.text;
  }
  render() {
    return <div>{this.textInput}</div>;
  }
}
