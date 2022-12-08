import * as FontAwesome from "react-icons/fa";

import Boton from "../button/button";
import React from "react";
import heart from "../../../imgs/icons/heart.png";
import star from "../../../imgs/icons/star.png";
import styles from "./recommendedCard.module.scss";
import { useNavigate } from "react-router-dom";

function shorten(textInput) {
  return textInput.slice(0, 78) + "...";
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
  booking,
  checkIn,
  checkOut
}) {
  const navigate = useNavigate();

  const renderIcon = (icon) => React.createElement(FontAwesome[icon]);

  const dateFormat = (value) =>{
    const [year, month, day] = value.split('-');

    return `${day}/${month}/${year}`;
  }

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

          {!booking ? (
          <>
            <div className={styles.caracteristicas}>
              {caracteristicas.map((i) => (
                <span>{renderIcon(i.caracteristicaIcono)}</span>
                ))}
            </div>
            <p className={styles.text}>{shorten(descripcion)}</p>
          </>
          ) : 
          <div>
            <div className={styles.bookingDates}>
              <span className={styles.dateLabel}>Check In: </span>
              <span>{dateFormat(checkIn)}</span>
            </div>
            <div className={styles.bookingDates}>
              <span className={styles.dateLabel}>Check Out:  </span>
              <span>{dateFormat(checkOut)}</span>
            </div>
          </div>
          }

          

          <Boton styleBtn="dark" onClick={() => navigate(`/product/${idProducto}`)}>
            Ver más
          </Boton>
        </div>
      </div>
    </div>
  );
}
