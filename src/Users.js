import React, { Component } from "react";

export default class Users extends Component {
  render() {
    return (
      <div className="user-list">
        {this.props.users.map((name, index) => {
          return (
            <div key={index} className="user-item">
              {name}
            </div>
          );
        })}
      </div>
    );
  }
}
