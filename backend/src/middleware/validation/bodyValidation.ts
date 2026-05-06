import type { Request, Response, NextFunction } from "express";

export default function bodyValidation(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            err: {
                typeError: "body",
                message: "There is no body in this request",
            },
        });
    }

    next();
}