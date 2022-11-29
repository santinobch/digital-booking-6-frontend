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
  idProducto,
  imagenes,
  tituloCategoria,
  titulo,
  ciudadNombre,
  ciudadPais,
  descripcion,
  caracteristicas,
}) {
  const navigate = useNavigate();

  const renderIcon = (icon) => React.createElement(FontAwesome[icon]);

  console.log(imagenes)

  return (
    <div className={styles.card}>
      
      <img className={styles.favoritoImg} src={heart} alt=""></img>

      <div className={styles.cardContent}>
        <div className={styles.cuartoImgContainer}>
          <img src={imagenes[0].imagenUrl} alt="" className={styles.cuartoImg}></img>
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.infoTitle}>
            <div className={styles.titleRow}>
              <div className={styles.column}>
                <h3>{tituloCategoria.toUpperCase()}</h3>

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
            <p>
              {ciudadNombre}, {ciudadPais}
            </p>
          </div>

          <div className={styles.caracteristicas}>
            {caracteristicas.map((i) => (
              <span>{renderIcon(i.caracteristicaIcono)}</span>
            ))}
          </div>

          <p className={styles.text}>{shorten(descripcion)}</p>

          <Boton styleBtn="dark" onClick={() => navigate(`/product/${idProducto}`)}>
            Ver más
          </Boton>
        </div>
      </div>
    </div>
  );
}
