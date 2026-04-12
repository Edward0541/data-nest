import SectionHeader from "../components/SectionHeader";

export default function About() {
  return (
    <section className="section">
      <div className="container grid grid-2">
        <div className="card">
          <SectionHeader
            eyebrow="About Data Nest"
            title="A clean home for learning, building, and insight"
            copy="Data Nest is a Ghana-based initiative helping children, schools, and organizations grow through practical digital skills."
          />
          <p className="section-copy">
            We believe technology should be simple to understand, exciting to use, and useful in real life. That is why we teach with structure, patience, and hands-on learning.
          </p>
          <p className="section-copy">
            For businesses and institutions, we also deliver practical data analytics support that turns raw information into clear reporting, useful dashboards, and better decisions.
          </p>
        </div>

        <div className="card notice-box">
          <SectionHeader eyebrow="Why people choose us" title="Built for clarity, trust, and growth" />
          <ul className="simple-list">
            <li>Beginner-friendly teaching for children ages 8–16</li>
            <li>Hands-on projects instead of theory only</li>
            <li>Parent updates and visible progress</li>
            <li>Premium, organized learning experience</li>
            <li>Practical business analytics support</li>
            <li>Built in Ghana for future-ready African minds</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
