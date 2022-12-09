import { useCategories, useFeatures } from "../../hooks";

import Button from "../../components/button/button";
import Input from "../../components/inputs/text/input";
import ProductHeader from "../../components/productHeader/productHeader";
import { SelectInput } from "../../components/inputs/selectTest/select";
import { SelectSearch } from "../../components/inputs/select/SearchBar";
import Textarea from "../../components/textarea/textarea";
import { createProduct } from "../../services";
import styles from "./createProduct.module.scss";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Services
const styleMessageError = {
  marginTop: "-15px",
  color: "red",
  fontWeight: "400",
  fontSize: ".85rem",
  textAlign: "right",
};

export default function CreateProduct() {
  const [cookie] = useCookies();
  const { jwt: token } = cookie.auth;
  const [selectCity, setSelectCity] = useState({});
  const [selectFeature, setSelectFeature] = useState({});
  const categories = useCategories();
  const features = useFeatures();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.titulo,
  }));

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
    if (token) {
      const data = {
        ...values,
        idCategoria: parseInt(values.idCategoria),
        imagenes: [values.imagenes],
        idCiudad: parseInt(selectCity.value),
        caracteristicas: selectFeature.map((feature) => feature.value),
      };
      createProduct(data, token)
        .then((_response) => {
          navigate("/succesfull?page=create-product");
        })
        .catch((err) => console.error(err));
    }
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
              name="titulo"
              placeholder="Hermirage Hotel"
              onKeyUp={handleKeyUp}
              error={!!errors?.titulo}
            />
            <p style={styleMessageError}>{errors?.titulo}</p>

            {/* <Input label="Categoría" placeholder="Hotel"></Input> */}
            <SelectInput
              name="idCategoria"
              placeholder="Seleccione..."
              options={categoryOptions}
            />
            <p style={styleMessageError}>{errors?.idCategoria}</p>

            <Input
              label="Dirección"
              placeholder="Av. Colón 1643"
              name="descripcion"
              type="text"
              onKeyUp={handleKeyUp}
              error={!!errors?.descripcion}
            />
            <p style={styleMessageError}>{errors?.descripcion}</p>

            {/* <Input label="Ciudad" placeholder="Ciudad"></Input> */}
            <SelectSearch name="idciudad" onChange={setSelectCity} />
            <p style={styleMessageError}>{errors?.idciudad}</p>
          </div>

          <div className={styles.atributosContainer}>
            <h4>Agregar atributos</h4>

            <div className={styles.flexRow}>
              <SelectInput
                isMulti
                name="caracteristicas"
                options={features}
                onChange={setSelectFeature}
              />
              <button className={styles.plusButton}>+</button>
            </div>
          </div>

          <div className={styles.politicaContainer}>
            <h4>Políticas del producto</h4>

            <div className={styles.politica}>
              <h5>Normas de la casa</h5>
              <Textarea
                label="Descripción"
                placeholder="Escriba aquí"
                name="houseRulesPolicy"
                onKeyUp={handleKeyUp}
                error={!!errors?.houseRulesPolicy}
              />
              <p style={styleMessageError}>{errors?.normasDeCasa}</p>
            </div>
            <div className={styles.politica}>
              <h5>Salud y seguridad</h5>
              <Textarea
                label="Descripción"
                placeholder="Escriba aquí"
                name="healthAndSecurityPolicy"
                onKeyUp={handleKeyUp}
                error={!!errors?.healthAndSecurityPolicy}
              />
              <p style={styleMessageError}>{errors?.healthAndSecurityPolicy}</p>
            </div>
            <div className={styles.politica}>
              <h5>Política de cancelación</h5>
              <Textarea
                label="Descripción"
                placeholder="Escriba aquí"
                name="cancellationPolicy"
                onKeyUp={handleKeyUp}
                error={!!errors?.cancellationPolicy}
              />
              <p style={styleMessageError}>{errors?.cancellationPolicy}</p>
            </div>
          </div>

          <h4>Cargar imágenes</h4>

          <div className={styles.flexRow}>
            <Input
              placeholder="Escriba la URL de su imagen"
              name="imagenes"
              type="text"
              onKeyUp={handleKeyUp}
              error={!!errors?.imagenes}
            />
            <button className={styles.plusButton}>+</button>
            <p style={styleMessageError}>{errors?.imagenes}</p>
          </div>

          <Button type="submit" styleBtn="dark">
            Crear
          </Button>
        </div>
      </form>
    </main>
  );
}
