export default class ResponseModel {
    status = undefined;
    data = undefined;

    constructor(status, data) {
        this.status = status;
        this.data = data;
    }
}