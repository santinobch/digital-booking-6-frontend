export function getStoreItem(item) {

    let i = localStorage.getItem(item);

    let iJson;

    if (i !== 'undefined') {
        iJson = JSON.parse(i);
        return i;
    } else {
        return undefined;
    }
}

export function setStoreItem(item, data) {
    localStorage.setItem(item, JSON.stringify(data));
}

export function removeItem(item) {
    localStorage.removeItem(item, undefined);
}