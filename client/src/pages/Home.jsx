import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-layout">
          <div>
            <span className="badge">Accra-based Coding and Robotics Academy and Analytics brand</span>
            <h1 className="page-title">
              A smarter place for kids to learn code and businesses to grow with data.
            </h1>
            <p className="page-subtitle">
              Data Nest teaches Coding, Python, Data, Robotics and AI in a simple, engaging, and practical way while helping organizations make better decisions through analytics.
            </p>

            <div className="cta-row">
              <Link to="/register" className="btn btn-primary">Register a Child</Link>
              <Link to="/programs" className="btn btn-secondary">Explore Programs</Link>
            </div>

            <div className="stats">
              <div className="stat-box">
                <strong>8–16</strong>
                <span>Age range</span>
              </div>
              <div className="stat-box">
                <strong>12 Weeks</strong>
                <span>Structured term</span>
              </div>
              <div className="stat-box">
                <strong>2 Tracks</strong>
                <span>Academy + consulting</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <span className="badge">Kids Academy</span>
            <h3 className="section-title">Learn by building</h3>
            <p className="section-copy">
              Students learn Scratch, Python, data thinking, and beginner AI through mini projects and guided support.
            </p>

            <div className="hero-mini-grid">
              <div className="mini-box"><strong>Starter</strong><div>Animated Story</div></div>
              <div className="mini-box"><strong>Mid Program</strong><div>Python Quiz App</div></div>
              <div className="mini-box"><strong>Final Demo</strong><div>Parent Showcase</div></div>
              <div className="mini-box"><strong>Style</strong><div>Simple + hands-on</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <div className="card">
            <SectionHeader eyebrow="About" title="Who we are" copy="A clean, premium, Ghanaian brand helping kids and institutions grow through digital skills." />
            <Link to="/about" className="btn btn-secondary">Read More</Link>
          </div>
          <div className="card">
            <SectionHeader eyebrow="Programs" title="What we offer" copy="Kids coding classes, analytics consulting, and custom digital training for schools and organizations." />
            <Link to="/programs" className="btn btn-secondary">View Programs</Link>
          </div>
          <div className="card">
            <SectionHeader eyebrow="Pricing" title="Flexible plans" copy="Simple monthly and term-based pricing built for parents and growing families." />
            <Link to="/pricing" className="btn btn-secondary">See Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
