export default function parseBool(string) {

    if (string === undefined || string === 'false' || string === false) {
        return false;
    } else {
        return JSON.parse(string);
    }
}