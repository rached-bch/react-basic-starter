import React, { Component } from "react";

export default class Columns extends Component {
  constructor(props) {
    super();

    this.left = props.left;
    this.center = props.center;
    this.right = props.right;
  }

  render() {
    console.log("props", this.left);
    return (
      <div className="memory">
        <div className="columns columns-left">{this.left}</div>
        <div className="columns columns-center">{this.center}</div>
        <div className="columns columns-right">{this.right}</div>
      </div>
    );
  }
}
