import { useState } from 'react';
import './Header.css';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research',   href: '#research' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Training',   href: '#training' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#hero" className="header__logo">
        TM<span className="header__logo-dot">.</span>
      </a>

      <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="header__link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="/trevor-mudada-cv.pdf"
          download
          className="header__cv-btn"
          onClick={() => setMenuOpen(false)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>
        <a href="#contact" className="header__cta" onClick={() => setMenuOpen(false)}>
          Reach Out
        </a>
      </nav>

      <button
        className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </header>
  );
}
