import styles from "./login.module.scss";

import { Link } from "react-router-dom";

import Input from "../../components/inputs/text/input";
import Button from "../../components/button/button";

const Login = () => {
    return (
        <main className={styles.main}>

            <form className={styles.formContainer}>

                <h2>Iniciar sesión</h2>

                <Input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    label="Correo Electronico"
                    required
                    pattern="[A-Za-z0-9]{1,20}@[A-Za-z0-9.]{1,20}"
                    width="100%"/>

                <Input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    label="Contraseña"
                    subLabel="Este campo es obligatorio"
                    pattern="[A-Za-z0-9]{8,20}"
                    required
                    width="100%"/>

                <Button style="dark" width="100%">Ingresar</Button>

                
                <div className={styles.changeForm}>
                    aun no tenes cuenta? 
                    <Link to={`/registrarse`}>
                        Registrate
                    </Link>
                </div>
            </form>
        </main>
    );
};

export default Login;
