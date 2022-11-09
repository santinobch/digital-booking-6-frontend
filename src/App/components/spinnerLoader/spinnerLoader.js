import React from "react";
import { Spinner } from "react-bootstrap";
import "./spinnerLoader.scss"

export default function SpinnerLoader() {
  return (
    <div className="contenedorSpinner">
      <Spinner animation="border" role="status" className="spinnerReactstrap">
        <span className="visually-hidden">Loading...</span>
      </Spinner>      
    </div>
  );
}