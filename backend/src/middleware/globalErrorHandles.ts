import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utility/AppError.js";

export default function HandleGlobalError(err: any, req: Request, res: Response, next: NextFunction) {

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            typeError: err.typeError,
            message: err.message
        });
    }

    console.error(err.message);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

}