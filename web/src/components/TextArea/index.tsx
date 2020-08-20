import React from "react";

import "./styles.css";

interface TextAreaProps {
  value: string;
  setValue: (username: string) => void;
  label: string;
  name: string;
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  setValue,
  label,
  name,
  placeholder,
}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
