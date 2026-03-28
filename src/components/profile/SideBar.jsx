import avatar from "../../assets/avatar.svg";
import "../../blocks/SideBar.css";

// Destructure the username from the props object
function SideBar({ username = "Terrence Tegegne" }) { 
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img src={avatar} alt="User avatar" className="sidebar__avatar" />
        <p className="sidebar__username">{username}</p>
      </div>
      
      <div className="sidebar__controls">
        <button className="sidebar__button" type="button">
          Change profile data
        </button>
        <button className="sidebar__button sidebar__logout" type="button">
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;