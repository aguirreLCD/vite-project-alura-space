/* eslint-disable react/prop-types */
import "./Card.css";
import openIcon from "../../assets/open.png";
import favoriteIcon from "../../assets/favorite.png";

export default function Card({ item }) {
  return (
    <li className="card">
      <img src={item.image} alt={item.title} className="card-img" />
      <p className="card-description">{item.title}</p>

      <div className="card-container">
        <p className="card-info">{item.credits}</p>
        <span>
          <img src={favoriteIcon} alt="favourite icon" className="card-icon" />
          <img src={openIcon} alt="open modal icon" className="card-icon" />
        </span>
      </div>
    </li>
  );
}
