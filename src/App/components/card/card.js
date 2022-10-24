import styles from "./card.module.scss";
import cuarto from "../../../imgs/test-images/cuarto_1.png"

export default function Card() {
    return (
        <div className={styles.card}>
            <img src={cuarto} alt="" className={styles.cuartoImg}></img>

            <div className={styles.cardInfo}>
                <h2>Cuarto 1</h2>
                <p>Subtexto</p>
            </div>
        </div>
    );
}