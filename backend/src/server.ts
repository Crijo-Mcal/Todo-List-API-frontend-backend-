import express from "express";
import dotenv from "dotenv";
import login_route from "./routes/login.route.js"
import singUp_route from "./routes/singUp.route.js"
import globalErrorHandles from "./middleware/globalErrorHandles.js";
import showAllTasks from "./routes/showAllTasks.route.js"
import refreshRouter from "./routes/refresh.route.js"
import cookieParse from "cookie-parser"
import cors from "cors";

import bodyValidation from "./middleware/validation/bodyValidation.js";

dotenv.config();
const poth = process.env.BACKEND_PORTH || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParse());

app.get('/', (req, res) => {
    res.send("server is running");
})

/* global Validation */
app.use('/', bodyValidation)

/* routes */
app.use('/', login_route);
app.use('/', singUp_route);
app.use('/', showAllTasks);
app.use('/', refreshRouter)


/* haldle Global Error */
app.use(globalErrorHandles)


app.listen(poth, () => {
    console.log(`sever is running on porth ${poth}`);
})