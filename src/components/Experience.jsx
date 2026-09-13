import { Check } from "lucide-react";
import Section from "./Section";
import "./Experience.css";
const achievements = [
  "Built web components with HTML, CSS, JavaScript, React, Node, and Express.",
  "Built and integrated REST APIs.",
  "Created reusable frontend components and database functionality.",
  "Worked across frontend and backend development.",
];
export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Practical experience"
      title="Experience across the full web stack."
    >
      <article className="experience">
        <div>
          <h3>Web Development Intern</h3>
          <b>Anorg Technology</b>
        </div>
        <time>June 2025 – November 2025</time>
        <ul>
          {achievements.map((item) => (
            <li key={item}>
              <Check />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}
