import "./input.css";

import verPassword from "../../../imgs/icons/hidden.png";

const Input = (props) => {
  const { isPassword, ...extra } = props;

  return (
    <div className="input-container">
      {isPassword && (
        <img
          src={verPassword}
          alt=""
          className="verPassword"
          width={"24px"}
          height={"18px"}
        />
      )}
      <input className="input" {...extra} />
    </div>
  );
};

export default Input;
