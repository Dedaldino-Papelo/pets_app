import express, { Request, Response } from "express";
import { UserController } from "./Controller/UserController";

const router = express.Router()

const userController = new UserController()

router.post("/register", userController.register)
router.post("/login", userController.login)

export default router