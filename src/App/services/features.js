import { config } from "../Constants";

export function getFeatures() {
    return fetch(`${config.API_URL}/features/`).then((respuesta) => respuesta.json());
}