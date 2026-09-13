import { Check, ExternalLink, Github, Sparkles } from "lucide-react";
import Section from "./Section";
import { projects } from "../data/portfolio";
import "./Projects.css";
export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects that connect product thinking with implementation."
      muted
    >
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card ${project.featured ? "featured" : ""}`}
            key={project.name}
          >
            <div className="project-top">
              <b>0{index + 1}</b>
              {(project.featured || project.ai) && (
                <span>
                  <Sparkles /> AI
                </span>
              )}
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <ul>
              {project.features.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <div className="actions">
              {project.github && (
                <a
                  className="button button-outline"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  className="button button-primary"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink /> Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
