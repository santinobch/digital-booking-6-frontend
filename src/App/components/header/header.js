import { Link, useLocation, useNavigate } from "react-router-dom";

import React, {useState} from "react";
import logo from "../../../imgs/logos/logo+frase.png";
import styles from "./header.module.scss";
import Button from "../button/button";
import Drawer from "../drawer/drawer";
import {GiHamburgerMenu} from "react-icons/gi"

import useWindowSize from "../../hooks/useWindowSize";

export default function Header() {
    const size = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false)
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/registrarse";

  const toggleDrawer = () => {
    drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true)
  }

  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link to={"/"}>
                <img src={logo} alt="" />
            </Link>
        </div>
        <div className={styles.loginButtons}>
            {!isLoginPage && size.width > 768 && (
                <Button onClick={() => navigate("/login")}> Iniciar sesion</Button>
            )}
            {!isRegisterPage && size.width > 768 && (
                <Button  onClick={() => navigate("/registrarse")}> Crear Cuenta </Button>
            )}
            {size.width <= 768 ? <GiHamburgerMenu size={30} className={styles.drawerBtn} onClick={() => setDrawerOpen(true)}/> : null}
        </div>

        <Drawer open={drawerOpen} setOpen={toggleDrawer}></Drawer>
    </header>
  );
}

