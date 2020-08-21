import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import PostItem, { Post } from "../../components/PostItem";
import Pagination from "../../components/Pagination";
import { FiSearch } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";

function ListPosts() {
  const [searchType, setSearchType] = useState("all");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTotalPosts, setCurrentTotalPosts] = useState(0);

  async function getPosts() {
    const { data } = await api.get(`posts?page=${currentPage}`);

    setCurrentTotalPosts(data.totalResults);
    setPosts(data.posts);
  }

  useEffect(() => {
    if (currentPage !== 0) {
      getPosts();
    }
  }, [currentPage]);

  async function searchAllPosts() {
    setCurrentPage(1);
    await getPosts();
  }

  async function searchPost() {
    try {
      const { data } = await api.get(`posts/${postId}`);
      const auxArray = [];
      auxArray.push(data.serializedPost);
      setPosts(auxArray);
      setCurrentTotalPosts(0);
    } catch (error) {
      console.log(error);
      alert("Não foi possível pesquisar o post especificado!");
    }
  }

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
      <div className="search-block">
        <FiSearch size={20} color="#333" />
        <input
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? searchPost() : {})}
          type="text"
          placeholder="Pesquise um post pelo id..."
        />
      </div>
      <div className="search-all">
        <button onClick={searchAllPosts}>Listar Todos os Posts</button>
      </div>
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
