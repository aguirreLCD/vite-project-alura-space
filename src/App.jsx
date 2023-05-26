import "./index.css";

import Header from "./components/Header/index.jsx";
import Menu from "./components/Menu/index.jsx";
import Banner from "./components/Banner/index.jsx";
import PhotoGallery from "./components/PhotoGallery/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="space-banner">
        <Menu />
        <Banner />
      </div>
      <div className="gallery">
        <PhotoGallery />
      </div>
      <Footer />
    </>
  );
}

export default App;
