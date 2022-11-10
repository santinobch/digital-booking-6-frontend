import styles from "./input.module.scss";
import { FaRegEyeSlash } from "react-icons/fa";

import {useEffect, useState} from 'react'

import { v4 as uuid } from 'uuid';


export default function Input(props) {

    const id = uuid();

    let showPassButton = "none";
    let showSubLabel_ = "none";
    const [showSubLabel, setSubLabelVisibility] = useState(showSubLabel_);

    let  toggle_ = false;
    const [toggleState, setToggle] = useState(toggle_);

    let  value_ = false;
    const [valueState, setValue] = useState(value_);

    const [compareState, setCompare] = useState("");

    if (props.type === "password") {
        showPassButton = "block";
    }

    function keyUp() {
        if (!document.getElementById(id).checkValidity()) {
            setSubLabelVisibility("block");
        } else {
            setSubLabelVisibility("none");
        }

        //Esto es lo que deberia andar, pero el string de compare lo devuelve de una manera muy rara
        if (props.compare !== undefined && props.value === props.compare) {
            console.log("Passwords match")
        } else {
            console.log("compare: " + props.compare);
            console.log("Passwords dont match")
        }
    }
    
    const handleChange = event => {
        if (props.handlePass !== undefined) {
            props.handlePass(event.target.value);
        }
    };


    return (
        <div className={styles.inputContainer} style={{width: props.width}}>
            <label 
                className={styles.label}
                htmlFor={props.name}>
                
                {props.label}
            </label>

            <input 
                id={id}
                className={styles.input}
                style={{width: props.width}}

                src={props.src}
                
                type={(props.type === "password") ? (toggleState ? "text" : "password") : props.type}

                name={props.name}
                onChange={handleChange}
                value={props.value}
                placeholder={props.placeholder}

                disabled={props.disabled}
                checked={props.checked}
                
                required={props.required}
                pattern={props.pattern}
                onKeyUp={() => keyUp()}>

                {props.children}
            </input>


            <label 
                className={styles.subLabel}
                htmlFor={props.name}
                style={{display: showSubLabel}}>

                {props.subLabel}
            </label>

            <button type="button" style={{display: showPassButton}} className={styles.showPassButton} onClick={() => setToggle(!toggleState)}>
                <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
            </button>
        </div>
    );
}