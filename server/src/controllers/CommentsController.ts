import { Request, Response } from "express";
import knex from "../database/connection";

class CommentsController {
  async index(request: Request, response: Response) {
    const { id } = request.params;

    const post = await knex("posts")
      .join("comments", "posts.id", "=", "comments.post_id")
      .where("comments.post_id", id)
      .select("comments.*");

    if (!post) {
      return response.status(404).json({ message: "Não existem comentários" });
    }

    return response.json(post);
  }

  async create(request: Request, response: Response) {
    const { author, content } = request.body;
    const { id } = request.params;

    const comment = {
      author,
      content,
      post_id: id,
    };

    console.log(comment);

    const ids = await knex("comments").insert(comment);

    const comment_id = ids[0];

    const post = await knex("posts").where("id", id);

    return response.json({ ...comment, comment_id, post });
  }
}

export default CommentsController;
