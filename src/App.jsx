import "./index.css";

import Header from "./components/Header/index.jsx";
import Menu from "./components/Menu/index.jsx";
import Banner from "./components/Banner/index.jsx";
import PhotoGallery from "./components/PhotoGallery/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <PhotoGallery />
      <Trending />
      <Footer />
    </>
  );
}

export default App;
