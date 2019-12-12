import React from "react";
import logo from "./logo.svg";
import "./App.css";

function CoolComponent({ message1, message2 }) {
  const message3 = `Message concaténé : ${message1} et ${message2}`;
  return (
    <p>
      <span>{message1}</span>
      <br />
      <span>{message2}</span>
      <br />
      <span>Simulation de concaténation {message3}</span>
    </p>
  );
}

function App() {
  return (
    <div className="App">
      <CoolComponent message1="Hello" message2="Bonjour" />
    </div>
  );
}
export default App;
