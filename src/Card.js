import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  handleCLick() {
    console.log("Card click ");
  }
  render() {
    const a = "Hello world";
    return (
      <div className="card" onClick={() => this.handleCLick()}>
        H
      </div>
    );
  }
}
