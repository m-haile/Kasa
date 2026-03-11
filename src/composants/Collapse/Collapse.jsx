import "./Collapse.scss";

export default function Collapse({ titre, children }) {
  return (
    <div className="collapse">
      <h2>{titre}</h2>
      <p>{children}</p>
    </div>
  );
}
