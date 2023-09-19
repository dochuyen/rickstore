import express from "express";
import * as userCtrls from '../Controller/User.js'
const userRouter = express.Router();
userRouter.get("/", userCtrls.getUser);
userRouter.post("/login", userCtrls.loginUser);
userRouter.post("/register", userCtrls.registerUser);

export default userRouter;
