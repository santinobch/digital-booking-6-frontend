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
    const [imageInputs, setImageInputs] = useState([{urlImagen: ''}])
    const [validations, setValidations] = useState({
        'titulo': '',
        'idCategoria': '',
        'descripcion': '',
        'caracteristicas': '',
        'normasDeCasa': '',
        'saludSeguridad': '',
        'politicaCancelacion': '',
        'imagenes': ''
    })

    const handleAddImage = () => {
        setImageInputs([...imageInputs, {urlImagen: ''}])
    }

    const handleRemoveImage = (idx) => {
        let newFormValues = [...imageInputs];
        console.log(newFormValues[idx]);
        newFormValues.splice(idx, 1);
        console.log(newFormValues);
        setImageInputs(newFormValues)
    }

    const handleUrlChange = (i,e) => {
        let newFormValues = [...imageInputs];
        newFormValues[i].urlImagen = e.target.value;
        setImageInputs(newFormValues)
    }
    
    const navigate = useNavigate();
    const [errors, setErrors] = useState(null);

    const [categories, setCategories] = useState();

    const validateAll = (values) => {
        console.log(values);
        const { titulo, idCategoria, idCiudad, direccion, descripcion, normasDeCasa, saludSeguridad, politicaCancelacion, imagenes } = values
        console.log(imagenes);
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

        if(imagenes.length===1){         
            console.log(imagenes.length);
            validations.imagenes = "Debe agregar por lo menos una imágen"
            isValid = false
        } else if (imagenes.includes('')){
            validations.imagenes = "Las URL de las imagenes no deben estar vacías"
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
        values.imagenes = imageInputs.map(e => e.urlImagen)

        console.log(imageInputs);

        const isValid = validateAll(values)
        console.log(isValid);
        if(!isValid){
            return false
        }

        // guardando datos
        if (token) {
            const data = {
                ...values,
                idCategoria: parseInt(values.idCategoria),               
                caracteristicas: selectFeature.map((feature) => feature.value),
            };
            createProduct(data, token)
                .then((_response) => {
                    navigate("/succesfull?page=create-product");
                })
                .catch((err) => console.error(err));
        }
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
        imagenes: imgVal
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
                                error={!!errors?.titulo}
                                />
                            <p style={styleMessageError}>{errors?.titulo}</p>
                        </div>

                        <div className="">
                            <label className={styles.label}>Categoría</label>
                            <Select
                                classNamePrefix="selectBooking"
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
                            subLabel={descVal}
                            error={!!errors?.saludSeguridad}/>
                    </div>

                    <div className={styles.atributosContainer}>
                        <h4>Agregar atributos</h4>

                        <div className={styles.flexRow + ' ' + styles.greyContainer}>
                        <Select
                            classNamePrefix="selectBooking"
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
                            subLabel={normasVal}
                            error={!!errors?.normasDeCasa}/>
                        </div>
                        <div className={styles.politica}>
                            <h5>Salud y seguridad</h5>
                            <Textarea 
                            label="Descripción" 
                            placeholder="Escriba aquí" 
                            name="saludSeguridad"
                            subLabel={saludVal}
                            error={!!errors?.saludSeguridad}/>
                        </div>
                        <div className={styles.politica}>
                            <h5>Política de cancelación</h5>
                            <Textarea 
                            label="Descripción"
                            placeholder="Escriba aquí"
                            name="politicaCancelacion"
                            subLabel={cancelVal}
                            error={!!errors?.politicaCancelacion}/>
                        </div>
                    </div>

                    <h4>Cargar imágenes</h4>

                    <div className={styles.flexColumn + ' ' + styles.greyContainer}>
                    {imageInputs.map((e, idx) => (
                        <div className={styles.flexRow}>
                            <Input onChange={e => handleUrlChange(idx, e)} 
                                placeholder="Escriba la URL de su imagen"
                                type="text"
                                value={e.urlImagen || ""}
                                error={!!errors?.urlImagen}/>
                                {idx === 0 ? 
                            <button type="button" className={styles.plusButton} onClick={handleAddImage}>+</button>
                            : <button type="button" className={styles.plusButton} onClick={() => handleRemoveImage(idx)}>-</button>}
                        </div>
                    ))}
                    <label className={styles.subLabel}> {imgVal}</label>                    
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
