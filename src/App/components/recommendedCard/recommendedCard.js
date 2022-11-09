import * as FontAwesome from "react-icons/fa";

import Boton from "../button/button";
import React from "react";
import heart from "../../../imgs/icons/heart.png";
import { isString } from "formik";
import star from "../../../imgs/icons/star.png";
import styles from "./recommendedCard.module.scss";
import { useNavigate } from "react-router-dom";

function shorten(textInput) {
  if (isString(textInput)) {
    return textInput.slice(0, 80) + "...";
  } else {
    return "";
  }
}

export default function RecommendedCard({
  id,
  imagenes,
  categoria,
  titulo,
  ciudad,
  descripcion,
  caracteristicas,
}) {
  const navigate = useNavigate();

  const renderIcon = (icon) => React.createElement(FontAwesome[icon]);

  return (
    <div className={styles.card}>
      <img className={styles.favoritoImg} src={heart} alt=""></img>

      <div className={styles.cardContent}>
        <div className={styles.cuartoImgContainer}>
          <img src={imagenes[0].url} alt="" className={styles.cuartoImg}></img>
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.infoTitle}>
            <div className={styles.titleRow}>
              <div className={styles.column}>
                <h3>{categoria.titulo.toUpperCase()}</h3>

                <div className={styles.starsImg}>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                </div>
              </div>

              <h2>{titulo}</h2>
            </div>

            <div className={styles.titleRow + " " + styles.textRight}>
              <div className={styles.calificacion}>
                <span>8</span>
              </div>

              <p>Muy bueno</p>
            </div>
          </div>

          <div className={styles.ubicacion}>
            {/* <img src="" alt="">ubicacion</img> */}
            <p>
              {ciudad.nombre}, {ciudad.pais}
            </p>
          </div>

          <div className={styles.caracteristicas}>
            {caracteristicas.map((i) => (
              <span key={i.icono}>{renderIcon(i.icono)}</span>
            ))}
          </div>

          <p className={styles.text}>{shorten(descripcion)}</p>

          <Boton style="dark" onClick={() => navigate(`/producto/${id}`)}>
            Ver más
          </Boton>
        </div>
      </div>
    </div>
  );
}
