import { BriefcaseBusiness } from "lucide-react";
import Section from "./Section";
import "./Services.css";
const services = [
  [
    "Full Stack Web Development",
    "Responsive interfaces and reliable backend systems built as one cohesive product.",
  ],
  [
    "AI-Powered Applications",
    "Practical LLM features for analysis, generation, and guided user workflows.",
  ],
  [
    "REST API Development",
    "Well-structured APIs with validation, authentication, and maintainable architecture.",
  ],
  [
    "AI-Integrated Full Stack Development",
    "AI capabilities connected to React, Node, Express, and MongoDB applications.",
  ],
];
export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Capabilities"
      title="Ways I can contribute."
      muted
    >
      <div className="service-grid">
        {services.map(([title, description], index) => (
          <article key={title}>
            <div>
              <b>0{index + 1}</b>
              <BriefcaseBusiness />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
