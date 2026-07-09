import { useState } from "react";
import { navItems } from "../data";

export default function Header({theme, toggleTheme}){
  const [menuOpen, setMenuOpen] = useState(false);
 
    
  return (
    <>
      <header>
        <a href="#home" className="logo">
          <span className="logo-prompt">
            sushashwat<span className="logo-at">@</span>dev
          </span>
          <span className="logo-tilde">:~$</span>
          <span className="cursor-blink">_</span>
        </a>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className="nav-idx">{item.idx}</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <input
            type="checkbox"
            id="theme-toggle"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <label
            htmlFor="theme-toggle"
            className="toggle"
            aria-label="Toggle light and dark mode"
          >
            <i className="fa-solid fa-moon"></i>
            <i className="fa-solid fa-sun"></i>
          </label>
          <button
            className="nav-burger"
            aria-label="Open menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
            {item.idx} · {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
