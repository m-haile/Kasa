import "./Collapse.scss";
import fleche from "../../assets/fleche.png";
import { useState } from "react";

export default function Collapse({ titre, children }) {
  //afficher c'est variable et setAfficher une fonction pour modiffier le variable afficher
  const [afficher, setAfficher] = useState(false);
  function toggleAfficher() {
    setAfficher(!afficher);
  }

  return (
    <div className="collapse">
      <h2>
        {titre}
        <img
          className={afficher && "rotate"}
          src={fleche}
          alt="Afficher le contenu"
          onClick={toggleAfficher}
        />
      </h2>
      <p className={afficher && "show"}>{children}</p>
    </div>
  );
}
