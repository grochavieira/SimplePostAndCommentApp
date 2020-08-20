import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import "./styles.css";

interface ImageDropzoneProps {
  onFileUploaded: (file: File) => void;
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);

      onFileUploaded(file);
      setSelectedFileUrl(fileUrl);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Post Thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Arreste e solte uma imagem aqui,
          <br /> ou clique para selecionar imagens...
        </p>
      )}
    </div>
  );
};

export default ImageDropzone;
