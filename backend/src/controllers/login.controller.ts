import type { Request, Response, NextFunction } from "express";
import singUpService from "../services/logIn.service.js"


export default async function logInController(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body;
        const responseLogIn = await singUpService(email, password)

        res.status(200).json(responseLogIn)

    } catch (err: any) {
        next(err)
    }
}