import { Link, useLocation, useNavigate } from "react-router-dom";

import React from "react";
import logo from "../../../imgs/logos/logo+frase.png";
import styles from "./header.module.scss";
import Button from "../button/button";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/registrarse";

  return (
    <header>
        <div className={styles.logo}>
            <Link to={"/"}>
                <img src={logo} alt="" />
            </Link>
        </div>
        <div className={styles.loginButtons}>
            {!isLoginPage && (
                <Button 
                    onClick={() => navigate("/login")}>
                    Iniciar sesion
                </Button>
            )}
            {!isRegisterPage && (
                <Button 
                    onClick={() => navigate("/registrarse")}>
                    Crear Cuenta
                </Button>
            )}
        </div>
    </header>
  );
}

