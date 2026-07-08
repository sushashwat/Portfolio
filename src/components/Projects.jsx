import { projects } from "../data";
export default function Projects() {
  return (
    <section id="projects">
      <h2>Things I've shipped</h2>

      <div className="projects-container">
        {projects.map((p) => (
          <article className="project-card" key={p.name}>
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
              <a href={p.live} target="_blank" rel="noopener">
                Live Demo
              </a>
              <a href={p.github} target="_blank" rel="noopener">
                Source
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}