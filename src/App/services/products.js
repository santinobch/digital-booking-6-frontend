import { config } from "../Constants";

export function getProducts(busqueda) {
  const { ciudad, category, fecha } = busqueda || {};
  // const query = new URLSearchParams({});

  let url = "";

  if (category) {
    url = `categories/${category}`;
  }
  if (ciudad) {
    url = `cities/${ciudad}`;
  }

  return fetch(`${config.API_URL}/products/${url}`).then((respuesta) => respuesta.json());
}

export function getProduct(id){
  return fetch(`${config.API_URL}/products/${id}`).then(response => response.json());
}

export function getRandomProducts() {
  return fetch(`${config.API_URL}/products/random`).then((respuesta) =>
    respuesta.json()
  );
}