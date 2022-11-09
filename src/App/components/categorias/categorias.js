import "./categorias.scss";

import React, { useEffect, useState } from "react";

import Card from "../../components/card/card";
import { getCategorias } from "../../services";

const Categorias = ({ onCategoriaSeleccionada }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias().then((data) => setCategorias(data));
  }, []);

  return (
    <section className="categoriasSection">
      <h2>Buscar por tipo de alojamiento</h2>
      <section className="categoriasGrid">
        {categorias.map((item) => (
          <Card
            key={item.titulo}
            {...item}
            onClick={() => onCategoriaSeleccionada({ category: item.titulo })}
          />
        ))}
      </section>
    </section>
  );
};

export default Categorias;
