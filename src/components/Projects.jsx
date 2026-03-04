import { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Merve1277/repos?sort=updated&per_page=6')
      .then(response => {
        if (!response.ok) throw new Error('GitHub API hatası');
        return response.json();
      })
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#007396',
      'C#': '#239120',
      HTML: '#e34c26',
      CSS: '#1572b6',
      Docker: '#2496ed',
      default: '#667eea'
    };
    return colors[language] || colors.default;
  };

  if (loading) {
    return (
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">02.</span> GitHub Projelerim
          </h2>
          <div className="loading">
            <div className="spinner"></div>
            <p>GitHub projeleri yükleniyor...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">
            <span className="title-number">02.</span> GitHub Projelerim
          </h2>
          <div className="error">
            <p>Projeler yüklenirken bir hata oluştu: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span> GitHub Projelerim
        </h2>
        <div className="github-stats">
          <div className="stat-card">
            <span className="stat-number">{repos.length}+</span>
            <span className="stat-label">Repositories</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              {repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
            </span>
            <span className="stat-label">Stars</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              {repos.reduce((sum, repo) => sum + repo.forks_count, 0)}
            </span>
            <span className="stat-label">Forks</span>
          </div>
        </div>
        <div className="projects-grid">
          {repos.map((repo) => (
            <a 
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div 
                className="card-background"
                style={{ 
                  background: `linear-gradient(135deg, ${getLanguageColor(repo.language)}20 0%, ${getLanguageColor(repo.language)}05 100%)` 
                }}
              ></div>
              <div className="card-content">
                <div className="project-header">
                  <span className="folder-icon">📁</span>
                  <div className="project-links">
                    {repo.homepage && (
                      <span className="link-icon" title="Demo">🔗</span>
                    )}
                    <span className="github-icon" title="GitHub">⭐</span>
                  </div>
                </div>
                <h3 className="project-title">{repo.name}</h3>
                <p className="project-description">
                  {repo.description || 'Açıklama eklenmemiş'}
                </p>
                <div className="project-footer">
                  {repo.language && (
                    <div className="language">
                      <span 
                        className="language-dot"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></span>
                      {repo.language}
                    </div>
                  )}
                  <div className="stats">
                    {repo.stargazers_count > 0 && (
                      <span className="stat">⭐ {repo.stargazers_count}</span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="stat">🔀 {repo.forks_count}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="card-corners">
                <span className="corner corner-tl"></span>
                <span className="corner corner-tr"></span>
                <span className="corner corner-bl"></span>
                <span className="corner corner-br"></span>
              </div>
            </a>
          ))}
        </div>
        <div className="view-more">
          <a 
            href="https://github.com/Merve1277?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            Tüm Projeleri Gör →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
