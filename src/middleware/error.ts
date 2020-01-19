// Middleware function to help manage and issue the error response to client

import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    error: HttpException,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const status = error.status || 500;
    const message =
        error.message || "Generic. 500 Internal Server Error.";

    response.status(status).send(message);
};
