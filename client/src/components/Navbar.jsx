import { NavLink, Link } from "react-router-dom";
import logo from "../assets/data-nest-logo.png";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/programs", "Programs"],
  ["/curriculum", "Curriculum"],
  ["/pricing", "Pricing"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="container navbar">
        <Link to="/" className="brand">
          <img src={logo} alt="Data Nest logo" />
          <div>
            <h1>DATA NEST</h1>
            <p>Clean. Tested. Ready.</p>
          </div>
        </Link>

        <nav className="nav-links">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "active" : "")}>
              {label}
            </NavLink>
          ))}
          <Link to="/register" className="btn btn-gold">Register</Link>
        </nav>
      </div>
    </header>
  );
}
