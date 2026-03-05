import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './Hero.css';

function Hero() {
  const { t } = useLang();
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const visual = visualRef.current;
    if (!hero || !visual) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;
      const maxTilt = 6;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setTilt({ rx: -percentY * maxTilt, ry: percentX * maxTilt });
      });
    };

    const handleMouseLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setTilt({ rx: 0, ry: 0 }));
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const c = t.hero.code;

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg-gradient"></div>
      <div className="hero-bg-noise"></div>

      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-label">{t.hero.label}</div>

          <h1 className="hero-headline">
            <span className="hero-headline-text">{t.hero.headline}</span> <span className="emoji">👩‍💻</span>
          </h1>

          <div className="hero-title">{t.hero.title}</div>
          <div className="hero-tagline">{t.hero.tagline}</div>
          <p className="hero-description">{t.hero.description}</p>

          <div className="code-terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-body">
              <code>
                <span className="keyword">const</span> <span className="variable">merve</span> = &#123;<br />
                &nbsp;&nbsp;<span className="property">{c.propRole}</span>: <span className="string">"{c.role}"</span>,<br />
                &nbsp;&nbsp;<span className="property">{c.propStack}</span>: <span className="string">"{c.stack}"</span>,<br />
                &nbsp;&nbsp;<span className="property">{c.propProject}</span>: <span className="string">"{c.project}"</span>,<br />
                &nbsp;&nbsp;<span className="property">{c.propExtras}</span>: <span className="string">"{c.extras}"</span>,<br />
                &nbsp;&nbsp;<span className="property">{c.propMindset}</span>: <span className="string">"{c.mindset}"</span><br />
                &#125;;
              </code>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} aria-label={t.hero.btnProjects}>
              {t.hero.btnProjects}
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} aria-label={t.hero.btnContact}>
              {t.hero.btnContact}
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="holographic-card" ref={visualRef} style={{ transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}>
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-icon">
                <div className="code-symbol">&lt;/&gt;</div>
              </div>
              <div className="card-badges">
                <div className="badge">
                  <span className="badge-icon">💼</span>
                  <span className="badge-text">{t.hero.badge1}</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">📊</span>
                  <span className="badge-text">{t.hero.badge2}</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">🎓</span>
                  <span className="badge-text">{t.hero.badge3}</span>
                </div>
              </div>
              <div className="card-tech-grid">
                <span className="tech-item">React</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">OpenCV</span>
                <span className="tech-item">Express</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
