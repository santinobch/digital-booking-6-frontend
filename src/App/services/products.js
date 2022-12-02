const urlBase = process.env.REACT_APP_API_URL;

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

  return fetch(`${urlBase}/products/${url}`).then((respuesta) => respuesta.json());
}

export function getProduct(id){
  return fetch(`${urlBase}/products/${id}`).then(response => response.json());
}

export function getRandomProducts() {
  return fetch(`${urlBase}/products/random`).then((respuesta) =>
    respuesta.json()
  );
}