import type { Request, Response, NextFunction } from "express";
import sigUpService from "../services/singUp.service.js";

export default async function singUpController(req: Request, res: Response, next: NextFunction) {
    try {
        const { name, email, password } = req.body;
        await sigUpService(name, email, password);

        res.json({
            success: true,
            message: "success to sing up"
        });
        return;

    } catch (err: any) {
        next(err);
    }
}