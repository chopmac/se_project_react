import React from "react";
import { Link } from "react-router-dom";
import "../blocks/Header.css";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";
import ToggleSwitch from "./ToggleSwitch"; 

function Header({ onCreateModal, city }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img src={logo} alt="WTWR logo" className="header__logo" />
        </Link>
        <p className="header__date-location">
          {currentDate}, {city}
        </p>
      </div>
      <div className="header__user-container">
        <ToggleSwitch />
        
        <button
          className="header__add-clothes-btn"
          type="button"
          onClick={onCreateModal}
        >
          + Add Clothes
        </button>

       
        <Link to="/profile" className="header__link">
          <div className="header__user-info">
            <p className="header__user-name">Terrence Tegegne</p>
            <img
              src={avatar}
              alt="User avatar"
              className="header__user-avatar"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;