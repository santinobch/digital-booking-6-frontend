const urlBase = process.env.REACT_APP_API_URL;

export function getCiudades() {
    return fetch(`${urlBase}/cities/`).then((respuesta) => respuesta.json());
}