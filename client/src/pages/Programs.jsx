import SectionHeader from "../components/SectionHeader";

const programs = [
  {
    title: "Kids Coding Academy",
    description:
      "Weekend and Holiday Classes Introducing Children To Scratch, Python, Robotics, and AI through practical guided learning.",
    tags: ["Ages 8–16", "Beginner-friendly", "Project-based"]
  },
  {
    title: "Data Analytics Consulting",
    description:
      "Dashboards, KPI tracking, reporting automation, and practical analytics solutions for businesses and institutions.",
    tags: ["Power BI", "Excel", "Insights"]
  },
  {
    title: "Corporate & School Training",
    description:
      "Tailored workshops for schools, churches, ministries, and organizations seeking practical digital upskilling.",
    tags: ["Custom training", "On-site", "Hands-on"]
  }
];

export default function Programs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Programs"
          title="What Data Nest offers"
          copy="Choose from student learning, school partnerships, and business analytics support."
        />

        <div className="grid grid-3" style={{ marginTop: 28 }}>
          {programs.map((program) => (
            <div key={program.title} className="card">
              <h3>{program.title}</h3>
              <p className="section-copy">{program.description}</p>
              <div>
                {program.tags.map((tag) => (
                  <span key={tag} className="program-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
