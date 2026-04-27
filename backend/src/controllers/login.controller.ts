import type { Request, Response } from "express";
import singUpService from "../services/logIn.service.js"


export default async function logInController(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const responseLogIn = await singUpService(email, password)

        res.status(200).json({ success: true, token1: 12128, token2: 12129 })

    } catch (err: any) {
        res.status(err.status || 500).json({ success: false, message: err.message || "server error" })
    }
}