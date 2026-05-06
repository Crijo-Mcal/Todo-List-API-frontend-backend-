import type { Request, Response, NextFunction } from "express";
import { emailSchema } from "../../schema/ValidationSchema.js";


export default function emailValidation(req: Request, res: Response, next: NextFunction): void {

    const { email } = req.body
    const validatio = emailSchema.safeParse({ email });
    const error = validatio.error?.format();

    if (!validatio.success) {
        res.status(400).json({
            success: false,
            err: {
                typeError: "email",
                message: [
                    ...(error?.email?._errors || []),
                ]
            }
        })
        req.body = validatio.data;
        return
    }

    next()

}