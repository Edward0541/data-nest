export default function Register() {
  const formLink = import.meta.env.VITE_GOOGLE_FORM_LINK;

  return (
    <section className="section">
      <div className="container grid grid-2">
        <div className="card">
          <span className="badge">Registration</span>
          <h1 className="page-title" style={{ fontSize: "3rem" }}>Register for Data Nest</h1>
          <p className="page-subtitle">
            Secure your child’s place in our next batch. Click the button below to open the registration form.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={formLink} target="_blank" rel="noreferrer">
              Open Google Form
            </a>
            <a className="btn btn-secondary" href="https://wa.me/233541720489" target="_blank" rel="noreferrer">
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <div className="card notice-box">
          <h3>What happens after registration?</h3>
          <ul className="simple-list">
            <li>You submit the parent registration form</li>
            <li>Data Nest contacts you to confirm details</li>
            <li>You receive payment instructions</li>
            <li>Your child is placed in a suitable class group</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
