import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <Link to="/add">
            <h2>AddProduct</h2>
          </Link>
          <Link to="/list">
            <h2>ListProduct</h2>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
