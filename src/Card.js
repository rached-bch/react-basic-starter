import React from "react";

const Card = ({ card, feedback, onClick }) => {
  return (
    <div className="card" onClick={onClick === false ? () => {} : onClick()}>
      H
    </div>
  );
};
Card.defaultProps = {
  car: "🐱",
  feedback: "visible",
  onClick: false
};

export default Card;
