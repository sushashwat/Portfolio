import useReveal from "../hooks/useReveal";
import { skillGroups } from "../data";

export default function Skills() {
  const [ref, inView] = useReveal();

  return (
    <section id="skills" ref={ref} className={`reveal ${inView ? "in-view" : ""}`}>
      <p className="eyebrow center">// 02 — stack</p>
      <h2>Tools I build with</h2>

      <div className="stack-grid">
        {skillGroups.map((group) => (
          <div className="stack-group" key={group.title}>
            <h3>
              <i className={group.icon}></i> {group.title}
            </h3>
            <div className="chip-row">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
