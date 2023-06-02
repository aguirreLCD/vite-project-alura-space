import "./Footer.css";

import logoFacebook from "../../assets/facebook.svg";
import logoTwitter from "../../assets/twitter.svg";
import logoInstagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-item">
          <a href="facebook.com" target="_blank" rel="noreferrer">
            <img src={logoFacebook} alt="Facebook icon" />
          </a>
        </li>
        <li>
          <a href="twitter.com" target="_blank" rel="noreferrer">
            <img src={logoTwitter} alt="Twitter icon" />
          </a>
        </li>
        <li>
          <a href="instagram.com" target="_blank" rel="noreferrer">
            <img src={logoInstagram} alt="Instagram icon" />
          </a>
        </li>
      </ul>

      <section className="footer-info">
        <p>Designed by Alura. Developed by Lili.</p>
      </section>
    </footer>
  );
};

export default Footer;
