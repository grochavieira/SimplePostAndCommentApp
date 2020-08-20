import React from "react";

import "./styles.css";

interface InputProps {
  value: string;
  setValue: (username: string) => void;
  label: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  value,
  setValue,
  label,
  name,
  placeholder,
}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
