import "./Avis.scss";
import etoilePleine from "../../assets/etoilePleine.png";
import etoileVide from "../../assets/etoileVide.png";

export default function Avis({ note }) {
  return (
    <div className="avis">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={i < note ? etoilePleine : etoileVide}
          alt={i < note ? "étoile pleine" : "étoile vide"}
          className="etoile"
        />
      ))}
    </div>
  );
}
