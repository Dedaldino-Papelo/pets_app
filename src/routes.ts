import express, { Request, Response } from "express";
import { PostController } from "./Controller/PostController";
import { UserController } from "./Controller/UserController";
import protect from "./middleware/auth";

const router = express.Router()

const userController = new UserController()
const postController = new PostController()

router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/post/:userId", postController.Create)
router.get("/posts", postController.Show)
router.get("/post/:id", postController.PostById)


export default router