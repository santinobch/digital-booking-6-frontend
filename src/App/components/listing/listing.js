import "./listing.scss";

import React, { useEffect, useState } from "react";

import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import { getProducts } from "../../services/index.js";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";

const Listing = ({ filtros }) => {
  const [hospedajes, setHospedajes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    getProducts(filtros)
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
    <section className="listingSection">
      <h2>Recomendaciones</h2>
      <div className="listingGrid">
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

export default Listing;
