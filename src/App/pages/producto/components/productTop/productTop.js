import styles from "./productTop.module.scss";
import star from "../../../../../imgs/icons/star.png";

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

                <div>
                    <p>
                        Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina a 940 m del centro 
                    </p>
                </div>

                <div>
                    <p>Muy bueno</p>

                    <div className={styles.starsImg}>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                        <img src={star} alt=""></img>
                    </div>

                    <div className={styles.calificacion}>
                        <span>8</span>
                    </div>
                </div>
                
            </section>
            <section className={styles.productGallery}>
                
            </section>
            <section className={styles.productInfo}>
                <h1>Alójate en el corazón de Buenos Aires</h1>

                <p>Está situado a solo unas calles de la avenida Alvear, de la avenida Quintana, del parque San Martín y del distrito de Recoleta. En las inmediaciones también hay varios lugares de interés, como la calle Florida, el centro comercial Galerías Pacífico, la zona de Puerto Madero, la plaza de Mayo y el palacio Municipal.</p>
                
            </section>
            <section className={styles.productOfferings}>
                
            </section>
        </>
    );
}