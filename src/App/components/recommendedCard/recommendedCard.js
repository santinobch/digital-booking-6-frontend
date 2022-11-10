import styles from "./recommendedCard.module.scss";
import star from "../../../imgs/icons/star.png";
import heart from "../../../imgs/icons/heart.png"
import Boton from "../button/button"



let text = "En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires. con 2 impresionantes piscinas, una en la terraza y otra al aire libre; habitaciones privadas";


function shorten(textInput) {
    return textInput.slice(0, 80) + "..."
}


export default function RecommendedCard({image, category, title, location, description}) {
    return (
        <div className={styles.card}>

            <img className={styles.favoritoImg} src={heart} alt=""></img>

            <div className={styles.cardContent}>
                <div className={styles.cuartoImgContainer}>
                    <img src={image} alt="" className={styles.cuartoImg}></img>
                </div>
                
                <div className={styles.cardInfo}>

                    <div className={styles.infoTitle}>
                        <div className={styles.titleRow}>
                            <div className={styles.column}>
                                <h3>{category.toUpperCase()}</h3>

                                <div className={styles.starsImg}>
                                    <img src={star} alt=""></img>
                                    <img src={star} alt=""></img>
                                    <img src={star} alt=""></img>
                                    <img src={star} alt=""></img>
                                    <img src={star} alt=""></img>
                                </div>
                            </div>
                            
                            <h2>{title}</h2>
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
                        <p>{location}</p>
                    </div>

                    <p className={styles.text}>
                        {shorten(description)}
                    </p>

                    <Boton style="dark">Ver Detalle</Boton>
                </div>
            </div>
        </div>
    );
}