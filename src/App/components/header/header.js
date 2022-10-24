import styles from "./header.module.scss";
import logo from "../../../imgs/logos/logo+frase.png";

export default function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src={logo} alt=""></img>
            </div>
            <div className={styles.loginButtons}>
                <button></button>
                <button></button>
            </div>
        </header>
    );
}