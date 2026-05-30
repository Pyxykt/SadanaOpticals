import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function Navbar({ ctaLabel = 'Shop Now', ctaTo = '/products' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <header>
      <nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand" aria-label="ClearGaze — home">
            <div className="brand-logo" aria-hidden="true">
              <BrandLogo full />
            </div>
            <span className="brand-name">
              Clear<span>Gaze</span>
            </span>
          </Link>

          <nav className="navbar-nav" aria-label="Site pages">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/products" className={navClass}>
              Shop
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </nav>

          <Link to={ctaTo} className="btn btn-primary btn-sm navbar-cta">
            {ctaLabel}
          </Link>
          <button
            type="button"
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            aria-controls="mobileNav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} id="mobileNav" aria-label="Mobile navigation">
        <NavLink to="/" end className={navClass} onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" className={navClass} onClick={() => setMenuOpen(false)}>
          Shop All Eyewear
        </NavLink>
        <NavLink to="/contact" className={navClass} onClick={() => setMenuOpen(false)}>
          Contact Us
        </NavLink>
        <Link to={ctaTo} className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
