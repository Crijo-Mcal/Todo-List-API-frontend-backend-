import type { Request, Response, NextFunction } from "express";


export default async function refreshtokenValidation(req: Request, res: Response, nex: NextFunction) {

    try {
        const refreshToken = req.cookies.refreshToken

        if (!refreshToken) {
            throw new Error("require refresh token")
        }
        nex();
    } catch (err: any) {
        return res.status(401).json({ success: false, err: { typeError: "refreshToken", message: err.message || "require refresh token" } })
    }

}