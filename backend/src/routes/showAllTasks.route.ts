import { Router } from "express";
import taskController from "../controllers/showAllTask.controller.js";
import id_Validation from "../middleware/validation/id_Validation.js"
import accessToken_Validation from "../middleware/validation/accessToken_Validation.js"

const route = Router()

route.post('/showAlltasks', accessToken_Validation, id_Validation, taskController)


export default route;