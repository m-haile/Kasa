import { useParams, useNavigate, Link } from "react-router";
import "./Logement.scss";
import Carrousel from "../../composants/Carrousel/Carrousel";
import logements from "../../assets/logements.json";
import { useEffect } from "react";
import Tag from "../../composants/Tag/Tag";
import Avis from "../../composants/Avis/Avis";
import Collapse from "../../composants/Collapse/Collapse";

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
      <div className="milieu">
        <div className="titre-location-tags">
          <div className="titre-location">
            <h1>{logement.title}</h1>
            <span className="location">{logement.location}</span>
          </div>
          <div className="tags">
            {logement.tags.map((tag, i) => (
              <Tag key={i} tagName={tag} />
            ))}
          </div>
        </div>
        <div className="host-avis">
          <div className="host">
            <span className="name">{logement.host.name}</span>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="avatar"
            />
          </div>
          <Avis note={logement.rating} />
        </div>
      </div>
      <div className="listes">
        <Collapse titre="Description">{logement.description}</Collapse>
        <Collapse titre="Équipements">
          {logement.equipments.map((equipment, i) => (
            <li key={i}>{equipment}</li>
          ))}
        </Collapse>
      </div>
    </div>
  );
}
