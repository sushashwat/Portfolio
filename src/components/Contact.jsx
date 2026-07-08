import useReveal from "../hooks/useReveal";
import { contactLinks } from "../data";

export default function Contact() {
  const [ref, inView] = useReveal();

  return (
    <section id="contact" ref={ref} className={`reveal ${inView ? "in-view" : ""}`}>
      <p className="eyebrow center">// 05 — contact</p>
      <h2>Let's build something</h2>
      <p className="contact-sub">
        Open to entry-level developer roles. Reach out — I usually reply within a day.
      </p>

      <div className="contact-grid">
        {contactLinks.map((l) => (
          <a
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener"
            className="contact-card"
            key={l.label}
          >
            <i className={l.icon}></i>
            <span className="contact-label">{l.label}</span>
            <span className="contact-value">{l.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
