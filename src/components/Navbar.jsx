
import { useState, useEffect } from 'react';

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }

    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`site-header editorial-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container" aria-label="Main navigation">

        <a
          className="brand editorial-brand"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Niva, home"
        >
          <span className="brand-name">NIVA<span>.</span></span>
        </a>

        <button
          className={`menu-toggle editorial-menu-toggle ${open ? 'is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-panel editorial-nav-panel ${open ? 'is-open' : ''}`}>
          <div className="nav-links editorial-nav-links">
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
              >
                <span className="nav-number">0{index + 1}</span>
                {label}
              </a>
            ))}
          </div>

          <a
            className="nav-cta editorial-nav-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let's talk <span>↗</span>
          </a>
        </div>

      </nav>
    </header>
  );
}
