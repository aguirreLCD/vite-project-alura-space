import "./Banner.css";

import banner from "../../assets/Banner.svg";

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="Alura Space Banner" />
    </div>
  );
}

export default Banner;
