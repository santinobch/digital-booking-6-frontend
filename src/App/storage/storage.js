export function getStoreItem(item) {
    let i = JSON.parse(localStorage.getItem(item));

    if (i !== undefined) {
        return i;
    }
}

export function setStoreItem(item, data) {
    return localStorage.setItem(item, JSON.stringify(data));
}
