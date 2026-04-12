import express from "express";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many contact attempts. Please try again later." },
});

function sanitize(value = "") {
  return String(value).replace(/[<>]/g, "").trim();
}

function isValidEmail(email = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/", contactLimiter, async (req, res) => {
  const fullName = sanitize(req.body.fullName);
  const email = sanitize(req.body.email);
  const phone = sanitize(req.body.phone);
  const inquiryType = sanitize(req.body.inquiryType);
  const message = sanitize(req.body.message);
  const website = sanitize(req.body.website);

  if (website) {
    return res.status(400).json({ error: "Spam detected." });
  }

  if (!fullName || !email || !phone || !inquiryType || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  if (
    fullName.length > 100 ||
    email.length > 120 ||
    phone.length > 30 ||
    inquiryType.length > 100
  ) {
    return res.status(400).json({ error: "One or more fields are too long." });
  }

  if (message.length < 10 || message.length > 2000) {
    return res
      .status(400)
      .json({ error: "Message must be between 10 and 2000 characters." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Data Nest Website <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Data Nest Inquiry: ${inquiryType}`,
      text: `
New Website Inquiry

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Inquiry Type: ${inquiryType}
Message: ${message}
      `,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send message." });
  }
});

export default router;