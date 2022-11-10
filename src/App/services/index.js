const urlBase = process.env.REACT_APP_API_URL;

export function getCiudades() {
  return fetch(`${urlBase}/ciudades/all`).then((respuesta) => respuesta.json());
}

//
export function getProductos(busqueda) {
  const { ciudad, categoria, fecha } = busqueda || {};
  // const query = new URLSearchParams({});

  let url = "all/";

  if (categoria) {
    url = `categoria/${categoria}`;
  }

  if (ciudad) {
    url = `ciudad/${ciudad}`;
  }

  return fetch(`${urlBase}/productos/${url}`).then((respuesta) =>
    respuesta.json()
  );
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

export function getProducto(id){
  return fetch(`${urlBase}/productos/${id}`).then((respuesta) => respuesta.json())
}
