import Section from "./Section";
import "./About.css";
const details = [
  ["Degree", "B.Tech AI"],
  ["College", "G.H. Raisoni College of Engineering Nagpur"],
  ["Graduation", "2026"],
  ["CGPA", "8.0"],
  ["Focus", "Full Stack + AI Development"],
];
export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="Engineering useful products, end to end."
    >
      <div className="two-column">
        <div>
          <p className="body-copy">
            I'm a Full Stack AI Developer and B.Tech Artificial Intelligence
            graduate who enjoys turning ambiguous requirements into dependable,
            working software. My work spans responsive React interfaces, Node
            and Express services, database design, authentication, and practical
            LLM integrations that make applications genuinely more useful — not
            AI for its own sake.
          </p>
          <p className="body-copy">
            I value clean architecture, thoughtful user experience, and learning
            by building complete systems across the frontend and backend. I'm
            currently deepening my focus on AI engineering — including LLM
            application development, RAG, FastAPI, and LangChain — to build
            products where the AI layer is as reliable as the rest of the stack.
          </p>
        </div>
        <div className="detail-grid">
          {details.map(([label, value]) => (
            <div key={label}>
              <small>{label}</small>
              <b>{value}</b>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
