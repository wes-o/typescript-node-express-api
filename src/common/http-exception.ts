// Helper class to manage client requests to endpoints, or routes that do not exist
// A 404 Bad Request Error Code is sent as a response to client

export default class HttpException extends Error {
    status: number;
    message: string;

    constructor(status: number, message: string) {
        super(message);

        this.status = status;
        this.message = message;
    }
}
