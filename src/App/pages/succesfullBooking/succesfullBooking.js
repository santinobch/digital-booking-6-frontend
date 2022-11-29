import Button from "../../components/button/button";
import React from "react";
import check from "./../../../imgs/icons/Atomo check.png";
import styles from "./succesfullBooking.module.scss";
import { useNavigate } from 'react-router-dom';

export default function SuccesfullBooking() {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img src={check} alt="" className={styles.check} />
        <h4>Muchas Gracias</h4>
        <p>Su booking se ha realizado con éxito</p>

        <Button onClick={() => navigate('/home')} styleBtn="dark" width="200px" type="submit">
          Ok
        </Button>
      </div>
    </main>
  );
}
