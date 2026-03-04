import { useState, useEffect } from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 88, icon: '⚡', color: '#f7df1e' },
    { name: 'TypeScript', level: 82, icon: '📘', color: '#3178c6' },
    { name: 'React', level: 85, icon: '⚛️', color: '#61dafb' },
    { name: 'Node.js', level: 80, icon: '🟢', color: '#339933' },
    { name: 'Python', level: 75, icon: '🐍', color: '#3776ab' },
    { name: 'Java', level: 78, icon: '☕', color: '#007396' },
    { name: 'C#', level: 70, icon: '💜', color: '#239120' },
    { name: 'SQL/PostgreSQL', level: 75, icon: '🗄️', color: '#336791' },
    { name: 'Docker', level: 72, icon: '🐳', color: '#2496ed' },
    { name: 'Git', level: 85, icon: '📦', color: '#f05032' },
    { name: 'HTML/CSS', level: 90, icon: '🎨', color: '#e34c26' },
    { name: 'Express.js', level: 78, icon: '🚀', color: '#000000' }
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
            }, index * 100);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span> Yeteneklerim
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{animatedLevels[index]}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{
                    width: `${animatedLevels[index]}%`,
                    background: skill.color,
                    boxShadow: `0 0 20px ${skill.color}50`
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
