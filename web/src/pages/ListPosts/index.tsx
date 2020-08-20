import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import PostItem, { Post } from "../../components/PostItem";
import Pagination from "../../components/Pagination";

import "./styles.css";

function ListPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTotalPosts, setCurrentTotalPosts] = useState(0);

  async function getPosts() {
    const { data } = await api.get(`posts?page=${currentPage}`);

    console.log(data);
    setCurrentTotalPosts(data.totalResults);
    setPosts(data.posts);
  }

  useEffect(() => {
    getPosts();
  }, [currentPage]);

  function goBack() {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
    }
    window.scrollTo(0, 0);
  }

  function goForward() {
    if (currentPage < Math.ceil(currentTotalPosts / 5)) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
    }
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header currentTab="list" />
      <div className="list-container">
        {posts.map((post: Post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        goBack={goBack}
        goForward={goForward}
        totalPosts={currentTotalPosts}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default ListPosts;
