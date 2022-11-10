import styles from "./register.module.scss";

import { Link } from "react-router-dom";

import Input from "../../components/inputs/text/input";
import Button from "../../components/button/button";

import {useState} from 'react'

// const registrarseSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Demasiado corto")
//     .max(50, "Demasiado largo!")
//     .required("Este Campo es obligatorio"),
//   apellido: Yup.string()
//     .min(2, "Demasiado corto")
//     .max(50, "Demasiado largo")
//     .required("Este Campo es obligatorio"),
//   email: Yup.string()
//     .email("Correo invalido")
//     .required("Este Campo es obligatorio"),
//   password: Yup.string().required("Este Campo es obligatorio"),
//   password_confirm: Yup.string().oneOf(
//     [Yup.ref("password"), null],
//     "Las Contraseñas no coinciden"
//   ),
// });
const Register = () => {

    //const [stockState, setStock] = useState(stock);

    return (
        <main className={styles.main}>
            <form className={styles.formContainer}>

                <h2>Crear cuenta</h2>

                <div className={styles.namesContainer}>
                    <Input
                        name="name"
                        type="text"
                        label="Nombre"/>

                    <Input
                        name="apellido"
                        type="text"
                        label="Apellido"/>
                </div>

                <Input
                    name="email"
                    type="email"
                    width="100%"
                    pattern="[A-Za-z0-9]{1,20}@[A-Za-z0-9.]{1,20}"
                    label="Correo Electronico"/>

                <Input
                    name="password"
                    type="password"
                    label="Contraseña"
                    width="100%"
                    isPassword/>

                <Input
                    name="password_confirm"
                    type="password"
                    width="100%"
                    label="Confirmar Contraseña"/>

                <Button style="dark" width="100%">Crear Cuenta</Button>

                <div className={styles.changeForm}>
                    ¿Ya tienes una cuenta?
                    <Link to={`/login`}>
                        Iniciar Sesión
                    </Link>
                </div>
            </form>
        </main>
    );
};

export default Register;
