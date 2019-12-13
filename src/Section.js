import React, { Component } from "react";

export default class Section extends Component {
  render() {
    const text = this.props.text;
    return <div>{text}</div>;
  }
}
