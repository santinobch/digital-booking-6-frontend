import "./register.scss";

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
    <main className="register-main">
      <div className="register-container">
        <h3 className="register-title">Crear cuenta</h3>
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
            <form onSubmit={handleSubmit} className="register-form">
              <div className="register-form-name">
                <div>
                  <label>
                    <p className="register-form-label">Nombre</p>
                    <Input
                      name="name"
                      type="text"
                      onChange={handleChange}
                      value={values.name}
                      className="register-form-input"
                    />
                    <div className="error">{errors.name}</div>
                  </label>
                </div>
                <div>
                  <label>
                    <p className="register-form-label">Apellido</p>
                    <Input
                      name="apellido"
                      type="text"
                      onChange={handleChange}
                      value={values.apellido}
                      className="register-form-input"
                    />
                    <div className="error">{errors.apellido}</div>
                  </label>
                </div>
              </div>
              <label>
                <p className="register-form-label">Correo Electronico</p>
                <Input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  className="register-form-input"
                />
                <div className="error">{errors.email}</div>
              </label>
              <label>
                <p className="register-form-label">Contraseña</p>
                <Input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  className="register-form-input"
                  isPassword
                />

                <div className="error">{errors.password}</div>
              </label>
              <label>
                <p className="register-form-label">Confirmar Contraseña</p>
                <Input
                  name="password_confirm"
                  type="password"
                  onChange={handleChange}
                  value={values.password_confirm}
                  className="register-form-input"
                />
                <div className="error">{errors.password_confirm}</div>
              </label>

              <button type="buttom" className="register-form-submit">
                Crear Cuenta
              </button>

              <p className="register-init">
                ¿Ya tienes una cuenta? <Link to={`/login`}>Iniciar Sesión</Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Register;
