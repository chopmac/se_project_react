import React, { useContext } from "react";
import "../../blocks/SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ onEditProfile, onLogOut }) {
  const currentUser = useContext(CurrentUserContext);

  const renderAvatar = () => {
    if (currentUser?.avatar) {
      return (
        <img
          src={currentUser.avatar}
          alt={currentUser.name || "User avatar"}
          className="sidebar__avatar"
        />
      );
    }
    const firstLetter = currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : "";
    return (
      <div className="sidebar__avatar-placeholder">
        {firstLetter}
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        {renderAvatar()}
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      
      <div className="sidebar__controls">
        <button 
          className="sidebar__button" 
          type="button"
          onClick={onEditProfile}
        >
          Change profile data
        </button>
        <button 
          className="sidebar__button sidebar__logout" 
          type="button"
          onClick={onLogOut}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;