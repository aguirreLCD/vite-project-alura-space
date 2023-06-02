import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="" className="brand-name"></a>
      <button
        className="hamburguer"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      ></button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
