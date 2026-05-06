import type { Request, Response, NextFunction } from "express";
import refreshService from "../services/refresh.service.js"; import { success } from "zod";


export default async function refreshController(req: Request, res: Response, nex: NextFunction) {
    try {
        const { email, id } = req.body
        const refreshToken = req.cookies.refreshToken;
        const resService = await refreshService(id, email, refreshToken);

        res.cookie('refreshToken', resService.RefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        })

        return res.status(200).json({ success: true, data: resService.data })


    } catch (err: any) {
        nex(err)
    }
}