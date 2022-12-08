import "./listing.scss";

import React, { useEffect, useState } from "react";

import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import { getProducts } from "../../services/index.js";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";

const Listing = ({ hospedajes, error, bookings }) => {

  console.log(hospedajes)

  if (hospedajes.length === 0) {
    return <SpinnerLoader />;
  }

  return (
    <section className="listingSection">
      <h2>{!bookings ? "Recomendaciones" : null}</h2>
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
