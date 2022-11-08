import axios from "axios";

const urlBase = process.env.REACT_APP_API_URL;

export function getCiudades() {
  return fetch(`${urlBase}/ciudades`).then((respuesta) => respuesta.json());
}

export function getHospedaje(busqueda) {
  const query = new URLSearchParams(busqueda);
  return fetch(`${urlBase}/hospedajes?${query}`).then((respuesta) =>
    respuesta.json()
  );
}

export function getCategorias() {
  return fetch(`${urlBase}/categorias`).then((respuesta) => respuesta.json());
}
