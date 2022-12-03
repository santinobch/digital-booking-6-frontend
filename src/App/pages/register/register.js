import styles from "./register.module.scss";

import { Link } from "react-router-dom";

import Input from "../../components/inputs/text/input";
import Button from "../../components/button/button";

import {useState} from 'react'

const Register = () => {

    const [passState, setPass] = useState("");

    const [registerData, setRegisterData] = useState({
        'name': '',
        'surname': '',
        'email': '',
        'password': '',
        'passwordConfirm': ''
    })

    const [validations, setValidations] = useState({
        'name': '',
        'surname': '',
        'email': '',
        'password': '',
        'passwordConfirm': ''
    })

    const validateAll = () => {
        const { name, surname, email, password } = registerData
        const validations = { name: '', email: '', gender: '' }
        let isValid = true
    
        if (!name) {
          validations.name = 'El nombre es obligatorio'
          isValid = false
        }

        if (!surname) {
            validations.surname = 'El apellido es obligatorio'
            isValid = false
          }
    
        if (!email) {
          validations.email = 'El email es obligatorio'
          isValid = false
        }

        if (!password) {
            validations.password = 'El email es obligatorio'
            isValid = false
        }
    
        if (!isValid) {
          this.setState({ validations })
        }
    
        return isValid
    }

    const validateSingle = e => {
        console.log(e.target)
        const { name } = e.target
        const value = registerData[name]
        let message = ''

        if(!value){
            message = `El campo no puede estar vacío`
        }

        if (value && (name === 'name' || name === 'surname') && !/^[a-zA-Z]+$/.test(value)) {
            let campo = name === "name" ? "nombre" : "apellido"
            message = `El ${campo} debe contener solo letras`
        }

        if(value && name === "password" && (value.length < 6 || value.length > 20)){
            message = 'La contraseña debe estar compuesta de 6 a 20 caracteres alfanuméricos'
        }

        if(value && name === "passwordConfirm" && registerData['passwordConfirm'] !== registerData['password'] ){
            message = 'Las contraseñas deben coincidir'
        }

        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'El formato del email debe ser ejemplo@mail.com'
        }

        setValidations({ ...validations, [name]: message })
    }

    const handleChange = e => {
        console.log(e.target.value)
        const {name, value} = e.target;
        setRegisterData({ ...registerData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validateAll()
        if(!isValid){
            return false
        }
        alert('OK')

    }

    const {name: nameVal, surname: surnameVal, email: emailVal, password: passwordVal, passwordConfirm: passwordConfirmVal } = validations

    return (
        <main className={styles.main}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>

                <h2>Crear cuenta</h2>

                <div className={styles.namesContainer}>
                    <Input
                        name="name"
                        type="text"
                        label="Nombre"
                        width="100%"
                        subLabel={nameVal}
                        onChange={handleChange}
                        onBlur={validateSingle}/>

                    <Input
                        name="surname"
                        type="text"
                        label="Apellido"
                        width="100%"
                        subLabel={surnameVal}
                        onChange={handleChange}
                        onBlur={validateSingle}/>
                </div>

                <Input
                    name="email"
                    type="email"
                    width="100%"
                    subLabel={emailVal}
                    label="Correo Electronico"
                    onChange={handleChange}
                    onBlur={validateSingle}/>

                <Input
                    name="password"
                    type="password"
                    label="Contraseña"
                    width="100%"
                    subLabel={passwordVal}
                    handlePass={setPass}
                    onChange={handleChange}
                    onBlur={validateSingle}/>

                <Input
                    name="passwordConfirm"
                    type="password"
                    width="100%"
                    label="Confirmar Contraseña"
                    comparePass={passState}
                    onChange={handleChange}
                    onBlur={validateSingle}
                    subLabel={passwordConfirmVal}/>

                <Button styleBtn="dark" width="100%">Crear Cuenta</Button>

                <div className={styles.changeForm}>
                    <span> ¿Ya tienes una cuenta? </span>
                    <Link to={`/login`}>
                        Iniciar Sesión
                    </Link>
                </div>
            </form>
        </main>
    );
};

export default Register;
