import styles from "./card.module.scss";

export default function Card({ id, url, titulo, descripcion, ...props }) {
  return (
    <div className={styles.card} key={id} {...props}>
      <img src={url} alt="" className={styles.cuartoImg}></img>

      <div className={styles.cardInfo}>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}
