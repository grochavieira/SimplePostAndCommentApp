import React from "react";

import "./styles.css";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div className="button-container">
      <button type="submit">{label}</button>
    </div>
  );
};

export default Button;
