import React, { useState, FormEvent } from "react";

import Header from "../../components/Header";

import api from "../../services/api";

import "./styles.css";

function CreatePosts() {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      username,
      content,
    };

    const response = await api.post("/posts", data);
    console.log(response);
    alert("Post criado com sucesso!");
  }

  return (
    <>
      <Header currentTab="create" />
      <div className="create-container">
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="user">Usuário</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="user"
              placeholder="Digite seu nome de usuário..."
            />
          </div>
          <div className="input-block">
            <label htmlFor="user">Conteúdo do Post</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="user"
              placeholder="Digite sobre algum assunto, tema ou tópico..."
            />
          </div>

          <button type="submit">Criar Post</button>
        </form>
      </div>
    </>
  );
}

export default CreatePosts;
