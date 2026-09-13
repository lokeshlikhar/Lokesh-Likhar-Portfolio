import { GraduationCap } from "lucide-react";
import Section from "./Section";
import "./Education.css";
export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation in Artificial Intelligence."
    >
      <article className="education">
        <GraduationCap />
        <div>
          <h3>B.Tech Artificial Intelligence</h3>
          <p>G.H. Raisoni College of Engineering Nagpur</p>
        </div>
        <div>
          <b>2022–2026</b>
          <p>CGPA 8.0</p>
        </div>
      </article>
    </Section>
  );
}
