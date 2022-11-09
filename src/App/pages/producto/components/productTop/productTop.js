import styles from "./productTop.module.scss";
import star from "../../../../../imgs/icons/star.png";
import { FaRegEyeSlash } from "react-icons/fa";
import useWindowSize from "../../../../hooks/useWindowSize";

import Galeria from "../galeria/galeria";
import ImgCarousel from "../carousel/carousel";

const images = [
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1552566626-2d907dab0dff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBiYXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
]

export default function ProductTop() {
    const size = useWindowSize()

    return (
        <>
            <section className={styles.productName}>
                <div>
                    <h2>Hotel</h2>
                    <h1>Hermitage Hotel</h1>
                </div>

            </section>
            <section className={styles.productLocation}>

                <div className={styles.location}>
                    <p>
                        Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina a 940 m del centro 
                    </p>
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
                {size.width > 1280 ? <Galeria/> : <ImgCarousel images={images}/>}
            </section>

            <section className={styles.productInfo}>
                <h1>Alójate en el corazón de Buenos Aires</h1>

                <p>
                    Está situado a solo unas calles de la avenida Alvear, de la avenida Quintana, del parque San Martín y del distrito de Recoleta. En las inmediaciones también hay varios lugares de interés, como la calle Florida, el centro comercial Galerías Pacífico, la zona de Puerto Madero, la plaza de Mayo y el palacio Municipal.
                </p>
                
                <p>
                    Nuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes.
                </p>
                
                <p>
                    El Hotel es un hotel sofisticado de 4 estrellas que goza de una ubicación tranquila, a poca distancia de prestigiosas galerías de arte, teatros, museos y zonas comerciales. Además, hay WiFi gratuita. El establecimiento sirve un desayuno variado de 07:00 a 10:30.
                </p>

            </section>
            <section className={styles.productOfferings}>
                <h1>
                    ¿Qué ofrece este lugar?
                </h1>

                <hr/>

                <div className={styles.offeringsContainer}>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#F0572D", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#F0572D", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#F0572D", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#F0572D", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>

                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#F0572D", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#F0572D", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#F0572D", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#F0572D", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>

                </div>
                
            </section>
        </>
    );
}