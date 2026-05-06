import type { Request, Response, NextFunction } from "express"


export default function showAllTaskValidation(req: Request, res: Response, next: NextFunction) {

    try {

        if (!req.body.id) {
            throw new Error("required id")
        }

        if (isNaN(Number(req.body.id))) {
            throw new Error("id must be number")
        }

        next()
    } catch (err: any) {
        return res.status(401).json({ success: false, err: { errorType: "id", message: err.message || "required id" } })
    }

}