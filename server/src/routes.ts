import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import PostsController from "./controllers/PostsController";
import CommentsController from "./controllers/CommentsController";

const routes = express.Router();
const postsController = new PostsController();
const commentsController = new CommentsController();

const upload = multer(multerConfig);

routes.get("/posts", postsController.index);
routes.get("/posts/:id", postsController.show);
routes.post("/posts", upload.single("image"), postsController.create);

routes.get("/posts/:id/comments", commentsController.index);
routes.post("/posts/:id/comments", commentsController.create);

export default routes;
