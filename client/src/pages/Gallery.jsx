import SectionHeader from "../components/SectionHeader";

const placeholders = [
  "Kids building their first Scratch animations",
  "Python practice sessions with guided support",
  "Parent demo day and project presentations",
  "Data Nest shirts, flyers, and class setup",
  "Consulting dashboards and reporting visuals",
  "Holiday bootcamp and learning moments"
];

export default function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Gallery"
          title="Show the experience behind the brand"
          copy="Replace these placeholders with your flyer, logo mockups, class photos, shirt designs, and student project screenshots."
        />

        <div className="grid grid-3" style={{ marginTop: 28 }}>
          {placeholders.map((item) => (
            <div className="card" key={item}>
              <div className="gallery-placeholder">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
