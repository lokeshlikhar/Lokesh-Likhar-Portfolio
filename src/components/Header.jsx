import { Menu, Moon, Sun } from "lucide-react";
import { navItems } from "../data/portfolio";
import "./Header.css";

export default function Header({
  dark,
  menuOpen,
  onToggleTheme,
  onOpenMenu,
  onCloseMenu,
}) {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#home" onClick={onCloseMenu}>
          <span className="brand-name">Lokesh Likhar</span>
        </a>
        <div className="header-actions">
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
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
            <a key={item} href={`#${item.toLowerCase()}`} onClick={onCloseMenu}>
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
