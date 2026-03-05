import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './Header.css';

function Header() {
  const { lang, t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <a href="#hero" className="skip-link">{lang === 'tr' ? 'İçeriğe Geç' : 'Skip to Content'}</a>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="logo" aria-label="Merve Görgeç Logo">&lt;Merve /&gt;</div>

        <div className="header-right">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={lang === 'tr' ? 'Switch to English' : 'Türkçeye geç'}
            title={lang === 'tr' ? 'English' : 'Türkçe'}
          >
            {lang === 'tr' ? '🇬🇧 EN' : '🇹🇷 TR'}
          </button>

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
        </div>

        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

        <nav className={`nav ${menuOpen ? 'open' : ''}`} role="navigation" aria-label="Ana Navigasyon">
          <button onClick={() => scrollToSection('hero')}>{t.nav.home}</button>
          <button onClick={() => scrollToSection('about')}>{t.nav.about}</button>
          <button onClick={() => scrollToSection('projects')}>{t.nav.projects}</button>
          <button onClick={() => scrollToSection('skills')}>{t.nav.skills}</button>
          <button onClick={() => scrollToSection('contact')}>{t.nav.contact}</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
