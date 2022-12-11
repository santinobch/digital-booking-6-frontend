import "./listing.scss";
import notFound from '../../../imgs/icons/not-found.png'

import React, { useEffect, useState } from "react";

import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";

const Listing = ({ hospedajes, error, bookings }) => {

  console.log(hospedajes);

  if (hospedajes.length === 0) {
    return <SpinnerLoader />;
  }

  if(hospedajes.code === "NF-202"){
    return (
    <div className="notFound">
      <img src={notFound} alt='No bookings'/>
      <h5>No existen productos registrados en esta ciudad</h5>
</div>
)
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
