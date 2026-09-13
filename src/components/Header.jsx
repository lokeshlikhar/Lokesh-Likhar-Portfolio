import { Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "../data/portfolio";
import "./Header.css";

export default function Header({
  dark,
  menuOpen,
  onToggleTheme,
  onOpenMenu,
  onCloseMenu,
}) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onCloseMenu();
  };

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link className="brand" to="/" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); onCloseMenu(); }}>
          <span className="brand-name">Lokesh Likhar</span>
        </Link>
        <div className="header-actions">
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="nav-link">
                {item}
              </button>
            ))}
          </nav>
          <button
            className="icon-button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {dark ? <Sun /> : <Moon />}
          </button>
          <button
            className="icon-button menu-button"
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-navigation"
          >
            <Menu />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="nav-link">
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
