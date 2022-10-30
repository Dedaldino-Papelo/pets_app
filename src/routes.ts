import express, { Request, Response } from "express";
import { CommentController } from "./Controller/Comment.Controller";
import { PostController } from "./Controller/PostController";
import { UserController } from "./Controller/UserController";
import protect from "./middleware/auth";

const router = express.Router()

const userController = new UserController()
const postController = new PostController()
const commentController = new CommentController()

router.post("/register", userController.register)
router.post("/login", userController.login)

router.post("/post/:userId", postController.Create)
router.get("/posts", postController.Show)
router.get("/post/:id", postController.getPostById)
router.delete("/post/:id", postController.delete)

router.get("/post/:id/comment", commentController.create)


export default router