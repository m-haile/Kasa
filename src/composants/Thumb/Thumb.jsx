import "./Thumb.scss";

export default function Thumb({ imageUrl, titreImage }) {
  return (
    <div className="thumb">
      <img src={imageUrl} alt={titreImage} />
      <h2>{titreImage}</h2>
    </div>
  );
}
