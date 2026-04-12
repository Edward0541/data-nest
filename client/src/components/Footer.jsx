import logo from "../assets/data-nest-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="brand">
          <img src={logo} alt="Data Nest logo" />
          <div>
            <h1>DATA NEST</h1>
            <p>Building future-ready minds</p>
          </div>
        </div>
        <div className="footer-copy">
          <div>Phone: +233541720489 / +233209377376</div>
          <div>Email: edwardandresansah@gmail.com</div>
          <div>Location: Accra, Ghana</div>
        </div>
      </div>
    </footer>
  );
}
