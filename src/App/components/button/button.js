import styles from "./button.module.scss";


export default function Button(props) {
    console.log(props)

    let choosenStyle = "";

    switch (props.style) {
        case "ligth":
            choosenStyle = styles.light;
            break;

        case "dark":
            choosenStyle = styles.dark;
            break;
    
        default:
            console.warn("Invalid style")
            choosenStyle = styles.light;
            break;
    }

    return (
        <button 
        onClick={props.onClick}
        style={{width: props.width}} 
        className={styles.button + " " +  choosenStyle}>
            {props.children}
        </button>
    );
}