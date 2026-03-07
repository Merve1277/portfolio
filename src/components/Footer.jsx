import { useLang } from '../i18n/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLang();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <hr className="gradient-line" />
        <div className="footer-inner">
          <p className="footer-copy">&copy; {currentYear} Merve Görgeç. {t.footer.rights}</p>
          <p className="footer-made">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
