import React, { Component } from "react";
export default class TimeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSecond: 0,
      executedTimer: false
    };
  }
  componentDidMount() {
    this.simulateStatTimer();
  }
  simulateStatTimer = () => {
    // let executedTimer = setInterval(() => {
    //   console.log("interval executed");
    //   const seconds = this.state.currentSecond + 1;
    //   this.setState({ currentSecond: seconds });
    // }, 1000);
    this.setState(prevState => ({
      executedTimer: setInterval(() => {
        console.log("interval executed");
        const seconds = this.state.currentSecond + 1;
        this.setState({ currentSecond: seconds });
      }, 1000)
    }));
  };
  simulateStopTimer = () => {
    clearInterval(this.state.executedTimer);
    this.setState(prevState => ({
      executedTimer: false
    }));
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
