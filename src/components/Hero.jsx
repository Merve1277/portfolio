import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './Hero.css';

function Hero() {
  const { t } = useLang();
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ rx: -y * 10, ry: x * 10 });
    };

    const handleMouseLeave = () => setTilt({ rx: 0, ry: 0 });

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const c = t.hero.code;

  return (
    <section className="hero" id="hero">
      <div className="hero-glow hero-glow-left"></div>
      <div className="hero-glow hero-glow-right"></div>

      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-left">
          <div className="pill">
            <span className="dot"></span>
            {t.hero.greeting}
          </div>

          <h1 className="hero-name hero-name-gradient">
            Merve<br />Görgeç
          </h1>

          <p className="hero-title">{t.hero.title}</p>

          <hr className="gradient-line hero-line" />

          <p className="hero-desc">{t.hero.description}</p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.hero.btnProjects}
            </button>
            <button className="btn-ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.hero.btnContact}
            </button>
          </div>
        </div>

        {/* Right: Holographic card */}
        <div className="hero-right">
          <div
            className="holo-card"
            ref={cardRef}
            style={{ transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
          >
            <div className="holo-glow"></div>
            <div className="holo-content">
              <div className="holo-icon">&lt;/&gt;</div>

              <div className="holo-code">
                <code>
                  <span className="kw">const</span> <span className="var">merve</span> = &#123;<br />
                  &nbsp;&nbsp;<span className="prop">{c.propStack}</span>: <span className="str">"{c.stack}"</span><br />
                  &nbsp;&nbsp;<span className="prop">{c.propProject}</span>: <span className="str">"{c.project}"</span><br />
                  &nbsp;&nbsp;<span className="prop">{c.propMindset}</span>: <span className="str">"{c.mindset}"</span><br />
                  &#125;;
                </code>
              </div>

              <div className="holo-badges">
                <span className="holo-badge">💼 {t.hero.badge1}</span>
                <span className="holo-badge">🎓 {t.hero.badge3}</span>
              </div>

              <div className="holo-tech">
                {['React', 'Node.js', 'Python', 'PostgreSQL', 'OpenCV', 'Express'].map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="hero-scroll">{t.hero.scrollHint}</p>
    </section>
  );
}

export default Hero;
