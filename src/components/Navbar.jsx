import { useState, useEffect } from 'react';

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Niva, home">
          <span className="brand-mark">N<span></span></span>
          <span className="brand-name">NIVA K</span>
        </a>

        <button
          className={`menu-toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>

        <div className={`nav-panel${open ? ' is-open' : ''}`}>
          <div className="nav-links">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </div>
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
