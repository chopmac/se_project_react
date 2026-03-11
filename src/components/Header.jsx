import "../blocks/Header.css";
import logo from "../assets/logo.svg"; 
import avatar from "../assets/avatar.svg"; 

function Header({ onCreateModal, city }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="WTWR logo" className="header__logo" />
        <p className="header__date-location">
          {currentDate}, {city}
        </p>
      </div>
      <div className="header__user-container">
        <button
          className="header__add-clothes-btn"
          type="button"
          onClick={onCreateModal}
        >
          + Add Clothes
        </button>
        <p className="header__user-name">Terrence Tegegne</p>
        <img src={avatar} alt="User avatar" className="header__user-avatar" />
      </div>
    </header>
  );
}

export default Header;