import type { Request, Response, NextFunction } from "express"
import { checkAccessToken } from '../../utility/token.js'
import { error } from "console";

export default function accessTokenValidation(req: Request, res: Response, next: NextFunction) {

    try {

        const accessToken = req.headers.authorization?.split(' ')[1]

        if (!accessToken) {
            throw new Error("required access token")
        }

        checkAccessToken(accessToken);

        next()

    } catch (err: any) {

        const [jwt, ...rest] = err.message.split(' ');
        if (jwt == "jwt") {
            return res.status(401).json({ success: false, err: { errorType: "AccessToken", message: ["access toke", rest].join(' ') || "access toke erro" } })
        }

        return res.status(401).json({ success: false, err: { errorType: "AccessToken", message: err.message || "access toke erro" } })
    }
}