import "./Accueil.scss";
import logements from "../../assets/logements.json";
import { NavLink } from "react-router";
import Thumb from "../../composants/Thumb/Thumb";
import ImagePage from "../../composants/ImagePage/ImagePage";
import cote from "../../assets/cote.png";

export default function Accueil() {
  return (
    <div className="accueil">
      <ImagePage
        image={cote}
        alt="côte"
        titre={
          <>
            Chez vous,
            <wbr /> partout et ailleurs
          </>
        }
      />
      <div className="logements">
        {logements.map((logement) => (
          <li key={logement.id}>
            <NavLink to={"/logement/" + logement.id}>
              <Thumb imageUrl={logement.cover} titreImage={logement.title} />
            </NavLink>
          </li>
        ))}
      </div>
    </div>
  );
}
