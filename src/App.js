import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import Greeter from "./Greeter";
import GuessCount from "./GuessCount";
import Columns from "./Columns";
import Section from "./Section";

class App extends Component {
  handleClick(Card) {
    console.log("Card click");
  }

  render() {
    const GreeterComponent = <Greeter whom="Rached" />;
    const ColumnLeft = <div>Left Column</div>;
    let won = new Date().getSeconds() % 2 === 0;
    return (
      <div>
        {won && (
          <Columns
            left={ColumnLeft}
            center="center colonne affichée en seconde module 2"
            right={
              <Section text="Right column customized with component"></Section>
            }
          ></Columns>
        )}
        {won ? (
          <Columns
            left={ColumnLeft}
            center="Colonne tjs affichée en cas module 2"
            right={
              <Section text="Right column customized with component"></Section>
            }
          ></Columns>
        ) : (
          <Columns
            left={ColumnLeft}
            center="Colonne tjs affichée PAS en cas module 2"
            right={
              <Section text="Right column customized with component"></Section>
            }
          ></Columns>
        )}
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
