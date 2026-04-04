import Header from "./composants/Header/Header.jsx";
import Footer from "./composants/Footer/Footer.jsx";
import "./App.scss";
import APropos from "./pages/APropos/APropos.jsx";

import { BrowserRouter, Routes, Route } from "react-router";
import Accueil from "./pages/Accueil/Accueil.jsx";
import Erreur from "./pages/Erreur/Erreur.jsx";
import Logement from "./pages/Logement/Logement.jsx";

//C'est pour indiquer les Routes et pour le layout
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />

          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<APropos />} />
            <Route
              path="/logement/:id"
              errorElement={<Erreur />}
              element={<Logement />}
            />
            <Route path="*" element={<Erreur />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
