import "./SelectMenu.css";
// import menu from "../../assets/Menu.svg";

export default function SelectMenu() {
  return (
    <>
      {/* <img src={menu} alt="" /> */}
      <select name="menu" id="menu">
        <option value="home" className="menu-list__item">
          Home
        </option>
        <option value="most-viewed">
          <img src="#" alt="" />
          <a href="#" className="menu-list__link">
            Most viewed
          </a>
        </option>
        <option value="most-liked"> Most liked</option>
        <option value="news">News</option>
        <option value="surprise-me">Suprise-me</option>
      </select>
    </>
  );
}
