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
  // méthode incorrecte qui ne permet pas de faire le bind
  // handleClickSection() {
  //   console.log("Section click", this);
  // }

  // bind fct
  handleClickSection = () => {
    console.log("Section click", this);
  };
  render() {
    return (
      <div className="section" onClick={this.handleClickSection}>
        {this.textInput}
      </div>
    );
  }
}
