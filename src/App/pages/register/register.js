import styles from "./register.module.scss";

import { Link } from "react-router-dom";

import Input from "../../components/inputs/text/input";
import Button from "../../components/button/button";

import {useEffect, useState} from 'react'

const Register = () => {

    const [passState, setPass] = useState("");

    return (
        <main className={styles.main}>
            <form className={styles.formContainer}>

                <h2>Crear cuenta</h2>

                <div className={styles.namesContainer}>
                    <Input
                        name="name"
                        type="text"
                        label="Nombre"
                        subLabel="Este campo es obligatorio"
                        pattern="[A-Za-z]{2,20}"/>

                    <Input
                        name="apellido"
                        type="text"
                        label="Apellido"
                        subLabel="Este campo es obligatorio"
                        pattern="[A-Za-z]{2,20}"/>
                </div>

                <Input
                    name="email"
                    type="email"
                    width="100%"
                    subLabel="Este campo es obligatorio"
                    pattern="[A-Za-z0-9]{1,20}@[A-Za-z0-9.]{1,20}"
                    label="Correo Electronico"/>

                <Input
                    name="password"
                    type="password"
                    label="Contraseña"
                    width="100%"
                    subLabel="La contraseña debe estar compuesta de 8 a 20 caracteres alfenumericos"
                    handlePass={setPass}
                    pattern="[A-Za-z0-9]{6,20}"/>

                <Input
                    name="password_confirm"
                    type="password"
                    width="100%"
                    label="Confirmar Contraseña"
                    comparePass={passState}
                    subLabel="Las contraseñas deben coincidir"/>

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
