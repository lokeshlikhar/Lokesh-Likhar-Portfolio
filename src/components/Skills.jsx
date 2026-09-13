import Section from "./Section";
import { skillGroups } from "../data/portfolio";
import "./Skills.css";
export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical toolkit"
      title="Skills built around shipping complete applications."
      muted
    >
      <div className="card-grid">
        {skillGroups.map(([title, Icon, skills]) => (
          <article className="card" key={title}>
            <h3>
              <Icon />
              {title}
            </h3>
            <div className="tag-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
