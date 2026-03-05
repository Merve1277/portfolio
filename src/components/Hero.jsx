import { useEffect, useRef, useState } from 'react';
import './Hero.css';

function Hero() {
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
      const newRy = percentX * maxTilt;
      const newRx = -percentY * maxTilt;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        setTilt({ rx: newRx, ry: newRy });
      });
    };

    const handleMouseLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        setTilt({ rx: 0, ry: 0 });
      });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Background layers */}
      <div className="hero-bg-gradient"></div>
      <div className="hero-bg-noise"></div>

      {/* Floating shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-label">&lt;developer&gt;</div>

          <h1 className="hero-headline">
            <span className="hero-headline-text">Merhaba, ben Merve</span> <span className="emoji">👩‍💻</span>
          </h1>

          <div className="hero-title">
            Bilgisayar Mühendisi / Full Stack Developer
          </div>

          <div className="hero-tagline">
            Analitik Düşünce • Problem Çözme • Temiz Kod
          </div>

          <p className="hero-description">
            İnönü Üniversitesi Bilgisayar Mühendisliği mezunuyum.
            React, Node.js ve Python ile projeler geliştiriyorum.
          </p>

          {/* Code Snippet Box */}
          <div className="code-terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-body">
              <code>
                <span className="keyword">const</span> <span className="variable">merve</span> = &#123;<br />
                &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"Full Stack Developer"</span>,<br />
                &nbsp;&nbsp;<span className="property">stack</span>: <span className="string">"React, Node.js, Express, PostgreSQL"</span>,<br />
                &nbsp;&nbsp;<span className="property">proje</span>: <span className="string">"Donanım Envanter Sistemi"</span>,<br />
                &nbsp;&nbsp;<span className="property">ekstra</span>: <span className="string">"Python • OpenCV • GLCM/HoG/LBP"</span>,<br />
                &nbsp;&nbsp;<span className="property">yaklaşım</span>: <span className="string">"Araştır → Tasarla → Temiz Kod"</span><br />
                &#125;;
              </code>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Projelerimi görüntüle"
            >
              Projelerimi Gör
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="İletişime geç"
            >
              İletişime Geç
            </button>
          </div>
        </div>

        {/* Right Column - Interactive Visual */}
        <div className="hero-right">
          <div
            className="holographic-card"
            ref={visualRef}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            }}
          >
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="card-icon">
                <div className="code-symbol">&lt;/&gt;</div>
              </div>

              <div className="card-badges">
                <div className="badge">
                  <span className="badge-icon">💼</span>
                  <span className="badge-text">Stajyer @ Malatya Büyükşehir Belediyesi (Bilgi İşlem)</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">📊</span>
                  <span className="badge-text">ALES Sayısal: 83</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">🎓</span>
                  <span className="badge-text">GPA: 3.27 / 4.00</span>
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
