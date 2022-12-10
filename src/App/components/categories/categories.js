import "./categories.scss";

import Card from "../../components/card/card";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";
import { useCategories } from "../../hooks";

const Categories = ({ onCategorySeleccionada }) => {
  const categories = useCategories();

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
            onClick={() => onCategorySeleccionada({ category: item.id })}
          />
        ))}
      </section>
    </section>
  );
};

export default Categories;
