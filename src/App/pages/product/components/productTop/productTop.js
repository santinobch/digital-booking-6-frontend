import React from "react";
import styles from "./productTop.module.scss";
import star from "../../../../../imgs/icons/star.png";
import useWindowSize from "../../../../utils/useWindowSize";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FontAwesome from "react-icons/fa"


import Gallery from "../gallery/gallery";
import ProductCalendar from "../calendar/calendar"
import MobileCarousel from "../carousel/mobileCarousel";
import ProductHeader from "../../../../components/productHeader/productHeader";

export default function ProductTop({product, bookings}) {

    const size = useWindowSize()    

    const renderIcon = icon => React.createElement(FontAwesome[icon])

    return (
        <>
            <ProductHeader productInfo={product} />
            <section className={styles.productLocation}>

                <div className={styles.location}>
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "4px" }} />
                    <span>  {product.ciudadNombre}, {product.ciudadPais} </span>
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
                {size.width > 1280 ? <Gallery images={product.imagenes}/> : <MobileCarousel images={product.imagenes}/>}
            </section>

            <section className={styles.productInfo}>
                <h1>{product.titulo}</h1>

                <p>{product.descripcion}</p>

            </section>
            <section className={styles.productOfferings}>
                <h1> ¿Qué ofrece este lugar? </h1>
                <hr/>
                <div className={styles.offeringsContainer}>
                    {product.caracteristicas.map((i, idx) => 
                        <div key={idx} className={styles.offering}>
                            {renderIcon(i.caracteristicaIcono)}
                            <p>{i.caracteristicaNombre}</p>
                        </div>
                    )}
                </div>
            </section>
            <section>
                <ProductCalendar bookings={bookings} productInfo={product}/>
            </section>
        </>
    );
}