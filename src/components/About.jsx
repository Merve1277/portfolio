import CodeTerminal from "./CodeTerminal";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span> About
        </h2>

        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              Hi! I’m <strong>Merve Görgeç</strong> — a Computer Engineer who
              loves building modern, clean, and user-friendly web applications.
            </p>

            <p>
              I work with <strong>React</strong> on the frontend and build
              scalable APIs using <strong>Node.js</strong>, <strong>Express</strong>{" "}
              and <strong>PostgreSQL</strong>. I enjoy turning ideas into
              real-world products with solid architecture and a smooth UX.
            </p>

            <p>
              I’m especially interested in <strong>Full Stack Web Development</strong>{" "}
              and projects that combine <strong>performance</strong>,{" "}
              <strong>security</strong> and <strong>clean code</strong>.
              Learning new tools and improving my engineering mindset is a daily habit.
            </p>

            <p>
              Currently, I’m focusing on building stronger end-to-end projects,
              improving my system design basics, and preparing a portfolio that
              reflects real production skills.
            </p>

            {/* Mini highlights (çok yakışıyor) */}
            <ul className="about-highlights">
              <li>
                <span className="hl-title">Focus:</span> Full Stack Web Development
              </li>
              <li>
                <span className="hl-title">Stack:</span> React • Node.js • Express • PostgreSQL
              </li>
              <li>
                <span className="hl-title">Interests:</span> Web Dev • Backend • Data & AI
              </li>
            </ul>

            <div className="github-link">
              <a
                href="https://github.com/Merve1277"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="github-icon">⚡</span> Visit my GitHub
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
