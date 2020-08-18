import { Request, Response } from "express";
import knex from "../database/connection";

class PostsController {
  async index(request: Request, response: Response) {
    const posts = await knex("posts").select("*");

    return response.json(posts);
  }
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const post = await knex("posts").where("id", id).first();

    if (!post) {
      return response.status(404).json({ message: "Post not found." });
    }

    return response.json(post);
  }
  async create(request: Request, response: Response) {
    const { username, content } = request.body;

    const post = {
      image: "image",
      username,
      content,
    };

    const ids = await knex("posts").insert(post);
    const post_id = ids[0];
    return response.json({ ...post, post_id });
  }
}

export default PostsController;
