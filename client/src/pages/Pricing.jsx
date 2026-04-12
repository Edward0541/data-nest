import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

const plans = [
  {
    name: "STARTER",
    price: "GHS 600",
    note: "Early Bird Three Months Plan",
    items: ["2 classes per week", "Weekend sessions", "Beginner support", "Progress updates"]
  },
  {
    name: "STANDARD",
    price: "GHS 800",
    note: "Recommended Three Months Plan",
    items: ["8 classes per month", "Scratch, Python, data & AI", "Projects", "Demo day"]
  },
  {
    name: "FULL TERM",
    price: "GHS 2,000",
    note: "Discounted full year payment",
    items: ["Full 12-week term", "Certificate", "Priority support", "Best value"]
  }
];

export default function Pricing() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Pricing"
          title="Clear plans for parents and growing families"
          copy="Choose a payment option that fits your child while keeping the learning experience practical and premium."
        />

        <div className="grid grid-3" style={{ marginTop: 28 }}>
          {plans.map((plan) => (
            <div className="card" key={plan.name}>
              <span className="badge">{plan.name}</span>
              <h3 style={{ fontSize: "2rem", marginBottom: 6 }}>{plan.price}</h3>
              <p className="section-copy">{plan.note}</p>
              <ul className="simple-list">
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div style={{ marginTop: 20 }}>
                <Link to="/register" className="btn btn-primary">Choose Plan</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
