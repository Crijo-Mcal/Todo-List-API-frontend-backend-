import { Router } from "express";
import accessToken_Validation from "../middleware/validation/accessToken_Validation.js"

const route = Router()

route.post('/showAlltasks', accessToken_Validation)


export default route;