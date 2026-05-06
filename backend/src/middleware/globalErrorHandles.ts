import type { Request, Response, NextFunction } from "express";
import { AppError } from "../error/AppError.js";

export default function HandleGlobalError(err: any, req: Request, res: Response, next: NextFunction): void {

    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            success: false,
            err: {
                typeError: err.typeError,
                message: err.message
            }
        });
        return
    }


    console.error(err.message);

}