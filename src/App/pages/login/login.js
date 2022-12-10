import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "../../components/button/button";
import { FaExclamationCircle } from "react-icons/fa";
import Input from "../../components/inputs/text/input";
import SpinnerLoader from "../../components/spinnerLoader/spinnerLoader";
import { getLoggedUser } from "../../services/users";
import { postAuth } from "../../services/auth";
import styles from "./login.module.scss";
import { useCookies } from "react-cookie";

//Cookies


const Login = () => {
  const navigate = useNavigate();

  //States
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [validations, setValidations] = useState({ email: "", password: "" });
  const [hasError, setHasError] = useState({ visible: false, msg: "" });
  const [loading, setLoading] = useState(false);

  const [cookie, setCookie] = useCookies();
  const { state } = useLocation();

  const validateAll = () => {
    const { email, password } = loginData;
    const validations = {};
    let isValid = true;

    if (!email) {
      validations.email = "El email es obligatorio";
      isValid = false;
    }

    if (!password) {
      validations.password = "El email es obligatorio";
      isValid = false;
    }

    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };

  const validateSingle = (e) => {
    const { name } = e.target;
    const value = loginData[name];
    let message = "";

    if (!value) {
      message = `El campo no puede estar vacío`;
    }

    if (
      value &&
      name === "password" &&
      (value.length < 6 || value.length > 20)
    ) {
      message =
        "La contraseña debe estar compuesta de 6 a 20 caracteres alfanuméricos";
    }

    if (value && name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      message = "El formato del email debe ser ejemplo@mail.com";
    }

        postAuth(loginData['email'], loginData['password'], setCookie)
        .then((response) => {
            console.log(response)
            if(!response || response.status === 404){
                setLoading(false)
                setHasError({
                    visible: true,
                    msg: 'Por favor, revise las credenciales ingresadas'
                });
            } else if (response.status === 200 && response.data.jwt !== "") {
                getLoggedUser(response.data, setCookie).then(() => {
                    setCookie('logged', true);
                    navigate("/home");
                });
            }
        });
    }
    setLoading(true);

    postAuth(loginData["email"], loginData["password"], setCookie).then(
      (response) => {
        if (!response) {
          setLoading(false);
          setHasError({
            visible: true,
            msg: "Por favor, revise las credenciales ingresadas",
          });
        } else if (response.status === 200 && response.data.jwt !== "") {
          getLoggedUser(response.data, setCookie).then(() => {
            setCookie("logged", true);
            navigate("/home");
          });
        }
      }
    );
  };

  useEffect(() => {
    if (state) {
      setHasError({
        visible: true,
        msg: "Para realizar una reserva, necesitas estar logueado",
      });
    }
  }, [state]);

  const { email: emailVal, password: passwordVal } = validations;

  return (
    <main className={styles.main}>
      {!loading ? (
        <form
          id="loginForm"
          className={styles.formContainer}
          onSubmit={handleSubmit}
        >
          <div
            className={styles.errorDiv}
            style={{ display: hasError.visible ? "flex" : "none" }}
          >
            <FaExclamationCircle size={30} />
            <p>{hasError.msg}</p>
          </div>

          <h2>Iniciar sesión</h2>

          <Input
            name="email"
            type="email"
            placeholder="example@mail.com"
            label="Correo Electronico"
            subLabel={emailVal}
            width="100%"
            onChange={handleChange}
            onBlur={validateSingle}
          />

          <Input
            name="password"
            type="password"
            placeholder="••••••••"
            label="Contraseña"
            subLabel={passwordVal}
            width="100%"
            onChange={handleChange}
            onBlur={validateSingle}
          />

          <Button styleBtn="dark" width="100%" type="submit">
            Ingresar
          </Button>

          <div className={styles.changeForm}>
            <span>¿Aún no tenes cuenta? </span>
            <Link to={`/register`}>Registrate</Link>
          </div>
        </form>
      ) : (
        <SpinnerLoader />
      )}
    </main>
  );
};

export default Login;
