import { useState } from "react";
import axios from "axios";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  inquiryType: "Kids Coding Academy",
  message: "",
  website: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  const apiBase = import.meta.env.VITE_API_BASE_URL;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      await axios.post(`${apiBase}/api/contact`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      setStatus({ loading: false, success: "Message sent successfully.", error: "" });
      setFormData(initialState);
    } catch (error) {
      const message =
        error?.response?.data?.error || "Unable to send message right now.";
      setStatus({ loading: false, success: "", error: message });
    }
  }

  return (
    <section className="section">
      <div className="container contact-grid">
        <div className="card">
          <span className="badge">Contact</span>
          <h1 className="page-title" style={{ fontSize: "3rem" }}>
            Register, ask questions, or start a partnership
          </h1>
          <p className="page-subtitle">
            Reach out for parent registration, school programs, church partnerships,
            or business analytics support.
          </p>
        </div>

        <div className="card">
          <h3>Quick Inquiry Form</h3>
          <form className="form-grid" onSubmit={handleSubmit}>
            <input
              className="input"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
              required
            />
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              required
            />
            <input
              className="input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              required
            />
            <select
              className="select"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
            >
              <option>Kids Coding Academy</option>
              <option>Data Analytics Consulting</option>
              <option>Corporate & School Training</option>
            </select>
            <textarea
              className="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you need"
              required
            />

            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex="-1"
              style={{ display: "none" }}
            />

            <button className="btn btn-primary" type="submit" disabled={status.loading}>
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.success ? <div style={{ color: "green" }}>{status.success}</div> : null}
            {status.error ? <div style={{ color: "crimson" }}>{status.error}</div> : null}
          </form>
        </div>
      </div>
    </section>
  );
}