import useReveal from "../hooks/useReveal";
import { certifications } from "../data";

export default function Certifications() {
  const [ref, inView] = useReveal();

  return (
    <section
      id="certifications"
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""}`}
    >
      <p className="eyebrow center">// 04 — certifications</p>
      <h2>Certifications</h2>

      <div className="cert-cards">
        {certifications.map((c) => (
          <div className="card" key={c.title}>
            <i className="fa-solid fa-certificate cert-icon"></i>
            <h3>{c.title}</h3>
            <p className="cert-sub">{c.subtitle}</p>
            <a href={c.file} target="_blank" rel="noopener" className="btn btn-ghost btn-sm">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
