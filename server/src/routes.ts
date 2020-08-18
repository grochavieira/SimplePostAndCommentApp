import express from "express";

import PostsController from "./controllers/PostsController";
import CommentsController from "./controllers/CommentsController";

const routes = express.Router();
const postsController = new PostsController();
const commentsController = new CommentsController();

routes.get("/posts", postsController.index);
routes.get("/posts/:id", postsController.show);
routes.post("/posts", postsController.create);

routes.get("/posts/:id/comments", commentsController.index);
routes.post("/posts/:id/comments", commentsController.create);

export default routes;
