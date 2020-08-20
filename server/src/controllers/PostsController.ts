import { Request, Response } from "express";
import knex from "../database/connection";

class PostsController {
  async index(request: Request, response: Response) {
    const page = Number(request.query.page);
    const posts = await knex("posts").select("*");

    let serializedPosts = posts.map((post) => {
      return {
        ...post,
        image_url: post.image
          ? `http://localhost:3333/uploads/${post.image}`
          : post.image,
      };
    });

    const totalResults = serializedPosts.length;

    serializedPosts = serializedPosts.slice(5 * (page - 1), page * 5);

    return response.json({
      posts: serializedPosts,
      totalResults: totalResults,
    });
  }
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const post = await knex("posts").where("id", id).first();

    if (!post) {
      return response.status(404).json({ message: "Post not found." });
    }

    const comments = await knex("posts")
      .join("comments", "posts.id", "=", "comments.post_id")
      .where("comments.post_id", id)
      .select("comments.*");

    const serializedPost = {
      ...post,
      image_url: post.image
        ? `http://localhost:3333/uploads/${post.image}`
        : post.image,
    };

    return response.json({ serializedPost, comments });
  }
  async create(request: Request, response: Response) {
    const { username, content } = request.body;

    let post;
    if (request.file) {
      post = {
        image: request.file.filename,
        username,
        content,
      };
    } else {
      post = {
        username,
        content,
      };
    }

    const ids = await knex("posts").insert(post);
    const post_id = ids[0];
    return response.json({ ...post, post_id });
  }
}

export default PostsController;
