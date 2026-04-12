export default function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div>
      <span className="badge">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
