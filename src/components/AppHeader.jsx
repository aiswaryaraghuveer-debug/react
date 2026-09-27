import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import headerStyles from "./AppHeader.CSS?raw";
const defaultNavItems = ["home", "about","my projects", "experience", "skills", "contact"];

function AppHeader({ dark = true, onToggleTheme, navItems = defaultNavItems }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isChatbot = pathname === "/chatbot";
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{headerStyles}</style>
      <header className="navbar">
        <button className="brand" onClick={() => (isChatbot ? navigate("/") : scrollTo("home"))}>
          Ash <span>♥</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} id="primary-navigation">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())}>
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
        <button
          className="primary-button"
          onClick={() => navigate(isChatbot ? "/" : "/chatbot")}
        >
          {isChatbot ? "Back to portfolio" : "Ask me anything"}
        </button>

        <div className="nav-actions">
          {onToggleTheme && (
            <button
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            >
              {dark ? <Moon size={15} /> : <Sun size={15} />}
              <span className="toggle-dot" />
            </button>
          )}

          <button
            className="menu-button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}

export default AppHeader;