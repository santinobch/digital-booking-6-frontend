import styles from "./createProduct.module.scss";

import { useParams } from "react-router-dom";
import { useState } from "react";

//Components
import ProductHeader from "../../components/productHeader/productHeader";
import Input from "../../components/inputs/text/input";
import Textarea from "../../components/textarea/textarea";
import { SelectInput } from "../../components/inputs/selectTest/select";
import Button from "../../components/button/button";

//Services


export default function CreateProduct() {
    
    return (
        <main className={styles.main}>

            <ProductHeader titulo="Administración"></ProductHeader>

            <h3>Crear propiedad</h3>
            <div className={styles.propiedadContainer}>
                <div className={styles.inputsContainer}>
                    <Input label="Nombre de la propiedad" placeholder="Hermirage Hotel"></Input>
                    {/* <Input label="Categoría" placeholder="Hotel"></Input> */}
                    <SelectInput></SelectInput>   
                    <Input label="Dirección" placeholder="Av. Colón 1643"></Input>
                    {/* <Input label="Ciudad" placeholder="Ciudad"></Input> */}
                    <SelectInput></SelectInput>
                </div>

                <div className={styles.atributosContainer}>
                    <h4>Agregar atributos</h4>

                    <div className={styles.flexRow}>
                        <SelectInput></SelectInput>
                        <button className={styles.plusButton}>+</button>
                    </div>
                </div>
                
                <div className={styles.politicaContainer}>
                    <h4>Políticas del producto</h4>
                
                    <div className={styles.politica}>
                        <h5>Normas de la casa</h5>
                        <Textarea label="Descripción" placeholder="Escriba aquí"></Textarea>
                    </div>
                    <div className={styles.politica}>
                        <h5>Salud y seguridad</h5>
                        <Textarea label="Descripción" placeholder="Escriba aquí"></Textarea>
                    </div>
                    <div className={styles.politica}>
                        <h5>Política de cancelación</h5>
                        <Textarea label="Descripción" placeholder="Escriba aquí"></Textarea>
                    </div>
                </div>

                <h4>Cargar imágenes</h4>
                
                <div className={styles.flexRow}>
                    <Input placeholder="Escriba la URL de su imagen"></Input>
                    <button className={styles.plusButton}>+</button>
                </div>

                <Button styleBtn="dark">Crear</Button>
            </div>

        </main>
    );
}