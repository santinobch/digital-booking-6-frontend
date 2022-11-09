const urlBase = process.env.REACT_APP_API_URL;

export function getCiudades() {
  return fetch(`${urlBase}/ciudades/all`).then((respuesta) => respuesta.json());
}

//
export function getProductos(busqueda) {
  const defaultQuery = "all/";
  const query = new URLSearchParams(busqueda);
  return fetch(
    `${urlBase}/productos/${
      busqueda?.ciudad ? `ciudad/${busqueda?.ciudad}` : defaultQuery
    }`
  ).then((respuesta) => respuesta.json());
}

export function getCategorias() {
  return fetch(`${urlBase}/categorias/all`).then((respuesta) =>
    respuesta.json()
  );
}

// Estos se renderizan en el home
export function getRandomProductos() {
  return fetch(`${urlBase}/productos/random`).then((respuesta) =>
    respuesta.json()
  );
}
