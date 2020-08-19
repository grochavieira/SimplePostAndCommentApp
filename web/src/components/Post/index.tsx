import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./styles.css";

export interface Post {
  id: number;
  username: string;
  content: string;
  image: string;
  image_url: string;
}

interface PostProps {
  post: Post;
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post-container">
      <div className="main-block">
        <div className="user">
          <FaUserCircle size={30} color="#256eff" />
          <p>{post.username}</p>
        </div>
        <div className="content">{post.content}</div>
      </div>
      {post.image ? (
        <div className="image-block">
          <img src={post.image_url} alt="" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PostItem;
