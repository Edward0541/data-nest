import SectionHeader from "../components/SectionHeader";

const phases = [
  {
    month: "Month 1",
    title: "Logic & Foundations",
    detail: "Introduction to coding, Scratch, sequences, loops, storytelling, and creative project thinking."
  },
  {
    month: "Month 2",
    title: "Python Basics",
    detail: "Variables, input and output, conditions, loops, mini games, quiz apps, and confidence with real code."
  },
  {
    month: "Month 3",
    title: "Data & AI Introduction",
    detail: "Charts, patterns, beginner data projects, simple AI ideas, and final presentations for parents."
  }
];

export default function Curriculum() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Curriculum"
          title="A 3-month path from curiosity to confidence"
          copy="Every term is structured to help children move from basic logic into coding, data, and beginner AI exposure."
        />

        <div className="grid grid-3" style={{ marginTop: 28 }}>
          {phases.map((phase) => (
            <div className="card" key={phase.month}>
              <span className="badge">{phase.month}</span>
              <h3>{phase.title}</h3>
              <p className="section-copy">{phase.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
