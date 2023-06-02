/* eslint-disable react/prop-types */
import "./Burger.css";

export default function Burger({ open, setOpen }) {
  return (
    <button className="burger-btn" open={open} onClick={() => setOpen(!open)}>
      <div className="burger-btn-container"></div>
      <div className="burger-btn-container"></div>
      <div className="burger-btn-container"></div>
    </button>
  );

  // Burger.propTypes = {
  //   menuOpen: bool.isRequired,
  //   setMenuOpen: func.isRequired,
  // };
}
