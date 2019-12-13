import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  logIn(event) {
    event.preventDefault();
    console.log("LOGIN", this);
  }

  render() {
    return (
      <form onSubmit={event => this.logIn(event)}>
        {/* <form onSubmit={this.logIn}> */}
        <p>
          <button type="submit">Connexion !</button>
        </p>
      </form>
    );
  }
}
