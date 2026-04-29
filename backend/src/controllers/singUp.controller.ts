import type { Request, Response, NextFunction } from "express";
import singUpService from "../services/singUp.service.js";

export default async function singUpController(req: Request, res: Response, next: NextFunction) {
    try {
        const { name, email, password } = req.body;
        const responsesingUp = await singUpService(name, email, password);

        res.json(responsesingUp);
        return;

    } catch (err: any) {
        next(err);
    }
}