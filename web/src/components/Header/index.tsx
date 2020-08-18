import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface HeaderProps {
  currentTab: string;
}

const Header: React.FC<HeaderProps> = ({ currentTab }) => {
  return (
    <header className="container">
      <ul>
        <Link to="/">
          <li className={`${currentTab === "create" ? "on" : ""}`}>
            Novo Post
          </li>
        </Link>
        <Link to="/list">
          <li className={`${currentTab === "list" ? "on" : ""}`}>
            Listar Posts
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
