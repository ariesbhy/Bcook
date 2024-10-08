const express = require("express");
const getAllUsers = require("./user.controller");
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
module.exports = userRouter;
