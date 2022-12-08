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
import ProductHeader from "../../components/productHeader/productHeader";
import Input from "../../components/inputs/text/input";
import Textarea from "../../components/textarea/textarea";
import { SelectInput } from "../../components/inputs/selectTest/select";
import Button from "../../components/button/button";

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
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

                <h4>Cargar imágenes</h4>
                
                <div className={styles.flexRow}>
                    <Input placeholder="Escriba la URL de su imagen"></Input>
                    <button className={styles.plusButton}>+</button>
                </div>

                <Button styleBtn="dark">Crear</Button>
    navigate("/succesfull?page=create-product");
    // guardando datos
  }
  function handleKeyUp(e) {
    const { name } = e.target;
    setErrors({ ...errors, [name]: "" });
  }
      <form method="POST" onSubmit={handleSubmit}>
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
