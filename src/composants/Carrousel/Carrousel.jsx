import "./Carrousel.scss";
import flecheDroite from "../../assets/flecheDroite.png";
import { useState } from "react";

export default function Carrousel({ images }) {
  const [index, setIndex] = useState(0);

  function suivant() {
    const indexSuivant = index + 1 < images.length ? index + 1 : 0;
    setIndex(indexSuivant);
  }

  function precedent() {
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
            alt=""
            className="image-apres"
            onClick={suivant}
          />
          <img
            src={flecheDroite}
            alt=""
            className="image-avant"
            onClick={precedent}
          />
          <span>
            {index}/{images.length}
          </span>
        </>
      )}
    </div>
  );
}
