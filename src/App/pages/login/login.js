import styles from "./login.module.scss";

import { Formik } from "formik";
import { Link } from "react-router-dom";

import Input from "../../components/inputs/text/input";
import Button from "../../components/button/button";

const Login = () => {
    return (
        <main>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
                }}>

                    {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    }) => (
                    <form onSubmit={handleSubmit} className={styles.formContainer}>

                        <h2>Iniciar sesión</h2>

                        <Input
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            onChange={handleChange}
                            label="Correo Electronico"
                            width="100%"/>

                        <Input
                            name="password"
                            type="password"
                            placeholder="******"
                            onChange={handleChange}
                            label="Contraseña"
                            subLabel="Este campo es obligatorio"
                            width="100%"
                            isPassword/>

                        <Button style="dark" width="100%">Ingresar</Button>

                        
                        <div className={styles.changeForm}>
                            aun no tenes cuenta? 
                            <Link to={`/registrarse`}>
                                Registrate
                            </Link>
                        </div>
                    </form>
                    )}
            </Formik>
        </main>
    );
};

export default Login;
