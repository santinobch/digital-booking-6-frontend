import styles from "./llegada.module.scss";
import Input from "../../../../components/inputs/text/input";

import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { useState, useEffect } from "react";

const getHours = () => {
  let hours = []; 
  let tt = 0; 
  
  for (let i=0;tt<24*60; i++) {
    let hh = Math.floor(tt/60); 
    let mm = (tt%60); 
    hours[i] = ("0" + (hh % 24)).slice(-2) + ':' + ("0" + mm).slice(-2);
    tt = tt + 60;
  }

  let select = hours.map(e=>({
    value: e,
    label: e
  }))

  return select
}


const options = getHours()

export default function Llegada({setArrivalTime}) {

  const handleTimeSelect = e =>{
    setArrivalTime(e.value)
  }
  
  return (
    <div>
        <h3 className={styles.title}>Tu horario de llegada</h3>
        <div className={styles.inputContainer}>
            <div className={styles.checkIn}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "4px" }} />
                <h4>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</h4>
            </div>

            <Select
                classNamePrefix="selectBooking"
                placeholder="Seleccionar hora de llegada"
                name="caracteristicas"
                defaultValue={options[10]}
                options={options}
                onChange={handleTimeSelect}               
            />
        </div>
    </div>
  );
}
