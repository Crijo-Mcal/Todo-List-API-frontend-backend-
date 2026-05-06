import type { Request, Response, NextFunction } from "express";
import showAllTaskService from '../services/showAllTask.service.js'

export default async function taskController(req: Request, res: Response, next: NextFunction) {

    try {

        const { id } = req.body
        const result = await showAllTaskService(id)

        return res.status(200).json(result);

    } catch (err: any) {
        next(err);
    }

}