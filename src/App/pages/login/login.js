import "./login.scss";

import Button from "../../components/button/button";
import { Formik } from "formik";
import Input from "../../components/input/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <div className="login-container">
        <h2 className="login-title">Iniciar sesión</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
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
            <form onSubmit={handleSubmit} className="login-form">
              <label className="login-label">
                <p>Correo Electronico</p>
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  placeholder="email@example.com"
                  onChange={handleChange}
                  className="login-input"
                />
              </label>
              <label className="login-label">
                <p>Contraseña</p>
                <Input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  placeholder="******"
                  value={values.password}
                  className="login-input"
                  isPassword
                />
              </label>
              <div className="login_ingresar">
                <Button type="buttom">Ingresar</Button>

                <span>
                  aun no tenes cuenta?{" "}
                  <Link to={`/registrarse`}>Registrate</Link>
                </span>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Login;
