import "./Header.scss";
import kasaLogo from "../../assets/kasaLogo.png";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <img src={kasaLogo} />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/apropos">A Propos</NavLink>
      </nav>
    </header>
  );
}
