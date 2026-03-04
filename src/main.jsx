import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Accueil from "./pages/accueil/accueil.jsx";
import Header from "./composants/Header/Header.jsx";
import Footer from "./composants/Footer/Footer.jsx";
import Tag from "./composants/Tag/Tag.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Accueil />
    <Tag tagName="toto" />
    <Tag tagName="lula" />
    <Footer />
  </StrictMode>,
);
