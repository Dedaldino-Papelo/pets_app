import express, { Request, Response } from "express";
import { UserController } from "./Controller/UserController";
import protect from "./middleware/auth";

const router = express.Router()

const userController = new UserController()

router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/posts", protect, userController.getPosts)

export default router