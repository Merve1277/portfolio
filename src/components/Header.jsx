import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <a href="#hero" className="skip-link">İçeriğe Geç</a>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="logo" aria-label="Merve Görgeç Logo">&lt;Merve /&gt;</div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

        <nav className={`nav ${menuOpen ? 'open' : ''}`} role="navigation" aria-label="Ana Navigasyon">
          <button onClick={() => scrollToSection('hero')} aria-label="Ana Sayfaya git">Ana Sayfa</button>
          <button onClick={() => scrollToSection('about')} aria-label="Hakkımda bölümüne git">Hakkımda</button>
          <button onClick={() => scrollToSection('projects')} aria-label="Projeler bölümüne git">Projeler</button>
          <button onClick={() => scrollToSection('skills')} aria-label="Yetenekler bölümüne git">Yetenekler</button>
          <button onClick={() => scrollToSection('contact')} aria-label="İletişim bölümüne git">İletişim</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
