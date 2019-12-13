import React from "react";

import "./Card.css";

const HIDDEN_SYMBOL = "❓";

const Card = ({ card, feedback, onClick }) => {
  const a = "Hello world";
  return (
    <div className="card" onClick={onClick(Card)}>
      H
    </div>
  );
};

export default Card;
