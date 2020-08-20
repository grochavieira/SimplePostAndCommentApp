import React, { useState, FormEvent } from "react";
import Header from "../../components/Header";
import ImageDropzone from "../../components/ImageDropzone";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import api from "../../services/api";

import "./styles.css";

function CreatePosts() {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();
    data.append("username", username);
    data.append("content", content);

    if (selectedFile) {
      data.append("image", selectedFile);
    }

    try {
      const response = await api.post("/posts", data);
      console.log(response);
      alert("Post criado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Não foi possível criar o Post!");
    }
  }

  return (
    <>
      <Header currentTab="create" />
      <div className="create-container">
        <form onSubmit={handleSubmit}>
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
            label="Conteúdo do Post"
            name="user"
            placeholder="Digite sobre algum assunto, tema ou tópico..."
          />

          <ImageDropzone onFileUploaded={setSelectedFile} />
          <Button label="Criar Post" />
        </form>
      </div>
    </>
  );
}

export default CreatePosts;
