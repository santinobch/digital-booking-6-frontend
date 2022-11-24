import "./listado.scss";

import React, { useEffect, useState } from "react";

import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import { getProductos } from "../../services/index.js";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";

const Listado = ({ filtros }) => {
  const [hospedajes, setHospedajes] = useState([]);
  const [error, setError] = useState("");

  console.log(filtros)

  useEffect(() => {
    setError("");
    getProductos(filtros)
      .then((data) => {
        setHospedajes(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [filtros]);

  if (hospedajes.length === 0) {
    return <SpinnerLoader />;
  }

  return (
    <section className="listadoSection">
      <h2>Recomendaciones</h2>
      <div className="listadoGrid">
        {error ? (
          <p>{error}</p>
        ) : (
          hospedajes?.map((item) => (
            <RecommendedCard key={item.titulo} {...item} />
          ))
        )}
      </div>
    </section>
  );
};

export default Listado;
