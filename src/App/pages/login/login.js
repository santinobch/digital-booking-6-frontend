import styles from "./login.module.scss";

import { Link, useNavigate } from "react-router-dom";

import Input from "../../components/inputs/text/input";
import Button from "../../components/button/button";
import { useState } from "react";
import {PostAuth} from "../../services/auth";
import { GetLoggedUser } from "../../services/users";
import { useEffect } from "react";

//Models
import AuthModel from "../../models/auth.model";
import UsuarioModel from "../../models/usuario.model";
import { LoggedContext } from "../../Context";
import { useContext } from "react";

const Login = () => {
    const [auth, setAuth] = useState(new AuthModel);

    const navigate = useNavigate();

    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState(0);

    const {logged, handleLogged} = useContext(LoggedContext);


    useEffect(() => {
        if (status === 200 && auth.jwt !== "") {
            GetLoggedUser().then(() => {
                handleLogged(true);
                navigate("/home");
            });
        } else if (status !== 0 &&  status !== 200) {
            setHasError(true);
        }
    }, [auth])


    const HandleLogin = el => {
        el.preventDefault();
        let form = document.getElementById("loginForm");

        PostAuth(form.email.value, form.password.value, setAuth).then((s) => setStatus(s));
    }

    return (
        <main className={styles.main}>

            <form id="loginForm" className={styles.formContainer} onSubmit={HandleLogin}>

                <h2>Iniciar sesión</h2>

                <p className={styles.errorDiv} style={{ visibility: hasError ? "visible" : "hidden" }}>Por favor, revise las credenciales ingresadas</p>

                <Input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    label="Correo Electronico"
                    subLabel="Este campo es obligatorio"
                    pattern="[A-Za-z0-9]{1,20}@[A-Za-z0-9.]{1,20}"
                    width="100%"
                    setHasError={setHasError}/>

                <Input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    label="Contraseña"
                    subLabel="Este campo es obligatorio"
                    pattern="[A-Za-z0-9]{6,20}"
                    width="100%"
                    setHasError={setHasError}/>

                <Button styleBtn="dark" width="100%" type="submit">Ingresar</Button>

                
                <div className={styles.changeForm}>
                    <span> aun no tenes cuenta?  </span>
                    <Link to={`/registrarse`}>
                        Registrate
                    </Link>
                </div>
            </form>
        </main>
    );
};

export default Login;
