import "./Carrousel.scss";
import flecheDroite from "../../assets/flecheDroite.png";
import { useState } from "react";

export default function Carrousel({ images }) {
  const [index, setIndex] = useState(0);

  function suivante() {
    const indexSuivant = index + 1 < images.length ? index + 1 : 0;
    setIndex(indexSuivant);
  }

  function precedente() {
    const indexPrecedent = index - 1 > 0 ? index - 1 : images.length - 1;
    setIndex(indexPrecedent);
  }

  return (
    <div className="carrousel">
      <img src={images[index]} alt="" className="image-principale" />

      {images.length > 1 && (
        <>
          <img
            src={flecheDroite}
            alt="image suivante"
            className="image-apres"
            onClick={suivante}
          />
          <img
            src={flecheDroite}
            alt="image précédente"
            className="image-avant"
            onClick={precedente}
          />
          <span>
            {index + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  );
}
