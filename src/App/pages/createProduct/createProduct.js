import Button from "../../components/button/button";
import Input from "../../components/inputs/text/input";
import ProductHeader from "../../components/productHeader/productHeader";
import { SelectInput } from "../../components/inputs/selectTest/select";
import Textarea from "../../components/textarea/textarea";
import styles from "./createProduct.module.scss";
import { text } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

//Components

//Services
const styleMessageError = {
  marginTop: "-15px",
  color: "red",
  fontWeight: "400",
  fontSize: ".85rem",
  textAlign: "right",
};

export default function CreateProduct() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    // validaciones
    let fieldErrors = {};
    for (const key in values) {
      if (!values[key]) {
        fieldErrors[key] = "Este campo es requerido";
      }
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    // guardando datos
    navigate("/succesfull?page=create-product");
  }

  function handleKeyUp(e) {
    const { name } = e.target;
    setErrors({ ...errors, [name]: "" });
  }

  return (
    <main className={styles.main}>
      <ProductHeader titulo="Administración"></ProductHeader>
      <h3>Crear propiedad</h3>
      <form method="POST" onSubmit={handleSubmit}>
        <div className={styles.propiedadContainer}>
          <div className={styles.inputsContainer}>
            <Input
              label="Nombre de la propiedad"
              placeholder="Hermirage Hotel"
              name="nameP"
              type="text"
              onKeyUp={handleKeyUp}
              error={!!errors?.nameP}
            />
            <p style={styleMessageError}>{errors?.nameP}</p>
            {/* <Input label="Categoría" placeholder="Hotel"></Input> */}
            <SelectInput></SelectInput>
            <Input
              label="Dirección"
              placeholder="Av. Colón 1643"
              name="direccion"
              type="text"
              onKeyUp={handleKeyUp}
              error={!!errors?.direccion}
            />
            <p style={styleMessageError}>{errors?.direccion}</p>
            {/* <Input label="Ciudad" placeholder="Ciudad"></Input> */}
            <SelectInput></SelectInput>
          </div>

          <div className={styles.atributosContainer}>
            <h4>Agregar atributos</h4>
            <Input
              label="Descripción"
              placeholder="Escriba aquí"
              name="descripcion"
              type="text"
              onKeyUp={handleKeyUp}
              error={!!errors?.descripcion}
            />
            <p style={styleMessageError}>{errors?.descripcion}</p>
          </div>

          <div className={styles.politicaContainer}>
            <h4>Políticas del producto</h4>

            <div className={styles.politica}>
              <h5>Normas de la casa</h5>
              <Textarea
                label="Descripción"
                placeholder="Escriba aquí"
                name="normasDeCasa"
                onKeyUp={handleKeyUp}
                error={!!errors?.normasDeCasa}
              />
              <p style={styleMessageError}>{errors?.normasDeCasa}</p>
            </div>
            <div className={styles.politica}>
              <h5>Salud y seguridad</h5>
              <Textarea
                label="Descripción"
                placeholder="Escriba aquí"
                name="saludSeguridad"
                onKeyUp={handleKeyUp}
                error={!!errors?.saludSeguridad}
              />
              <p style={styleMessageError}>{errors?.saludSeguridad}</p>
            </div>
            <div className={styles.politica}>
              <h5>Política de cancelación</h5>
              <Textarea
                label="Descripción"
                placeholder="Escriba aquí"
                name="politicaCancelacion"
                onKeyUp={handleKeyUp}
                error={!!errors?.politicaCancelacion}
              />
              <p style={styleMessageError}>{errors?.politicaCancelacion}</p>
            </div>
          </div>

          <h4>Cargar imágenes</h4>
          <Input
            placeholder="Escriba la URL de su imagen"
            name="urlImagen"
            type="text"
            onKeyUp={handleKeyUp}
            error={!!errors?.urlImagen}
          />
          <p style={styleMessageError}>{errors?.urlImagen}</p>
        </div>
        <Button type="submit" styleBtn="dark" width="20%">
          Crear
        </Button>
      </form>
    </main>
  );
}
