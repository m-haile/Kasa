import { NavLink } from "react-router";
import "./Erreur.scss";

export default function Erreur() {
  return (
    <div className="erreur">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </div>
  );
}
