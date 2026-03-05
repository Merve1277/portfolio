import { useLang } from '../i18n/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLang();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">&lt;Merve /&gt;</div>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>
        <div className="footer-center">
          <h4>{t.footer.social}</h4>
          <div className="social-links" role="list">
            <a href="https://github.com/Merve1277" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub" role="listitem">
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/mervegorgeç7" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" role="listitem">
              <span>LinkedIn</span>
            </a>
            <a href="mailto:mgor29372@gmail.com" className="social-link" aria-label="Email" role="listitem">
              <span>Email</span>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h4>{t.footer.quickLinks}</h4>
          <nav className="footer-links" aria-label="Footer">
            <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>{t.nav.home}</button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>{t.nav.about}</button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>{t.nav.projects}</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{t.nav.contact}</button>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Merve Görgeç. {t.footer.rights}</p>
        <p className="made-with">{t.footer.madeWith}</p>
      </div>
    </footer>
  );
}

export default Footer;
