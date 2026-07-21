import useReveal from '../hooks/useReveal'
const stats = [
  { num: "3", label: "Deployed full-stack apps" },
  { num: "2", label: "Web dev certifications" },
  { num: "MERN", label: "Primary stack" },
  { num: "DSA", label: "Currently sharpening" },
];

export default function About() {
    const[ref, inView] = useReveal();
    
  return (
    <section id="about" ref={ref} className={`reveal ${inView ? "in-view" : ""}`}>
      <p className="eyebrow center">// 01 — about</p>
      <h2>Who I am</h2>

      <div className="about-grid">
        <p className="about-text">
          I'm a full-stack developer working across the MERN stack — React and
          Redux Toolkit on the frontend, Node.js and Express on the backend,
          MongoDB for data. I don't just build UIs; I take projects from a blank
          repo through auth, APIs, database design, and production deployment on
          Vercel, Render, and MongoDB Atlas.
        </p>

        <div className="about-stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
