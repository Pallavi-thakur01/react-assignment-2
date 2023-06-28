import React from "react";
import PropTypes from "prop-types";

const Buttons = ({ text, onClick, disabled, ...rest }) => {
  return (
    <button onClick={onClick} disabled={disabled} {...rest}>
      {text}
    </button>
  );
};

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Buttons;
