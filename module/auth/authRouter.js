import express from "express"
import { signupController, loginController, insertController } from "./authController.js";

const authRouter= express.Router();

authRouter.post("/signup", signupController)
authRouter.post("/login", loginController)
authRouter.post("/insert", insertController)

export default authRouter