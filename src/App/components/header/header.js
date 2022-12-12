import { Link, useLocation, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import logo from "../../../imgs/logos/logo+frase.png";
import logoSolo from "../../../imgs/logos/logo_1.png";
import UserInfo from "../userInfo/userInfo";
import styles from "./header.module.scss";
import Button from "../button/button";
import Drawer from "../drawer/drawer";
import {GiHamburgerMenu} from "react-icons/gi"
import useWindowSize from "../../utils/useWindowSize";

import { useCookies } from "react-cookie";

import parseBool from "../../utils/parseBool";

export default function Header() {
    const size = useWindowSize();
    const navigate = useNavigate();
    const location = useLocation();

    const [drawerOpen, setDrawerOpen] = useState(false)
    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";

    const toggleDrawer = () => {
        drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true)
    }

    const [cookie, setCookie, removeCookie] = useCookies();

    const handleLogout =() =>{
        removeCookie('auth');
        removeCookie('user');
        setCookie('logged', false);
        setDrawerOpen(false)
        navigate('/home');
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to={"/home"}>
                    {size.width > 768 ? <img src={logo} alt="" /> : <img src={logoSolo} alt="" />}
                </Link>
            </div>
            <div className={styles.loginButtons}>
                {!isLoginPage && !parseBool(cookie.logged) && size.width > 768 && (
                    <Button width="200px"  onClick={() => navigate("/login")}> Iniciar sesion</Button>
                )}
                {!isRegisterPage && !parseBool(cookie.logged) && size.width > 768 && (
                    <Button width="200px" onClick={() => navigate("/register")}> Crear Cuenta </Button>
                )}
                {parseBool(cookie.logged) && size.width > 768 && (
                    <UserInfo handleLogout={handleLogout}/>
                )}
                {size.width <= 768 ? <GiHamburgerMenu size={30} className={styles.drawerBtn} onClick={() => setDrawerOpen(true)}/> : null}
            </div>

            <Drawer handleLogout={handleLogout} open={drawerOpen} setOpen={toggleDrawer}></Drawer>
        </header>
    );
}

