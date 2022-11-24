const urlBase = process.env.REACT_APP_API_URL;

export function getProductos(busqueda) {
  const { ciudad, categoria, fecha } = busqueda || {};
  // const query = new URLSearchParams({});

  let url = "";

  if (categoria) {
    url = `categories/${categoria}`;
  }
  if (ciudad) {
    url = `cities/${ciudad}`;
  }

  return fetch(`${urlBase}/products/${url}`).then((respuesta) => respuesta.json());
}

export function getProducto(id){
  return fetch(`${urlBase}/products/${id}`).then((respuesta) => respuesta.json())
}

export function getReservas(id){
  return fetch(`${urlBase}/bookings/product/${id}`).then((respuesta) => respuesta.json())
}


export function getRandomProductos() {
  return fetch(`${urlBase}/products/random`).then((respuesta) =>
    respuesta.json()
  );
}