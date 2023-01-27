import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="box-container">
        <div className="logo-container">
          <div className="logo">APP</div>
        </div>

        <div className="button-container">
          <Link to="/">
            <button className="button-navbar">Inicio</button>
          </Link>

          <Link to="/">
            <button className="button-navbar">Login</button>
          </Link>

          <Link to="/">
            <button className="button-navbar">CRUD</button>
          </Link>

          <Link to="/">
            <button className="button-navbar">Componentes</button>
          </Link>

          <Link to="/">
            <button className="button-navbar">Blog</button>
          </Link>
        </div>

        <div className="cart-container">
          <div className="cart-icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
