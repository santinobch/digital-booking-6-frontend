import "./listado.scss";

import React, { useEffect, useState } from "react";

import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";
import { getProductos } from "../../services";

const Listado = ({ filtros }) => {
  const [hospedajes, setHospedajes] = useState([]);
  const [error, setError] = useState("");

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
