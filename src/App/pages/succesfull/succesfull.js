import { useNavigate, useSearchParams } from "react-router-dom";

import Button from "../../components/button/button";
import React from "react";
import check from "./../../../imgs/icons/Atomo check.png";
import styles from "./succesfull.module.scss";

const defaultCase = {
  title: "Muchas Gracias",
  text: "Su reserva se ha realizado con éxito",
  redirect: "/home",
  buttonText: "Ok",
};

export default function Succesfull() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const page = params.get("page");

  let values = defaultCase;

  switch (page) {
    case "create-product":
      values = {
        ...defaultCase,
        text: "Tu propiedad se ha creado con éxito.",
        buttonText: "Volver",
      };
      break;
      break;

    case "reserva-exitosa":
      values = defaultCase;
      break;
    default:
      break;
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img src={check} alt="" className={styles.check} />
        <h4>{values.title}</h4>
        <p>{values.text}</p>

        <Button
          onClick={() => navigate(values.redirect)}
          styleBtn="dark"
          width="200px"
          type="submit"
        >
          {values.buttonText}
        </Button>
      </div>
    </main>
  );
}
