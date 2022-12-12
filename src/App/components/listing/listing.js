import "./listing.scss";
import notFound from '../../../imgs/icons/not-found.png'

import React, { useEffect, useState } from "react";

import RecommendedCard from "../../components/recommendedCard/recommendedCard";
import SpinnerLoader from "../spinnerLoader/spinnerLoader";

const Listing = ({ loading, hospedajes, error, bookings }) => {

  if (hospedajes.length === 0 || loading) {
    return <SpinnerLoader />;
  }

  if(hospedajes.code === "NF-202" || hospedajes.code === "NF-205"){
    return (
      <div className="notFound">
        <img src={notFound} alt='No bookings'/>
        <h5>No hay alojamientos que coincidan con los parámetros de búsqueda</h5>
      </div>
    )
  } 

  return (
    <section className="listingSection" data-testid="listSection">
      <h2>{!bookings ? "Recomendaciones" : null}</h2>
      <div className="listingGrid">
        {error ? (
          <p>{error}</p>
        ) : (
          hospedajes?.map((item) => (
            <RecommendedCard bookings={bookings} key={item.titulo} {...item} />
          ))
        )}
      </div>
    </section>
  );
};

export default Listing;
