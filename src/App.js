import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import Greeter from "./Greeter";
import GuessCount from "./GuessCount";
import Columns from "./Columns";

class App extends Component {
  handleClick(Card) {
    console.log("Card click");
  }

  render() {
    const GreeterComponent = <Greeter whom="Rached" />;
    const ColumnLeft = <div>Left Column</div>;
    const ColumnCenter = <div>Center Column</div>;
    const ColumnRight = <div>Right Column</div>;
    return (
      <div>
        <Columns left={ColumnLeft} center="center" right="right"></Columns>
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
