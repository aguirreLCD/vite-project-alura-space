/* eslint-disable react/prop-types */
import "./MenuBurger.css";

export default function MenuBurger({ open }) {
  return (
    <nav className="menu-burger-nav" open={open}>
      <a href="" className="menu-burger-link">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>

      <a href="/" className="menu-burger-link">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/" className="menu-burger-link">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </nav>
  );
}
