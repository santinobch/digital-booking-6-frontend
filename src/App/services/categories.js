const urlBase = process.env.REACT_APP_API_URL;

export function getCategories() {
    return fetch(`${urlBase}/categories/`).then((respuesta) =>
      respuesta.json()
    ); 
}