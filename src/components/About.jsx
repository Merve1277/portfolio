import { useLang } from '../i18n/LanguageContext';
import './About.css';

function About() {
  const { t } = useLang();

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-subtitle">{t.about.subtitle || ''}</p>

        <div className="about-text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>

        <div className="about-grid">
          <div className="glass-card about-card">
            <span className="about-card-icon">📍</span>
            <span className="about-card-label">{t.about.locationLabel || 'Konum'}</span>
            <span className="about-card-value">{t.about.locationVal || 'Malatya, Türkiye'}</span>
          </div>
          <div className="glass-card about-card">
            <span className="about-card-icon">🎯</span>
            <span className="about-card-label">{t.about.focusLabel || 'Odak'}</span>
            <span className="about-card-value">{t.about.focusVal || 'Full Stack'}</span>
          </div>
          <div className="glass-card about-card">
            <span className="about-card-icon">🎓</span>
            <span className="about-card-label">{t.about.gpaLabel || 'GPA'}</span>
            <span className="about-card-value">3.27 / 4.00</span>
          </div>
          <div className="glass-card about-card">
            <span className="about-card-icon">📊</span>
            <span className="about-card-label">{t.about.alesLabel || 'ALES'}</span>
            <span className="about-card-value">{t.about.alesVal || 'Sayısal: 83'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
