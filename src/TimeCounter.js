import React, { Component } from "react";
export default class TimeCounter extends Component {
  state = {
    currentSecond: 0
  };
  constructor(props) {
    super(props);
    this.simulateStatTimer();
  }
  simulateStatTimer = () => {
    this.executedTimer = setInterval(() => {
      console.log("interval executed");
      const seconds = this.state.currentSecond + 1;
      this.setState({ currentSecond: seconds });
    }, 1000);
  };
  simulateStopTimer = () => {
    clearInterval(this.executedTimer);
  };
  render() {
    return (
      <div>
        <div className="timer">{this.state.currentSecond}</div>
        <button onClick={this.simulateStopTimer}>Stop</button>
        <button onClick={this.simulateStatTimer}>Start</button>
      </div>
    );
  }
}
