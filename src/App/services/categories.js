const urlBase = process.env.REACT_APP_API_URL;

export function getCategorias() {
    return fetch(`${urlBase}/categories/`).then((respuesta) =>
      respuesta.json()
    ); 
}