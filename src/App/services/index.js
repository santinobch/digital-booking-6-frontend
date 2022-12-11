import { config } from "../Constants";

export function getCiudades() {
  return fetch(`${config.API_URL}/cities/`).then((respuesta) => respuesta.json());
}

//
export function getProducts(busqueda) {
  const { ciudad, category, fechaInicio, fechaFin } = busqueda || {};
  // const query = new URLSearchParams({});

  let url = "";

  if (category) {
    url = `category/${category}`;
  }
  if (ciudad) {
    url = `city/${ciudad}`;
  }
  if (fechaInicio && fechaFin) {
    url = `dates?from=${fechaInicio}&to=${fechaFin}`;
  }
  if (fechaInicio && fechaFin && ciudad) {
    url = `city/${ciudad}/dates?from=${fechaInicio}&to=${fechaFin}`;
  }

  return fetch(`${config.API_URL}/products/${url}`).then((respuesta) => {
    if (respuesta.ok) {
      return respuesta.json();
    }
    throw new Error("Su consulta no fue realizada");
  });
}

export function getCategories() {
  return fetch(`${config.API_URL}/categories/`).then((respuesta) => respuesta.json());
}

// Estos se renderizan en el home
export function getRandomProducts() {
  return fetch(`${config.API_URL}/products/random`).then((respuesta) =>
    respuesta.json()
  );
}

export function getProduct(id) {
  return fetch(`${config.API_URL}/products/${id}`).then((respuesta) =>
    respuesta.json()
  );
}
export function getFeatures() {
  return fetch(`${config.API_URL}/features/`).then((respuesta) => respuesta.json());
}

export function createProduct(data, token) {

  const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
   },
    body: JSON.stringify(data)
}

  return fetch(`${config.API_URL}/products/`, requestOptions).then((respuesta) => respuesta.json());
}
