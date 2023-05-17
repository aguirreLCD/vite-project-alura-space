import "./Header.css";

import logoAlura from "../../assets/logo.png";
import menu from "../../assets/Menu.svg";
import search from "../../assets/search.png";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#" target="_blank">
              <img src={menu} alt="" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src={logoAlura} alt="" />
            </a>
          </li>

          <li>
            <a href="#" target="_blank">
              <input type="search" placeholder="What are you looking for?" />
              <img src={search} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
