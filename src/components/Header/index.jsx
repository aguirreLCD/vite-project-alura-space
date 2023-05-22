import "./Header.css";

import logoAlura from "../../assets/logo.png";
import menu from "../../assets/Menu.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={menu} alt="Menu Icon" className="menu-icon" />

        <img src={logoAlura} alt="Alura Space Logo" />
      </div>

      <div className="header-search">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="header-search-input"
        />
      </div>
    </header>
  );
}

export default Header;
