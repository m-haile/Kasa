import Accueil from "./pages/Accueil/Accueil.jsx";
import Header from "./composants/Header/Header.jsx";
import Footer from "./composants/Footer/Footer.jsx";
import "./App.scss";
import APropos from "./pages/APropos/APropos.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<APropos />} />

            {/* <Route path="*" element={<Error404 />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
