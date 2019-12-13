import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import Greeter from "./Greeter";
import GuessCount from "./GuessCount";

class App extends Component {
  handleClick(Card) {
    console.log("Card click", Card);
  }

  render() {
    const GreeterComponent = <Greeter whom="Rached" />;

    return (
      <div className="memory">
        {GreeterComponent}
        {GreeterComponent}
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" onClick={() => this.handleClick} />
        <Card card="🎉" feedback="justMatched" onClick={this.handleClick} />
        <Card card="💖" feedback="justMismatched" onClick={this.handleClick} />
        <Card card="🎩" feedback="visible" onClick={this.handleClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
