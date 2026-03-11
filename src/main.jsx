import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Accueil from "./pages/accueil/accueil.jsx";
import Header from "./composants/Header/Header.jsx";
import Footer from "./composants/Footer/Footer.jsx";
import Tag from "./composants/Tag/Tag.jsx";
import Thumb from "./composants/Thumb/Thumb.jsx";
import Collapse from "./composants/Collapse/Collapse.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Accueil />
    <Collapse titre="Titre">Blabla</Collapse>
    <Thumb
      titreImage="il était un petit navire il était un petit navire"
      imageUrl="https://www.popsci.com/wp-content/uploads/2023/05/15/ButterflyFamilyTree.png?quality=85"
    />
    <Footer />
  </StrictMode>,
);
