import React from "react";
import PropTypes from "prop-types";

const Card = ({ card, feedback, onClick }) => {
  return (
    <div
      className="card"
      onClick={onClick === undefined ? () => {} : onClick()}
    >
      H
    </div>
  );
};

Card.propTypes = {
  car: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf([
    "hidden",
    "visible",
    "justMatched",
    "justMismatched"
  ]).isRequired,
  onClick: PropTypes.func
};

Card.defaultProps = {
  car: "🐱",
  feedback: "visible"
};

export default Card;
