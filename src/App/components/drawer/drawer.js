import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';

import styles from "./drawer.module.scss";
import { IconContext } from "react-icons";
import {useState, useContext, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import UserInfo from '../userInfo/userInfo';

import React from 'react';
import { getStoreItem } from '../../storage/storage';

export default function Drawer({open, setOpen}) {

    const navigate = useNavigate();
    const size = useWindowSize();

    const [usuario, setUsuario] = useState(getStoreItem('usaurio'));
    const [usuarioLogeado, setUsuarioLogeado] = useState(false);
    
    useEffect(() => {
        if(usuario !== undefined){
            setUsuarioLogeado(true)
        }
    })

    const navegar = sitio => {
        let path = "/"+sitio
        navigate(path)
        setOpen(true)
    }

    if(size.width > 768){
        return(null);
    }

    return (
        <IconContext.Provider value={{ color: "#DFE4EA", size:24 }}>
            <div className={open && size.width < 768 ? styles.drawer : styles.hiddenDrawer} id="drawer">
                <div className={styles.drawerTop}>
                    <button className={styles.closeBtn} onClick={() => setOpen(true)}>X</button>
                    {!usuarioLogeado ? <h1>MENÚ</h1> : <UserInfo section="drawer"/>}
                    
                </div>

                <div className={styles.drawerBottom}>
                    <div className={styles.controls}>
                        {!usuarioLogeado && 
                        <div className={styles.controlsTop}>
                            <div className={styles.controlBox + " " + styles.bottomBorder}>
                                <button onClick={() => navegar("registrarse")}>Crear cuenta</button>
                            </div>
                            <div className={styles.controlBox}>
                                <button onClick={() => navegar("login")}>Iniciar sesión</button>
                            </div>
                        </div>
                        }
                        {usuarioLogeado && 
                            <div className={styles.controlsBottom + " " + styles.bottomBorder}>
                                <p>¿Deseas <a href="">cerrar sesión</a>?</p>
                            </div>
                        }
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