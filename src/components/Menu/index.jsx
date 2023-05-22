import "./Menu.css";

import homeIcon from "../../assets/icons/Home-active.svg";
import mostLiked from "../../assets/icons/most-liked-inactive.svg";
import mostViewed from "../../assets/icons/most-views-inactive.svg";
import news from "../../assets/icons/news-inactive.svg";
import surpriseMe from "../../assets/icons/surprise-me-inactive.svg";

function Menu() {
  return (
    <>
      <nav>
        <ul className="menu-list">
          <li className="menu-list__item">
            <img src={homeIcon} alt="" />
            <a href="#" className="menu-list__link">
              Home
            </a>
          </li>

          <li className="menu-list__item">
            <img src={mostViewed} alt="" />
            <a href="#" className="menu-list__link">
              Most viewed
            </a>
          </li>

          <li className="menu-list__item">
            <img src={mostLiked} alt="" />
            <a href="#" className="menu-list__link">
              Most liked
            </a>
          </li>

          <li className="menu-list__item">
            <img src={news} alt="" />
            <a href="#" className="menu-list__link">
              New images
            </a>
          </li>

          <li className="menu-list__item">
            <img src={surpriseMe} alt="" />
            <a href="#" className="menu-list__link">
              Surprise-me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
