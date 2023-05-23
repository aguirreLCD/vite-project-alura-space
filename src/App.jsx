import "./index.css";

import Banner from "./components/Banner/index.jsx";
import Header from "./components/Header/index.jsx";
import Menu from "./components/Menu/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  return (
    <>
      <Header />

      <div className="space-banner">
        <Menu />
        <Banner />
      </div>

      <Footer />
    </>
  );
}

export default App;
