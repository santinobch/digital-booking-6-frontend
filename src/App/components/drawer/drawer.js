import facebook from '../../../imgs/socials/facebook.png';
import linkedin from '../../../imgs/socials/linkedin.png';
import twitter from '../../../imgs/socials/tweet.png';
import instagram from '../../../imgs/socials/ig.png';

import styles from "./drawer.module.scss";
import { IconContext } from "react-icons";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Drawer() {
    return (

        <IconContext.Provider value={{ color: "#31363F", size:24 }}>
            <div className={styles.drawer}>
                <div className={styles.drawerTop}>
                    <p>X</p>
                    <h1>MENÚ</h1>
                </div>

                <div className={styles.drawerBottom}>
                    <div className={styles.controls}>
                        <div className={styles.controlsTop}>
                            <div className={styles.controlBox + " " + styles.bottomBorder}>
                                <a href="">Crear cuenta</a>
                            </div>
                            <div className={styles.controlBox}>
                                <a href="">Iniciar sesión</a>
                            </div>
                        </div>
                        <div className={styles.controlsBottom}>
                            <p>¿Deseas <a href="">cerrar sesión</a>?</p>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <a id="facebook" href=""><FaFacebook/></a>
                        <a id="linkedin" href=""><FaLinkedinIn/></a>
                        <a id="twitter" href=""><FaTwitter/></a>
                        <a id="instagram" href=""><FaInstagram/></a>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
        
    );
}