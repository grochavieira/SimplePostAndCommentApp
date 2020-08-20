import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

import "./styles.css";

export interface Comment {
  id: number;
  post_id: number;
  username: string;
  content: string;
}

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className="comment-container">
      <div className="user-block">
        <FaRegUserCircle size={20} />
        <p>{comment.username}</p>
      </div>
      <div className="commentary">
        <p>{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentItem;
