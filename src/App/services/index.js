const urlBase = process.env.REACT_APP_API_URL;

export function getCiudades() {
  return fetch(`${urlBase}/cities/`).then((respuesta) => respuesta.json());
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

  return fetch(`${urlBase}/products/${url}`).then((respuesta) => {
    if (respuesta.ok) {
      return respuesta.json();
    }
    throw new Error("Su consulta no fue realizada");
  });
}

export function getCategories() {
  return fetch(`${urlBase}/categories/`).then((respuesta) => respuesta.json());
}

// Estos se renderizan en el home
export function getRandomProducts() {
  return fetch(`${urlBase}/products/random`).then((respuesta) =>
    respuesta.json()
  );
}

export function getProduct(id) {
  return fetch(`${urlBase}/products/${id}`).then((respuesta) =>
    respuesta.json()
  );
}
export function getFeatures() {
  return fetch(`${urlBase}/features/`).then((respuesta) => respuesta.json());
}

export function createProduct(data, token) {
  const config = {
    method: "POST",
    body: JSON.stringify(data),
    Authorization: `Bearer ${token}`,
  };
  return fetch(`${urlBase}/products/`, config).then((respuesta) =>
    respuesta.status()
  );
}
