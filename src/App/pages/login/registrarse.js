import { Formik } from "formik";
import Input from "../../components/input/input";
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <Formik
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
          </label>
          <label>
            <p>Apellido</p>
            <Input
              name="apellido"
              type="text"
              onChange={handleChange}
              value={values.apellido}
            />
          </label>
          <label>
            <p>Correo Electronico</p>
            <Input
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
          </label>
          <label>
            <p>Contraseña</p>
            <Input
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
          </label>
          <label>
            <p>Confirmar Contraseña</p>
            <Input
              name="password_confirm"
              type="password"
              onChange={handleChange}
              value={values.password_confirm}
            />
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
  );
};

export default Registro;
