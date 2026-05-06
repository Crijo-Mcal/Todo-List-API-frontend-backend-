import { Router } from "express";
import refreshController from "../controllers/refresh.controller.js";
import refreshtokenValidation from "../middleware/validation/refreshToken_Validation.js";
import idValidation from "../middleware/validation/idValidation.js"
import emailValidation from "../middleware/validation/emailValidation.js";


const route = Router();

route.get('/refresh', idValidation, emailValidation, refreshtokenValidation, refreshController);


export default route;
