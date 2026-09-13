import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import SocialLink from "./SocialLink";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Available for opportunities</p>
          <h1>
            Full Stack <span>AI Developer</span>
          </h1>
          <p className="lead">
            Building practical, scalable web applications with modern full-stack
            technologies and AI-powered solutions.
          </p>
          <p className="muted">
            I'm Lokesh Likhar, a B.Tech graduate in Artificial Intelligence,
            specializing in full-stack development, REST APIs, and LLM-powered
            product experiences that solve real-world problems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects <ArrowRight />
            </a>
            <a className="button button-outline" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="hero-social-links" aria-label="Social links">
            <SocialLink href="https://github.com/lokeshlikhar" label="GitHub">
              <Github />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/lokeshlikhar/"
              label="LinkedIn"
            >
              <Linkedin />
            </SocialLink>
            <SocialLink href="mailto:lokeshlikhar01@gmail.com" label="Email">
              <Mail />
            </SocialLink>
          </div>
        </div>
        <div className="identity-card">
          <img
            src="https://i.postimg.cc/wT6zzX2z/Chat-GPT-Image-Jul-28-2026-03-07-07-PM.png"
            alt="Lokesh Likhar"
          />
        </div>
      </div>
    </section>
  );
}
