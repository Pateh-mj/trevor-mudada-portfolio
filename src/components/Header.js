import { useState } from 'react';
import './Header.css';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research',   href: '#research' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
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
