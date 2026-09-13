import "./Section.css";

export default function Section({
  id,
  eyebrow,
  title,
  muted = false,
  children,
}) {
  return (
    <section id={id} className={muted ? "section muted-section" : "section"}>
      <div className="container">
        <small className="eyebrow">{eyebrow}</small>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
