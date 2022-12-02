export default function parseBool(string) {

    if (string === undefined) {
        return false;
    } else {
        return JSON.parse(string);
    }
}