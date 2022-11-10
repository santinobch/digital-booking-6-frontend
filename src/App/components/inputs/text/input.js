import styles from "./input.module.scss";
import { FaRegEyeSlash } from "react-icons/fa";

import {useState} from 'react'


export default function Input(props) {

    let showPassButton = "none";

    if (props.type === "password") {
        showPassButton = "block";
    }


    let  toggle = false;
    const [toggleState, setToggle] = useState(toggle);

    function checkValid() {
        
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

                src={props.src}
                
                type={(props.type === "password") ? (toggleState ? "text" : "password") : props.type}

                name={props.name}
                value={props.value}
                placeholder={props.placeholder}

                disabled={props.disabled}
                checked={props.checked}
                
                required={props.required}
                pattern={props.pattern}
                onKeyDown={() => checkValid()}>

                {props.children}
            </input>


            <label 
                className={styles.subLabel}
                for={props.name}>

                {props.subLabel}
            </label>

            <button type="button" style={{display: showPassButton}} className={styles.showPassButton} onClick={() => setToggle(!toggleState)}>
                <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
            </button>
        </div>
    );
}