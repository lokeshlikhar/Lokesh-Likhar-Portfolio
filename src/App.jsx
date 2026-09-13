import { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

function Layout() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const enabled = localStorage.getItem("portfolio-theme") !== "light";
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  useEffect(() => {
    function closeMenuOnDesktop() {
      if (window.innerWidth > 900) setMenuOpen(false);
    }

    window.addEventListener("resize", closeMenuOnDesktop);
    return () => window.removeEventListener("resize", closeMenuOnDesktop);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  }

  return (
    <div className="portfolio">
      <Header
        dark={dark}
        menuOpen={menuOpen}
        onToggleTheme={toggleTheme}
        onOpenMenu={() => setMenuOpen(true)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<><Hero /><About /><Skills /><Experience /><Projects /><Education /><Services /><Contact /></>} />
        <Route path="experience" element={<><Hero /><About /><Skills /><Experience /><Projects /><Education /><Services /><Contact /></>} />
        <Route path="skills" element={<><Hero /><About /><Skills /><Experience /><Projects /><Education /><Services /><Contact /></>} />
        <Route path="contact" element={<><Hero /><About /><Skills /><Experience /><Projects /><Education /><Services /><Contact /></>} />
        <Route path="about" element={<><Hero /><About /><Skills /><Experience /><Projects /><Education /><Services /><Contact /></>} />
        <Route path="projects" element={<><Hero /><About /><Skills /><Experience /><Projects /><Education /><Services /><Contact /></>} />
        <Route path="education" element={<><Hero /><About /><Skills /><Experience /><Projects /><Education /><Services /><Contact /></>} />
        <Route path="services" element={<><Hero /><About /><Skills /><Experience /><Projects /><Education /><Services /><Contact /></>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
