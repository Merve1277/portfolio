import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './Skills.css';

function Skills() {
  const { t } = useLang();

  const skills = [
    { name: 'Python', level: 85, icon: '🐍', color: '#3776ab' },
    { name: 'JavaScript', level: 85, icon: '⚡', color: '#f7df1e' },
    { name: 'React', level: 82, icon: '⚛️', color: '#61dafb' },
    { name: 'Node.js', level: 80, icon: '🟢', color: '#339933' },
    { name: 'Express.js', level: 78, icon: '🚀', color: '#68a063' },
    { name: 'C#', level: 72, icon: '💜', color: '#239120' },
    { name: 'PostgreSQL', level: 78, icon: '🗄️', color: '#336791' },
    { name: 'HTML/CSS', level: 90, icon: '🎨', color: '#e34c26' },
    { name: 'Git', level: 82, icon: '📦', color: '#f05032' },
    { name: 'OpenCV', level: 75, icon: '👁️', color: '#5c3ee8' },
    { name: 'REST API', level: 80, icon: '🔌', color: '#00d1ff' },
    { name: 'JWT Auth', level: 75, icon: '🔐', color: '#f857a6' },
  ];

  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels(prev => {
                const newLevels = [...prev];
                newLevels[index] = skill.level;
                return newLevels;
              });
            }, index * 80);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
        <p className="section-subtitle">{t.skills.subtitle || ''}</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="glass-card skill-card">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{animatedLevels[index]}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{
                    width: `${animatedLevels[index]}%`,
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                    boxShadow: `0 0 12px ${skill.color}40`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
