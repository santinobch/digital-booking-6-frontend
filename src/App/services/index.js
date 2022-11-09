const urlBase = process.env.REACT_APP_API_URL;

export function getCiudades() {
  return fetch(`${urlBase}/ciudades/all`).then((respuesta) => respuesta.json());
}

// 
export function getHospedaje(busqueda) {
  const query = new URLSearchParams(busqueda);
  return fetch(`${urlBase}/hospedajes?${query}`).then((respuesta) =>
    respuesta.json()
  );
}

export function getCategorias() {
  return fetch(`${urlBase}/categorias/all`).then((respuesta) => respuesta.json());
}

// Estos se renderizan en el home
export function getRandomProductos(){
  return fetch(`${urlBase}/productos/random`).then((respuesta) => respuesta.json())
}
