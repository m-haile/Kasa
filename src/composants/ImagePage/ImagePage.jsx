import "./ImagePage.scss";

export default function ImagePage({ image, alt, titre }) {
  return (
    <div className="image-page">
      <img className={titre && "sombre"} src={image} alt={alt} />
      {titre && <h1>{titre}</h1>}
    </div>
  );
}
