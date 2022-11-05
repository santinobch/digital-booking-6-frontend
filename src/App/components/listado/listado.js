import "./listado.scss";

import React, { useEffect, useState } from "react";

import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import { getHospedaje } from "../../services";

const Listado = ({ busqueda, filtros }) => {
  const [hospedajes, setHospedajes] = useState([]);

  useEffect(() => {
    let query = busqueda;

    if (filtros.category) {
      query = filtros;
    }

    getHospedaje(query).then((data) => setHospedajes(data));
  }, [busqueda, filtros]);

  return (
    <section className="listadoSection">
      <h2>Recomendaciones</h2>
      <div className="listadoGrid">
        {hospedajes.map((item) => (
          <RecommendedCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Listado;
