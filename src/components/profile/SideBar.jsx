import avatar from "../../assets/avatar.svg";
import "../../blocks/SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img src={avatar} alt="User avatar" className="sidebar__avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;