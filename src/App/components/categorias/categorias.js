import "./categorias.scss";

import React, { useEffect, useState } from "react";

import Card from "../../components/card/card";
import { getCategorias } from "../../services";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";

const Categorias = ({ onCategoriaSeleccionada }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias().then((data) => setCategorias(data));
  }, []);

  if(categorias.length === 0){
    return (
        <SpinnerLoader/>
      )
  }
  return (
    <section className="categoriasSection">
      <h2>Buscar por tipo de alojamiento</h2>
      <section className="categoriasGrid">
        {categorias.map((item) => (
          <Card
            key={item.titulo}
            {...item}
            onClick={() => onCategoriaSeleccionada({ categoria: item.id })}
          />
        ))}
      </section>
    </section>
  );
};

export default Categorias;
