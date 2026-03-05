import { useLang } from '../i18n/LanguageContext';
import CodeTerminal from "./CodeTerminal";
import "./About.css";

function About() {
  const { t } = useLang();

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span> {t.about.title}
        </h2>

        <div className="about-content">
          <div className="about-text">
            <p className="intro">{t.about.intro}</p>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>

            <ul className="about-highlights">
              <li><span className="hl-title">{t.about.hlEducation}</span> {t.about.hlEducationVal}</li>
              <li><span className="hl-title">{t.about.hlIntern}</span> {t.about.hlInternVal}</li>
              <li><span className="hl-title">{t.about.hlStack}</span> {t.about.hlStackVal}</li>
              <li><span className="hl-title">{t.about.hlCerts}</span> {t.about.hlCertsVal}</li>
            </ul>

            <div className="github-link">
              <a href="https://github.com/Merve1277" target="_blank" rel="noopener noreferrer">
                <span className="github-icon">⚡</span> {t.about.github}
              </a>
            </div>
          </div>

          <div className="about-terminal">
            <CodeTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
