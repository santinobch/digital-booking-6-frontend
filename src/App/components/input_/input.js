import "./input.css";

import cerraPassword from "../../../imgs/icons/mostrar.png";
import { useState } from "react";
import verPassword from "../../../imgs/icons/hidden.png";

const Input = (props) => {
  const { isPassword, ...extra } = props;
  const [shown, setShown] = useState(false);
  const cambiar = () => {
    console.log("un click");
    setShown(!shown);
  };

  return (
    <div className="input-container">
      {isPassword && (
        <span onClick={cambiar}>
          <img
            src={shown ? cerraPassword : verPassword}
            alt=""
            className="verPassword"
            width={"24px"}
            height={"18px"}
          />
        </span>
      )}
      <input className="input" {...extra} />
    </div>
  );
};

export default Input;
