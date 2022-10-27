import { Link, useLocation, useNavigate } from "react-router-dom";

import React from "react";
import logo from "../../../imgs/logos/logo+frase.png";
import styles from "./header.module.scss";

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
          <button onClick={() => navigate("/login")}>Iniciar sesion</button>
        )}
        {!isRegisterPage && (
          <button onClick={() => navigate("/registrarse")}>Crear Cuenta</button>
        )}
      </div>
    </header>
  );
}

