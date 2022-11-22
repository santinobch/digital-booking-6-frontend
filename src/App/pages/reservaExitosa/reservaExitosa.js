import Button from "../../components/button/button";
import React from "react";
import check from "./../../../imgs/icons/Atomo check.png";
import styles from "./reserva.module.scss";

export default function ReservaExitosa() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img src={check} alt="" className={styles.check} />
        <h4>Muchas Gracias</h4>
        <p>Su reserva se ha realizado con éxito</p>

        <Button styleBtn="dark" width="200px" type="submit">
          Ok
        </Button>
      </div>
    </main>
  );
}
