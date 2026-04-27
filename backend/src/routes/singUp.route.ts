
import { Router } from "express";
import singUpController from "../controllers/singUp.controller.js"

const route = Router()

route.post('/singUp', singUpController)


export default route;