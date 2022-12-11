import { FaRegEyeSlash } from "react-icons/fa";
import styles from "./input.module.scss";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Input(props) {
    const id = uuid();
    let showPassButton = "none";
    let showSubLabel_ = "block";
    const [showSubLabel, setSubLabelVisibility] = useState(showSubLabel_);
    const [invalid, setInvalid] = useState(false);

    const [toggleState, setToggle] = useState(false);

    if (props.type === "password") {
        showPassButton = "block";
    }

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
                props.type === "password" ? ( toggleState ? "text" : "password") : props.type
            }
            onBlur={props.onBlur}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            checked={props.checked}
            required={props.required}
            pattern={props.pattern}
        >
            {props.children}
        </input>

        <>
        <label
            className={styles.subLabel}
            htmlFor={props.name}
            >
            {props.subLabel}
        </label>
        </>

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
