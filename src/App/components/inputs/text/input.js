import { FaRegEyeSlash } from "react-icons/fa";
import styles from "./input.module.scss";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Input(props) {
  const id = uuid();
  let showPassButton = "none";
  let showSubLabel_ = "none";
  const [showSubLabel, setSubLabelVisibility] = useState(showSubLabel_);
  const [invalid, setInvalid] = useState(false);

  let toggle_ = false;
  const [toggleState, setToggle] = useState(toggle_);

  if (props.type === "password") {
    showPassButton = "block";
  }

  function keyUp(event) {
    if (!document.getElementById(id).checkValidity()) {
      setSubLabelVisibility("block");
    } else {
      setSubLabelVisibility("none");
    }

    props?.setHasError?.(false);

    if (props.name === "password_confirm") {
      let confirmValue = event.target.value;
      if (
        props.comparePass !== undefined &&
        props.comparePass === confirmValue
      ) {
        setSubLabelVisibility("none");
        setInvalid(false);
      } else {
        setSubLabelVisibility("block");
        setInvalid(true);
      }
    }
  }
  const handleChange = (event) => {
    if (props.handlePass !== undefined) {
      props.handlePass(event.target.value);
    }
  };
  return (
    <div className={styles.inputContainer} style={{ width: props.width }}>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>

      <input
        id={id}
        className={`${styles.input} ${invalid ? styles.invalidInput : null}`}
        style={{ width: props.width }}
        src={props.src}
        type={
          props.type === "password"
            ? toggleState
              ? "text"
              : "password"
            : props.type
        }
        onBlur={props.onBlur}
        name={props.name}
        onChange={handleChange}
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        checked={props.checked}
        required={props.required}
        pattern={props.pattern}
        onKeyUp={(event) =>
          props.onKeyUp ? props.onKeyUp(event) : keyUp(event)
        }
      >
        {props.children}
      </input>

      <label
        className={styles.subLabel}
        htmlFor={props.name}
        style={{ display: showSubLabel }}
      >
        {props.subLabel}
      </label>

      <button
        type="button"
        style={{ display: showPassButton }}
        className={styles.showPassButton}
        onClick={() => setToggle(!toggleState)}
      >
        <FaRegEyeSlash style={{ color: "#31363F", fontSize: "24px" }} />
      </button>
    </div>
  );
}
