import Accueil from "./pages/accueil/accueil.jsx";
import Header from "./composants/Header/Header.jsx";
import Footer from "./composants/Footer/Footer.jsx";
import Thumb from "./composants/Thumb/Thumb.jsx";
import Collapse from "./composants/Collapse/Collapse.jsx";

import "./App.scss";
import ImagePage from "./composants/ImagePage/ImagePage.jsx";

import Montagne from "./assets/montagne.png";
import APropos from "./pages/APropos/APropos.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <APropos />
      </div>
      <Footer />
    </>
  );
}

export default App;
