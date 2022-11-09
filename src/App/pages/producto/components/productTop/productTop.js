import styles from "./productTop.module.scss";
import star from "../../../../../imgs/icons/star.png";
import { FaRegEyeSlash } from "react-icons/fa";

export default function ProductTop() {
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
                        <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>

                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>
                    <div className={styles.offering}>
                        <FaRegEyeSlash style={{ color: "#31363F", fontSize:"24px" }}/>
                        <p>Test</p>
                    </div>

                </div>
                
            </section>
        </>
    );
}