import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">&lt;Merve /&gt;</div>
          <p className="footer-tagline">Kod yazarak dünyamı değiştiriyorum. 💻</p>
        </div>
        <div className="footer-center">
          <h4>Sosyal Medya</h4>
          <div className="social-links" role="list">
            <a href="https://github.com/Merve1277" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub profilini ziyaret et" role="listitem">
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/merve-gorgec" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn profilini ziyaret et" role="listitem">
              <span>LinkedIn</span>
            </a>
            <a href="mailto:mgor29372@gmail.com" className="social-link" aria-label="Email gönder" role="listitem">
              <span>Email</span>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h4>Hızlı Bağlantılar</h4>
          <nav className="footer-links" aria-label="Footer Navigasyon">
            <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Ana Sayfaya git">
              Ana Sayfa
            </button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Hakkımda bölümüne git">
              Hakkımda
            </button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Projeler bölümüne git">
              Projeler
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} aria-label="İletişim bölümüne git">
              İletişim
            </button>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Merve Görgeç. Tüm hakları saklıdır.</p>
        <p className="made-with">React & GitHub API ile ❤️ yapıldı</p>
      </div>
    </footer>
  );
}

export default Footer;
