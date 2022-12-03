import styles from "./login.module.scss";

import { Link, useNavigate } from "react-router-dom";

import Input from "../../components/inputs/text/input";
import Button from "../../components/button/button";
import { useState } from "react";
import { postAuth } from "../../services/auth";
import { getLoggedUser } from "../../services/users";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";

//Cookies
import { useCookies } from 'react-cookie';

const Login = () => {
    const navigate = useNavigate();

    //States
    const [loginData, setLoginData] = useState({ 'email': '', 'password': '' })
    const [validations, setValidations] = useState({'email': '', 'password': '' })
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [cookie, setCookie] = useCookies();


    const validateAll = () => {
        const { email, password } = loginData
        const validations = {}
        let isValid = true
    
        if (!email) {
          validations.email = 'El email es obligatorio'
          isValid = false
        }

        if (!password) {
            validations.password = 'El email es obligatorio'
            isValid = false
        }
    
        if (!isValid) {
            setValidations(validations)
        }
    
        return isValid
    }

    const validateSingle = e => {
        console.log(e.target)
        const { name } = e.target
        const value = loginData[name]
        let message = ''

        if(!value){
            console.log("a")
            message = `El campo no puede estar vacío`
        }

        if(value && name === "password" && (value.length < 6 || value.length > 20)){
            message = 'La contraseña debe estar compuesta de 6 a 20 caracteres alfanuméricos'
        }

        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'El formato del email debe ser ejemplo@mail.com'
        }

        setValidations({ ...validations, [name]: message })
    }

    const handleChange = e => {
        setHasError(false)
        const {name, value} = e.target;
        setLoginData({ ...loginData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validateAll()
        if(!isValid){
            return false
        }
        setLoading(true)

        postAuth(loginData['email'], loginData['password'], setCookie)
        .then((response) => {
            if(!response){
                setLoading(false)
                setHasError(true);
            } else if (response.status === 200 && response.data.jwt !== "") {
                getLoggedUser(response.data, setCookie).then(() => {
                    setCookie('logged', true);
                    navigate("/home");
                });
            }
        });
    }

    const {email: emailVal, password: passwordVal } = validations


    return (
        <main className={styles.main}>

            {!loading ? (            
                <form id="loginForm" className={styles.formContainer} onSubmit={handleSubmit}>

                    <h2>Iniciar sesión</h2>

                    <p className={styles.errorDiv} style={{ display: hasError ? "block" : "none" }}>Por favor, revise las credenciales ingresadas</p>

                    <Input
                        name="email"
                        type="email"
                        placeholder="example@mail.com"
                        label="Correo Electronico"
                        subLabel={emailVal}
                        width="100%"
                        onChange={handleChange}
                        onBlur={validateSingle}/>

                    <Input
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        label="Contraseña"
                        subLabel={passwordVal}
                        width="100%"
                        onChange={handleChange}
                        onBlur={validateSingle}/>

                    <Button styleBtn="dark" width="100%" type="submit">Ingresar</Button>

                    
                    <div className={styles.changeForm}>
                        <span>¿Aún no tenes cuenta?  </span>
                        <Link to={`/register`}>
                            Registrate
                        </Link>
                    </div>
                </form>
            ) : <SpinnerLoader/>}
        </main>
    );
};

export default Login;
