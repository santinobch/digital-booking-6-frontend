import "./categories.scss";

import Card from "../../components/card/card";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";
import { useState, useEffect } from "react";
import { getCategories } from "../../services/categories";

const Categories = ({ onCategorySeleccionada, setLoading }) => {

  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, [])
  


  if (categories !== undefined) {
        if (categories.length === 0) {
        return <SpinnerLoader />;
        }
        return (
            <section className="categoriesSection">
                <h2>Buscar por tipo de alojamiento</h2>
                <section className="categoriesGrid">
                    {categories.map((item) => (
                        <Card
                        key={item.titulo}
                        {...item}
                        onClick={() => {
                          setLoading(true)
                          onCategorySeleccionada({ category: item.id })   
                        }}
                        />
                    ))}
                </section>
            </section>
        );
  }
  
};

export default Categories;
