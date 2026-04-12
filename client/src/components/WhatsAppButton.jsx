export default function WhatsAppButton() {
  const phone = "233541720489";
  const text = encodeURIComponent("Hello, I would like to know more about Data Nest.");
  const url = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      W
    </a>
  );
}
