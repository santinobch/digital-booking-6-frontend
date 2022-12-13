import styles from "./register.module.scss";

import { Link, useNavigate } from "react-router-dom";

import Input from "../../components/inputs/text/input";
import Button from "../../components/button/button";
import { postSignUp } from "../../services/signup";
import {useState} from 'react'
import { getLoggedUser } from "../../services/users";
import { postAuth } from "../../services/auth";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";

//Cookies
import { useCookies } from 'react-cookie';

const Register = () => {
    const navigate = useNavigate();

    //States
    const [passState, setPass] = useState("");
    const [hasError, setHasError] = useState(false);
    const [registerError, setRegisterError] = useState('')
    const [loading, setLoading] = useState(false);
    const [registerData, setRegisterData] = useState({
        'name': '',
        'surname': '',
        'username': '',
        'email': '',
        'password': '',
        'passwordConfirm': ''
    })

    const [validations, setValidations] = useState({
        'name': '',
        'surname': '',
        'username': '',
        'email': '',
        'password': '',
        'passwordConfirm': ''
    })

    const [cookie, setCookie] = useCookies();

    const validateAll = () => {
        const { name, username, surname, email, password, passwordConfirm } = registerData
        const validations = {}
        let isValid = true
    
        if (!name) {
          validations.name = 'El nombre es obligatorio'
          isValid = false
        }

        if (!username) {
            validations.username = 'El nombre de usuario es obligatorio'
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
            validations.password = 'La contraseña es obligatoria'
            isValid = false
        }

        if(password && !passwordConfirm){
            validations.passwordConfirm = 'Por favor, confirme su contraseña'
            isValid = false
        }
    
        if (!isValid) {
            setValidations(validations)
        }
    
        return isValid
    }

    const validateSingle = e => {
        const { name } = e.target
        const value = registerData[name]
        let message = ''

        if(!value){
            message = `El campo no puede estar vacío`
        }

        if (value && (name === 'name' || name === 'surname') && !/^[a-zA-Z ]+$/.test(value)) {
            let campo = name === "name" ? "nombre" : "apellido"
            message = `El ${campo} debe contener solo letras`
        }

        if(value && name === "username" && (value.length < 3 || value.length > 15)){
            message = 'El nombre de usuario debe estar compuesto de 3 a 15 caracteres'
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
        setHasError(false)
        const {name, value} = e.target;
        setRegisterData({ ...registerData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, username, surname, email, password } = registerData
        
        const isValid = validateAll()
        if(!isValid){
            return false
        }
        setLoading(true)
        postSignUp(email, username, name, surname, password).then(res => {
            if (res.status > 200 && res.status < 300) {
                postAuth(email, password, setCookie).then((response) => {
                    if (response.status === 200 && response.data.jwt !== "") {
                        getLoggedUser(response.data, setCookie).then(() => {
                            setCookie('logged', true);
                            navigate("/home");
                        });
                    } else if (response.status !== 0 &&  response.status !== 200) {
                        setHasError(true);
                    }
                });
            } else if (res.status !== 0 &&  res.status !== 200) {
                setRegisterError(res.data.message)
                setHasError(true);
                setLoading(false)
            }  
        })
    }

    const {name: nameVal, surname: surnameVal, email: emailVal, username: usernameVal , password: passwordVal, passwordConfirm: passwordConfirmVal } = validations

    return (
        <main className={styles.main}>

            {!loading ? (
            <form className={styles.formContainer} onSubmit={handleSubmit}>

                <h2>Crear cuenta</h2>

                <p className={styles.errorDiv} style={{ display: hasError ? "block" : "none" }}>{registerError}</p>


                <div className={styles.namesContainer}>
                    <Input
                        name="name"
                        type="text"
                        label="Nombre"
                        width="100%"
                        placeholder="Nombre"
                        subLabel={nameVal}
                        onChange={handleChange}
                        onBlur={validateSingle}/>

                    <Input
                        name="surname"
                        placeholder="Apellido"
                        type="text"
                        label="Apellido"
                        width="100%"
                        subLabel={surnameVal}
                        onChange={handleChange}
                        onBlur={validateSingle}/>
                </div>

                <Input
                    name="username"
                    placeholder="Nombre de usuario"
                    type="text"
                    width="100%"
                    subLabel={usernameVal}
                    label="Nombre de usuario"
                    onChange={handleChange}
                    onBlur={validateSingle}/>

                <Input
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    width="100%"
                    subLabel={emailVal}
                    label="Correo Electronico"
                    onChange={handleChange}
                    onBlur={validateSingle}/>

                <Input
                    name="password"
                    placeholder="••••••••"
                    type="password"
                    label="Contraseña"
                    width="100%"
                    subLabel={passwordVal}
                    handlePass={setPass}
                    onChange={handleChange}
                    onBlur={validateSingle}/>

                <Input
                    name="passwordConfirm"
                    placeholder="••••••••"
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
            ) : <SpinnerLoader/>}
        </main>
    );
};

export default Register;
