import styles from "./input.module.scss";
import { FaRegEyeSlash } from "react-icons/fa";


export default function Input(props) {

    let showPassButton = "none";

    if (props.type == "password") {
        showPassButton = "block";
    }

    return (
        <div className={styles.inputContainer} style={{width: props.width}}>
            <label 
            className={styles.label}
            for={props.name}>
                {props.label}
            </label>

            <input 
            className={styles.input}
            style={{width: props.width}}

            checked={props.checked}
            disabled={props.disabled}
            name={props.name}
            src={props.src}
            type={props.type}
            value={props.value}
            required={props.required}>

                {props.children}
            </input>

            <label 
            className={styles.sublabel}
            for={props.name}>
                {props.sublabel}
            </label>

            <button style={{display: showPassButton}} className={styles.showPassButton}>
                <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
            </button>
        </div>
    );
}