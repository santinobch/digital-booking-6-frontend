import styles from "./button.module.scss";

export default function Button(props) {
  let choosenStyle = "";

  switch (props.styleBtn) {
    case "light":
      choosenStyle = styles.light;
      break;

    case "dark":
      choosenStyle = styles.dark;
      break;

    default:
      choosenStyle = styles.light;
      break;
  }

  return (
    <button
      onClick={props.onClick}
      style={{ width: props.width }}
      className={styles.button + " " + choosenStyle}
    >
      {props.children}
    </button>
  );
}
