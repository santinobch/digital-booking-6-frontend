import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../utils/useWindowSize';

import styles from "./drawer.module.scss";
import { IconContext } from "react-icons";
import {useState, useContext, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import UserInfo from '../userInfo/userInfo';

import React from 'react';
import { useCookies } from 'react-cookie';

export default function Drawer({open, setOpen, handleLogout}) {

    const navigate = useNavigate();
    const size = useWindowSize();
    
    const [cookie] = useCookies();


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
                    {!JSON.parse(cookie.logged) ? <h1>MENÚ</h1> : <UserInfo section="drawer"/>}
                    
                </div>

                <div className={styles.drawerBottom}>
                    <div className={styles.controls}>
                        {!JSON.parse(cookie.logged) && 
                        <div className={styles.controlsTop}>
                            <div className={styles.controlBox + " " + styles.bottomBorder}>
                                <button onClick={() => navegar("register")}>Crear cuenta</button>
                            </div>
                            <div className={styles.controlBox}>
                                <button onClick={() => navegar("login")}>Iniciar sesión</button>
                            </div>
                        </div>
                        }
                        {JSON.parse(cookie.logged) && 
                            <div className={styles.controlsBottom + " " + styles.bottomBorder}>
                                <p>¿Deseas <span className={styles.logoutBtn} onClick={handleLogout}>cerrar sesión</span>?</p>
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