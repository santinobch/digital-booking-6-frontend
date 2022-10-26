import * as Yup from "yup";

import { Formik } from "formik";
import Input from "../../components/input/input";
import { Link } from "react-router-dom";

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
    <main>
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
        }}
      >
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
          <form onSubmit={handleSubmit}>
            <label>
              <p>Nombre</p>
              <Input
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name}
              />
              <div>{errors.name}</div>
            </label>
            <label>
              <p>Apellido</p>
              <Input
                name="apellido"
                type="text"
                onChange={handleChange}
                value={values.apellido}
              />
              <div>{errors.apellido}</div>
            </label>
            <label>
              <p>Correo Electronico</p>
              <Input
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
              />
              <div>{errors.email}</div>
            </label>
            <label>
              <p>Contraseña</p>
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password}
                isPassword
              />

              <div>{errors.password}</div>
            </label>
            <label>
              <p>Confirmar Contraseña</p>
              <Input
                name="password_confirm"
                type="password"
                onChange={handleChange}
                value={values.password_confirm}
              />
              <div>{errors.password_confirm}</div>
            </label>
            <div>
              <button type="buttom">Crear Cuenta</button>
            </div>
            <p>
              ¿Ya tienes Cuenta? <Link to={`/login`}>Iniciar Sesión</Link>
            </p>
          </form>
        )}
      </Formik>
    </main>
  );
};

export default Register;
