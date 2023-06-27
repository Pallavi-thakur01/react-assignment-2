import React from "react";
// import { Button} from "antd";
// import "../App.css";
import PropTypes from 'prop-types';
import 'C:/Users/Ditsdev/Desktop/react-assignment-2/myapp/node_modules/bootstrap/dist/css/bootstrap.min.css';


const Buttons = ({ text, onClick, disabled, ...rest }) => {
    return (
      <button  onClick={onClick} disabled={disabled} {...rest}>
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