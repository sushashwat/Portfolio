import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Tools I build with</h2>

      <div>
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}