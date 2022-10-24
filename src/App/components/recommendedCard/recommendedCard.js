import styles from "./recommendedCard.module.scss";
import cuarto from "../../../imgs/test-images/cuarto_1.png"
import star from "../../../imgs/icons/star.png";
import heart from "../../../imgs/icons/heart.png"
import { isString } from "formik";


let text = "En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires. con 2 impresionantes piscinas, una en la terraza y otra al aire libre; habitaciones privadas";


function shorten(textInput) {
    if (isString(textInput)) {
        return textInput.slice(0, 80) + "..."
    } else {
        return "";
    }
}


export default function RecommendedCard() {
    return (
        <div className={styles.card}>

            <img className={styles.favoritoImg} src={heart} alt=""></img>

            <div className={styles.cardContent}>
                <div className={styles.cuartoImgContainer}>
                    <img src={cuarto} alt="" className={styles.cuartoImg}></img>
                </div>
                
                <div className={styles.cardInfo}>

                    <div className={styles.infoTitle}>
                        <div className={styles.titleRow}>
                            <div className={styles.column}>
                                <h3>HOTEL</h3>

                                <div className={styles.starsImg}>
                                    <img src={star} alt=""></img>
                                    <img src={star} alt=""></img>
                                    <img src={star} alt=""></img>
                                    <img src={star} alt=""></img>
                                    <img src={star} alt=""></img>
                                </div>
                            </div>
                            
                            <h2>
                                Hermitage Hotel
                            </h2>
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
                        <p>A 940m del centro - <a href="">MOSTRAR EN EL MAPA</a></p>
                    </div>

                    <p className={styles.text}>
                        {shorten(text)}
                    </p>

                    <button className={styles.seeMoreBtn}>
                        boton test
                    </button>
                </div>
            </div>
        </div>
    );
}