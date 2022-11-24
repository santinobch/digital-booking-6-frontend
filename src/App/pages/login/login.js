import styles from "./login.module.scss";

import { Link, useNavigate } from "react-router-dom";

import Input from "../../components/inputs/text/input";
import Button from "../../components/button/button";
import {AuthContext, UsuarioContext} from "../../services/context";
import { useContext, useState } from "react";
import {PostAuth} from "../../services/auth";
import { GetLoggedUser } from "../../services/users";

const Login = () => {

    const {usuario, handleUsuarioLogin} = useContext(UsuarioContext);
    const {auth, handleAuth} = useContext(AuthContext);

    const navigate = useNavigate();

    const [hasError, setHasError] = useState(false);

    const HandleLogin = el => {
        el.preventDefault();
        let form = document.getElementById("loginForm");

        PostAuth(form.email.value, form.password.value, handleAuth).then(status => {
            if(status === 200){
                console.log(auth);
                GetLoggedUser(auth, handleUsuarioLogin);
            } else {
                setHasError(true)
            }
        });
        
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
