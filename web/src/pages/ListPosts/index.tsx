import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import PostItem, { Post } from "../../components/Post";

import "./styles.css";

function ListPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getPosts() {
      const { data } = await api.get("posts");

      console.log(data);
      setPosts(data);
    }

    getPosts();
  }, []);
  return (
    <>
      <Header currentTab="list" />
      <div className="list-container">
        {posts.map((post: Post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default ListPosts;
