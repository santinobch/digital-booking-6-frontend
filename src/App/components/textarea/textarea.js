import styles from "./textarea.module.scss";
import { FaRegEyeSlash } from "react-icons/fa";

import {useState} from 'react'

import { v4 as uuid } from 'uuid';


export default function Textarea(props) {

    const id = uuid();

    let showSubLabel_ = "none";
    const [showSubLabel, setSubLabelVisibility] = useState(showSubLabel_);
    const [invalid, setInvalid] = useState()

    function keyUp(event) {
        if (!document.getElementById(id).value.length == 0) {
            setSubLabelVisibility("block");
            setInvalid(true);
        } else {
            setSubLabelVisibility("none");
            setInvalid(false);
        }
    }

    return (
        <div className={styles.textareaContainer} style={{width: props.width}}>
            <label 
                className= {styles.label}
                htmlFor={props.name}>
                
                {props.label}
            </label>

            <textarea 
                id={id}
                className={`${styles.textarea}`}
                style={{width: props.width}}

                name={props.name}
                value={props.value}
                placeholder={props.placeholder}

                disabled={props.disabled}
                required={props.required}
                onKeyUp={(event) => keyUp(event)}>

                {props.children}
            </textarea>


            <label 
                className={styles.subLabel}
                htmlFor={props.name}
                style={{display: showSubLabel}}>

                {props.subLabel}
            </label>
        </div>
    );
}