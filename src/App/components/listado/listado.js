import "./listado.scss";

import React, { useEffect, useState } from "react";

import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import { getProductos } from "../../services";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";

const Listado = ({ filtros }) => {
  const [hospedajes, setHospedajes] = useState([]);

  useEffect(() => {
    getProductos(filtros).then((data) => setHospedajes(data));
  }, [filtros]);

  if(hospedajes.length === 0){
    return (
        <SpinnerLoader/>
      )
  }

  return (
    <section className="listadoSection">
      <h2>Recomendaciones</h2>
      <div className="listadoGrid">
        {hospedajes.map((item) => (
          <RecommendedCard key={item.titulo} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Listado;
