import styles from "./card.module.scss";
import cuarto from "../../../imgs/test-images/cuarto_1.png"

export default function Card({id, img, title, description}) {
    return (
        <div className={styles.card} key={id}>
            <img src={img} alt="" className={styles.cuartoImg}></img>

            <div className={styles.cardInfo}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}