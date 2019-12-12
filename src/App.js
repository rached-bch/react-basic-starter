import React from "react";
import "./App.css";

function CoolComponent(props) {
  console.log(props);
  const message1 = props.message1;
  const message2 = props.message2;
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
