import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
  state = {
    inputValue: 0
  };
  constructor(props) {
    super(props);
  }

  logIn(event) {
    event.preventDefault();
    console.log("LOGIN", this);
  }
  handleChangeValueImposePair = ({ target: { value } }) => {
    console.log("check value executed", value);
    value = value
      // Remove all non-digits, turn initial 33 into nothing
      .replace(/\D+/, "");
    if (value == "") value = 0;
    else if (value % 2 != 0) value = 0;
    this.setState({ inputValue: value });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={event => this.logIn(event)}>
        {/* <form onSubmit={this.logIn}> */}
        <p>
          <input
            type="number"
            value={inputValue}
            onChange={this.handleChangeValueImposePair}
          />
        </p>
        <p>
          <button type="submit">Connexion !</button>
        </p>
      </form>
    );
  }
}
