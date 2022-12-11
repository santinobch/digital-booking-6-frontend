import styles from "./createProduct.module.scss";

import Button from "../../components/button/button";
import Input from "../../components/inputs/text/input";
import ProductHeader from "../../components/productHeader/productHeader";
import { SelectSearch } from "../../components/inputs/select/SearchBar";
import Textarea from "../../components/textarea/textarea";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createProduct } from "../../services/products";


import Select from "react-select";
import { getCategories } from "../../services/categories";
import { getFeatures } from "../../services/features";

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
    const [validations, setValidations] = useState({
        'titulo': '',
        'idCategoria': '',
        'descripcion': '',
        'caracteristicas': '',
        'normasDeCasa': '',
        'saludSeguridad': '',
        'politicaCancelacion': '',
        'urlImagen': ''
    })
    
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const [categories, setCategories] = useState();

    const validateAll = (values) => {
        console.log(values);
        const { titulo, idCategoria, idCiudad, direccion, descripcion, normasDeCasa, saludSeguridad, politicaCancelacion, urlImagen } = values
        let isValid = true
        let validations={}       
    
        if (!titulo) {
          validations.titulo = 'El titulo es obligatorio'
          isValid = false
        }

        if (!idCategoria) {
            validations.idCategoria = 'La categoría es obligatoria'
            isValid = false
        }

        if (!idCiudad) {
            validations.idCiudad = 'La ciudad es obligatoria'
            isValid = false
        }

        if (!direccion) {
            validations.direccion = 'La dirección es obligatoria'
            isValid = false
        }

        if (!descripcion) {
            validations.descripcion = 'La descripción es obligatoria'
            isValid = false
        }

        if (!normasDeCasa) {
            validations.normasDeCasa = 'La normas no deben estar vacías'
            isValid = false
        }

        if (!saludSeguridad) {
            validations.saludSeguridad = 'Las normas de seguridad son obligatorias'
            isValid = false
        }

        if (!politicaCancelacion) {
            validations.politicaCancelacion = 'Las políticas de cancelación no deben estar vacías'
            isValid = false
        }

        if(!urlImagen){
            validations.urlImagen = "Debe agregar por lo menos una imágen"
            isValid = false
        }
   
        if (!isValid) {
            setValidations(validations)
        }
    
        return isValid
    }


    useEffect(() => {
        getCategories().then((data) => 
            setCategories(
                data.map((category) => ({
                    value: category.id,
                    label: category.titulo,
                })
            ))
        );
        getFeatures().then((data) =>
            setFeatures(data.map((feat) => ({ value: feat.id, label: feat.nombre })))
        );
    }, [])

    const [features, setFeatures] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());

        values.idCiudad = selectCity.value ? parseInt(selectCity.value) : ""


        const isValid = validateAll(values)
        if(!isValid){
            return false
        }

        // guardando datos
        if (token) {
            const data = {
                ...values,
                idCategoria: parseInt(values.idCategoria),
                imagenes: [values.imagenes],
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

    const {
        titulo: tituloVal, 
        direccion: dirVal,
        descripcion: descVal,
        idCategoria: categoriaVal, 
        idCiudad: ciudadVal,
        normasDeCasa: normasVal, 
        saludSeguridad: saludVal, 
        politicaCancelacion: cancelVal, 
        urlImagen: imgVal
    } = validations

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
                                subLabel={tituloVal}
                                onKeyUp={handleKeyUp}
                                error={!!errors?.titulo}
                                />
                            <p style={styleMessageError}>{errors?.titulo}</p>
                        </div>

                        <div className="">
                            <label className={styles.label}>Categoría</label>
                            <Select
                                name="idCategoria"
                                placeholder="Seleccione..."
                                options={categories}
                                />
                            <label className={styles.subLabel}> {categoriaVal}</label>
                        </div>

                        <div className="">
                            <Input
                                label="Dirección"
                                placeholder="Av. Colón 1643"
                                name="direccion"
                                subLabel={dirVal}
                                type="text"
                                onKeyUp={handleKeyUp}
                                error={!!errors?.descripcion}
                                />
                        </div>
                        <div className="">
                            <label className={styles.label}>Ciudad</label>
                            <SelectSearch name="idciudad" onChange={setSelectCity} />
                            <label className={styles.subLabel}> {ciudadVal}</label>
                        </div>
                    </div>

                    <div className={styles.descripcionContainer}>
                        <Textarea 
                            label="Descripción" 
                            placeholder="Escriba aquí" 
                            name="descripcion"
                            onKeyUp={handleKeyUp} 
                            subLabel={descVal}
                            error={!!errors?.saludSeguridad}/>
                    </div>

                    <div className={styles.atributosContainer}>
                        <h4>Agregar atributos</h4>

                        <div className={styles.flexRow + ' ' + styles.greyContainer}>
                        <Select
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
                            subLabel={normasVal}
                            error={!!errors?.normasDeCasa}/>
                        </div>
                        <div className={styles.politica}>
                            <h5>Salud y seguridad</h5>
                            <Textarea 
                            label="Descripción" 
                            placeholder="Escriba aquí" 
                            name="saludSeguridad"
                            onKeyUp={handleKeyUp} 
                            subLabel={saludVal}
                            error={!!errors?.saludSeguridad}/>
                        </div>
                        <div className={styles.politica}>
                            <h5>Política de cancelación</h5>
                            <Textarea 
                            label="Descripción"
                            placeholder="Escriba aquí"
                            name="politicaCancelacion"
                            onKeyUp={handleKeyUp}
                            subLabel={cancelVal}
                            error={!!errors?.politicaCancelacion}/>
                        </div>
                    </div>

                    <h4>Cargar imágenes</h4>
                    
                    <div className={styles.flexRow + ' ' + styles.greyContainer}>
                        <Input placeholder="Escriba la URL de su imagen"
                        name="urlImagen"
                        type="text"
                        onKeyUp={handleKeyUp}
                        subLabel={imgVal}
                        error={!!errors?.urlImagen}/>
                        <button className={styles.plusButton}>+</button>
                    </div>
                </div>

                <br/>
                <div className={styles.createButton}>
                    <Button width="30%" type="submit" styleBtn="dark"> Crear </Button>
                </div>
            </form>
        </main>
    );
}
