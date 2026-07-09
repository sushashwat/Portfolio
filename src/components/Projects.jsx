import useReveal from "../hooks/useReveal";
import { projects } from "../data";

export default function Projects() {
  const [ref, inView] = useReveal();

  return (
    <section id="projects" ref={ref} className={`reveal ${inView ? "in-view" : ""}`}>
      <p className="eyebrow center">// 03 — projects</p>
      <h2>Things I've shipped</h2>

      <div className="projects-container">
        {projects.map((p) => (
          <article className="project-card" key={p.name}>
            <div className="project-top">
              <span className="branch-tag">
                <i className="fa-solid fa-code-branch"></i> main
              </span>
              <span className="status-badge status-live">
                <span className="status-dot"></span> deployed
              </span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="tech-row">
              {p.tech.map((t) => (
                <span className="tech-pill" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={p.live}
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-sm"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener"
                className="btn btn-ghost btn-sm"
              >
                <i className="fa-brands fa-github"></i> Source
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="more-projects">
        <a
          href="https://github.com/sushashwat?tab=repositories"
          target="_blank"
          rel="noopener"
          className="more-link"
        >
          <i className="fa-brands fa-github"></i> See more on GitHub{" "}
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}
