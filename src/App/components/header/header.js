import { Link, useLocation, useNavigate } from "react-router-dom";

import React, {useState, useContext, useEffect } from "react";
import logo from "../../../imgs/logos/logo+frase.png";
import logoSolo from "../../../imgs/logos/logo_1.png";
import UserInfo from "../userInfo/userInfo";
import styles from "./header.module.scss";
import Button from "../button/button";
import Drawer from "../drawer/drawer";
import {GiHamburgerMenu} from "react-icons/gi"
import useWindowSize from "../../hooks/useWindowSize";
import { getStoreItem, removeItem } from "../../storage/storage";

export default function Header() {
    const size = useWindowSize();
    const navigate = useNavigate();
    const location = useLocation();

    const [usuario, setUsuario] = useState(getStoreItem('usuario'))
    const [usuarioLogeado, setUsuarioLogeado] = useState(false)


    const [drawerOpen, setDrawerOpen] = useState(false)
    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/registrarse";

    const toggleDrawer = () => {
        drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true)
    }

    useEffect(() => {
        if(usuario !== undefined && usuario !== null){
            setUsuarioLogeado(true)
        }
    }, [usuario])

    const handleLogout =() =>{
        console.log("cerrando sesión")
        removeItem('auth');
        removeItem('usuario');
        setUsuario(undefined);
        setUsuarioLogeado(false);
        console.log(usuario);
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to={"/home"}>
                    {size.width > 768 ? <img src={logo} alt="" /> : <img src={logoSolo} alt="" />}
                </Link>
            </div>
            <div className={styles.loginButtons}>
                {!isLoginPage && !usuarioLogeado && size.width > 768 && (
                    <Button width="200px"  onClick={() => navigate("/login")}> Iniciar sesion</Button>
                )}
                {!isRegisterPage && !usuarioLogeado && size.width > 768 && (
                    <Button width="200px" onClick={() => navigate("/registrarse")}> Crear Cuenta </Button>
                )}
                {usuarioLogeado && size.width > 768 && (
                    <UserInfo handleLogout={handleLogout}/>
                )}
                {size.width <= 768 ? <GiHamburgerMenu size={30} className={styles.drawerBtn} onClick={() => setDrawerOpen(true)}/> : null}
            </div>

            <Drawer handleLogout={handleLogout} open={drawerOpen} setOpen={toggleDrawer}></Drawer>
        </header>
    );
}

