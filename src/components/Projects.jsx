import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './Projects.css';

function Projects() {
  const { t } = useLang();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const projectItems = t.projects?.items || [];

  useEffect(() => {
    fetch('https://api.github.com/users/Merve1277/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const displayProjects = repos.length > 0 ? repos.slice(0, 6) : [];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">{t.projects?.title || 'Projeler'}</h2>
        <p className="section-subtitle">{t.projects?.subtitle || ''}</p>

        {/* Featured projects from CV */}
        <div className="featured-projects">
          {projectItems.map((project, index) => (
            <div key={index} className="glass-card featured-card">
              <div className="featured-top">
                <span className="featured-folder">📂</span>
                <span className={`featured-status ${project.status === 'Aktif' || project.status === 'Active' ? 'active' : ''}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="featured-title">{project.title}</h3>
              <p className="featured-desc">{project.description}</p>
              <div className="featured-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub repos */}
        {!loading && displayProjects.length > 0 && (
          <>
            <h3 className="github-heading">GitHub</h3>
            <div className="github-grid">
              {displayProjects.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card repo-card"
                >
                  <h4 className="repo-name">{repo.name}</h4>
                  <p className="repo-desc">{repo.description || '—'}</p>
                  <div className="repo-meta">
                    {repo.language && (
                      <span className="repo-lang">
                        <span className="lang-dot" style={{ background: getLangColor(repo.language) }}></span>
                        {repo.language}
                      </span>
                    )}
                    <span>⭐ {repo.stargazers_count}</span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function getLangColor(lang) {
  const colors = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    'C#': '#239120',
  };
  return colors[lang] || '#8b8b8b';
}

export default Projects;
