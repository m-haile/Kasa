import { useParams, useNavigate } from "react-router";
import "./Logement.scss";
import Carrousel from "../../composants/Carrousel/Carrousel";
import logements from "../../assets/logements.json";
import { useEffect } from "react";

export default function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((l) => l.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/erreur");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="logement">
      <Carrousel images={logement.pictures} />
      <h1>{logement.title}</h1>
    </div>
  );
}
