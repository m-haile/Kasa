import Accueil from "./pages/accueil/accueil.jsx";
import Header from "./composants/Header/Header.jsx";
import Footer from "./composants/Footer/Footer.jsx";
import Thumb from "./composants/Thumb/Thumb.jsx";
import Collapse from "./composants/Collapse/Collapse.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Accueil />
      <Collapse titre="Titre">Blabla</Collapse>
      <Collapse titre="Équipements">
        Climatisation <br />
        Wi-Fi <br />
        Cuisine <br />
        Espace de travail
        <br />
        Fer à repasser
        <br />
        Sèche-cheveux
        <br />
        Cintres
        <br />
      </Collapse>
      <Thumb
        titreImage="il était un petit navire il était un petit navire"
        imageUrl="https://www.popsci.com/wp-content/uploads/2023/05/15/ButterflyFamilyTree.png?quality=85"
      />
      <Footer />
    </>
  );
}

export default App;
