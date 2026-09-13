import "./Footer.css";
export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer>
      <div className="container footer-content">
        <div>
          <b>Lokesh Likhar</b>
          <p>Full Stack AI Developer</p>
        </div>
        <button className="footer-contact" onClick={() => scrollToSection("contact")}>
          Let's work together
        </button>
        <p> 2026 Lokesh Likhar. All rights reserved.</p>
      </div>
    </footer>
  );
}
