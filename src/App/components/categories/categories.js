import "./categories.scss";

import React, { useEffect, useState } from "react";

import Card from "../../components/card/card";
import { getCategories } from "../../services/categories";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";

const Categories = ({ onCategorySeleccionada }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  if(categories.length === 0){
    return (
        <SpinnerLoader/>
      )
  }
  return (
    <section className="categoriesSection">
      <h2>Buscar por tipo de alojamiento</h2>
      <section className="categoriesGrid">
        {categories.map((item) => (
          <Card
            key={item.titulo}
            {...item}
            onClick={() => onCategorySeleccionada({ category: item.id })}
          />
        ))}
      </section>
    </section>
  );
};

export default Categories;