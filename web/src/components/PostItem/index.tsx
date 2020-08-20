import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CommentItem, { Comment } from "../CommentItem";
import "./styles.css";
import api from "../../services/api";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

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
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  async function searchComments() {
    setShowComments(!showComments);
    if (!showComments) {
      const { data } = await api.get(`posts/${post.id}/comments`);
      console.log(data);
      setComments(data);
    }
  }

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
      <div className="comment-block">
        {showComments ? (
          <div className="comment-section">
            <div onClick={searchComments} className="show comments">
              <p> Comentários </p> <IoIosArrowDown size={20} />{" "}
            </div>

            {comments.length > 0 ? (
              comments.map((comment: Comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))
            ) : (
              <div className="message">
                <p> Não existe comentários para esse post...</p>
              </div>
            )}

            <div className="add-comment">
              <form onSubmit={() => {}}>
                <Input
                  value={username}
                  setValue={setUsername}
                  label="Usuário"
                  name="user"
                  placeholder="Digite seu nome de usuário..."
                />
                <TextArea
                  value={content}
                  setValue={setContent}
                  label="Comentário"
                  name="user"
                  placeholder="Digite algo sobre o post acima..."
                />
                <Button label="Adicionar Comentário" />
              </form>
            </div>
          </div>
        ) : (
          <div onClick={searchComments} className="hide comments">
            <p> Comentários </p> <IoIosArrowUp size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;