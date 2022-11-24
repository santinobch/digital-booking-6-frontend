import React from "react";
import styles from "./productTop.module.scss";
import star from "../../../../../imgs/icons/star.png";
import useWindowSize from "../../../../hooks/useWindowSize";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FontAwesome from "react-icons/fa"

import Galeria from "../galeria/galeria";
import Calendario from "../calendario/calendar"
import MobileCarousel from "../carousel/mobileCarousel";
import ProductHeader from "../../../../components/productHeader/productHeader";

export default function ProductTop({producto}) {
    const size = useWindowSize()    

    const renderIcon = icon => React.createElement(FontAwesome[icon])

    return (
        <>
            <ProductHeader productInfo={producto} />
            <section className={styles.productLocation}>

                <div className={styles.location}>
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "4px" }} />
                    <span>  {producto.ciudad.nombre}, {producto.ciudad.pais} </span>
                </div>

                <div className={styles.calificacion}>
                    <div className={styles.textoStars}>
                        <p>Muy bueno</p>
                        <div className={styles.starsImg}>
                            <img src={star} alt=""></img>
                            <img src={star} alt=""></img>
                            <img src={star} alt=""></img>
                            <img src={star} alt=""></img>
                            <img src={star} alt=""></img>
                        </div>
                    </div>

                    <div className={styles.puntaje}>
                        <span>8</span>
                    </div>                
                </div>
                
            </section>

            <section className={styles.productGallery}>
                {size.width > 1280 ? <Galeria images={producto.imagenes}/> : <MobileCarousel images={producto.imagenes}/>}
            </section>

            <section className={styles.productInfo}>
                <h1>{producto.titulo}</h1>

                <p>{producto.descripcion}</p>

            </section>
            <section className={styles.productOfferings}>
                <h1> ¿Qué ofrece este lugar? </h1>
                <hr/>
                <div className={styles.offeringsContainer}>
                    {producto.caracteristicas.map((i, idx) => 
                        <div key={idx} className={styles.offering}>
                            {renderIcon(i.icono)}
                            <p>{i.nombre}</p>
                        </div>
                    )}
                </div>
            </section>
            <section>
                <Calendario productInfo={producto}/>
            </section>
        </>
    );
}