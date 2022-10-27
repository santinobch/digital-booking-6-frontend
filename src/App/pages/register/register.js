import styles from "./register.module.scss";

import * as Yup from "yup";

import { Formik } from "formik";
import { Link } from "react-router-dom";

import Input from "../../components/input/input";
import Button from "../../components/button/button";

const registrarseSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Demasiado corto")
    .max(50, "Demasiado largo!")
    .required("Este Campo es obligatorio"),
  apellido: Yup.string()
    .min(2, "Demasiado corto")
    .max(50, "Demasiado largo")
    .required("Este Campo es obligatorio"),
  email: Yup.string()
    .email("Correo invalido")
    .required("Este Campo es obligatorio"),
  password: Yup.string().required("Este Campo es obligatorio"),
  password_confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Las Contraseñas no coinciden"
  ),
});
const Register = () => {
  return (
    <main className="register-main">
        <Formik
          validationSchema={registrarseSchema}
          initialValues={{
            email: "",
            password: "",
            name: "",
            apellido: "",
            password_confirm: "",
          }}
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={styles.formContainer}>

                <h2>Crear cuenta</h2>

                <div className={styles.namesContainer}>
                    <Input
                        name="name"
                        type="text"
                        onChange={handleChange}
                        label="Nombre"/>

                    <Input
                        name="apellido"
                        type="text"
                        onChange={handleChange}
                        label="Apellido"/>
                </div>

                <Input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    width="100%"
                    label="Correo Electronico"/>

                <Input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    label="Contraseña"
                    width="100%"
                    isPassword/>

                <Input
                    name="password_confirm"
                    type="password"
                    onChange={handleChange}
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
            )}
        </Formik>
    </main>
  );
};

export default Register;
