import styles from "./card.module.scss";

export default function Card({ id, img, title, description, ...props }) {
  return (
    <div className={styles.card} key={id} {...props}>
      <img src={img} alt="" className={styles.cuartoImg}></img>

      <div className={styles.cardInfo}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
