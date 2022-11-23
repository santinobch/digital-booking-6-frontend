const urlBase = process.env.REACT_APP_API_URL;

export function getCiudades() {
  return fetch(`${urlBase}/cities/`).then((respuesta) => respuesta.json());
}

//
export function getProductos(busqueda) {
  const { ciudad, categoria, fechaInicio, fechaFin } = busqueda || {};
  // const query = new URLSearchParams({});

  let url = "";

  if (categoria) {
    url = `category/${categoria}`;
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

export function getCategorias() {
  return fetch(`${urlBase}/categories/`).then((respuesta) => respuesta.json());
}

// Estos se renderizan en el home
export function getRandomProductos() {
  return fetch(`${urlBase}/products/random`).then((respuesta) =>
    respuesta.json()
  );
}

export function getProducto(id) {
  return fetch(`${urlBase}/products/${id}`).then((respuesta) =>
    respuesta.json()
  );
}
