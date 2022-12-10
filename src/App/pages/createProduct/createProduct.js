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

import Select from "react-select";

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
      <form method="POST" onSubmit={handleSubmit}>
      <h3>Crear propiedad</h3>
        <div className={styles.propiedadContainer}>
          <div className={styles.inputsContainer}>
            <div>
              <Input
                label="Nombre de la propiedad"
                name="titulo"
                placeholder="Hermirage Hotel"
                onKeyUp={handleKeyUp}
                error={!!errors?.titulo}
                />
              <p style={styleMessageError}>{errors?.titulo}</p>
            </div>

            {/* <Input label="Categoría" placeholder="Hotel"></Input> */}
            <div className="">
            <label className={styles.label}>Categoría</label>
              <SelectInput
                name="idCategoria"
                placeholder="Seleccione..."
                options={categoryOptions}
                />
              
            </div>
            <div className="">
              <Input
                label="Dirección"
                placeholder="Av. Colón 1643"
                name="descripcion"
                type="text"
                onKeyUp={handleKeyUp}
                error={!!errors?.descripcion}
                />
              <p style={styleMessageError}>{errors?.descripcion}</p>
            </div>
            <div className="">
            <label className={styles.label}>Ciudad</label>
              {/* <Input label="Ciudad" placeholder="Ciudad"></Input> */}
              <SelectSearch name="idciudad" onChange={setSelectCity} />
              <p style={styleMessageError}>{errors?.idciudad}</p>
            </div>
          </div>

          <div className={styles.atributosContainer}>
            <h4>Agregar atributos</h4>

            <div className={styles.flexRow + ' ' + styles.greyContainer}>
              <SelectInput
              placeholder="Seleccione los atributos correspondientes"
                isMulti
                name="caracteristicas"
                options={features}
                onChange={setSelectFeature}               
              />
            </div>
          </div>
            
            <h4>Políticas del producto</h4>
            <div className={styles.politicaContainer}>
            
                <div className={styles.politica}>
                    <h5>Normas de la casa</h5>
                    <Textarea 
                      label="Descripción" 
                      placeholder="Escriba aquí" 
                      name="normasDeCasa"
                      onKeyUp={handleKeyUp} 
                      error={!!errors?.normasDeCasa}/>
                    <p style={styleMessageError}>{errors?.normasDeCasa}</p>
                </div>
                <div className={styles.politica}>
                    <h5>Salud y seguridad</h5>
                    <Textarea 
                      label="Descripción" 
                      placeholder="Escriba aquí" 
                      name="saludSeguridad"
                      onKeyUp={handleKeyUp} 
                      error={!!errors?.saludSeguridad}/>
                    <p style={styleMessageError}>{errors?.saludSeguridad}</p>
                </div>
                <div className={styles.politica}>
                    <h5>Política de cancelación</h5>
                    <Textarea 
                      label="Descripción"
                      placeholder="Escriba aquí"
                      name="politicaCancelacion"
                      onKeyUp={handleKeyUp}
                      error={!!errors?.politicaCancelacion}/>
                    <p style={styleMessageError}>{errors?.politicaCancelacion}</p>
                </div>
            </div>

            <h4>Cargar imágenes</h4>
            
            <div className={styles.flexRow + ' ' + styles.greyContainer}>
                <Input placeholder="Escriba la URL de su imagen"
                  name="urlImagen"
                  type="text"
                  onKeyUp={handleKeyUp}
                  error={!!errors?.urlImagen}/>
                <button className={styles.plusButton}>+</button>
            </div>
            <p style={styleMessageError}>{errors?.urlImagen}</p>
          </div>

          <br/>
          <div className={styles.createButton}>
            <Button width="30%" type="submit" styleBtn="dark"> Crear </Button>
          </div>
      </form>
    </main>
  );
}
