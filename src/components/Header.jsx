import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../blocks/Header.css";
import logo from "../assets/logo.svg";
import ToggleSwitch from "./ToggleSwitch";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Header({ onCreateModal, city, isLoggedIn, onRegisterModal, onLoginModal }) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const renderAvatar = () => {
    if (currentUser?.avatar) {
      return (
        <img
          src={currentUser.avatar}
          alt={currentUser.name || "User avatar"}
          className="header__avatar"
        />
      );
    }
    const firstLetter = currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : "";
    return (
      <div className="header__avatar-placeholder">
        {firstLetter}
      </div>
    );
  };

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

        {isLoggedIn ? (
          <>
            <button
              className="header__add-clothes-btn"
              type="button"
              onClick={onCreateModal}
            >
              + Add Clothes
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-info">
                <p className="header__user-name">{currentUser?.name}</p>
                {renderAvatar()}
              </div>
            </Link>
          </>
        ) : (
          <div className="header__auth-container">
            <button
              className="header__auth-btn"
              type="button"
              onClick={onRegisterModal}
            >
              Sign up
            </button>
            <button
              className="header__auth-btn"
              type="button"
              onClick={onLoginModal}
            >
              Log in
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;