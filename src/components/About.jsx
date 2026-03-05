import CodeTerminal from "./CodeTerminal";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span> Hakkımda
        </h2>

        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              Merhaba! Ben <strong>Merve Görgeç</strong> — İnönü Üniversitesi
              Bilgisayar Mühendisliği mezunuyum (GPA: 3.27/4.00).
            </p>

            <p>
              <strong>Full Stack Web Geliştirme</strong> (React, Node.js, Express) ve
              <strong> Python tabanlı görüntü işleme</strong> (OpenCV, GLCM, HoG, LBP)
              alanlarında projeler geliştirdim. Analitik düşünme becerisine,
              problem çözme yetkinliğine ve teknik öğrenmeye yüksek motivasyona sahibim.
            </p>

            <p>
              Malatya Büyükşehir Belediyesi Bilgi İşlem Dairesi'nde <strong>70 iş günü staj</strong> yaptım.
              Burada donanım envanter yönetim sistemi geliştirme sürecinde yer aldım,
              <strong> Node.js tabanlı REST API</strong> geliştirme ve <strong>React frontend</strong> entegrasyon
              süreçlerinde aktif rol aldım.
            </p>

            <p>
              Şu anda tam zamanlı pozisyonlara hazırlanıyor,
              portföyümü güçlendiriyor ve yeni teknolojiler öğrenmeye devam ediyorum.
            </p>

            <ul className="about-highlights">
              <li>
                <span className="hl-title">Eğitim:</span> Bilgisayar Mühendisliği — İnönü Üniversitesi (2021-2025)
              </li>
              <li>
                <span className="hl-title">Staj:</span> Malatya Büyükşehir Belediyesi — Yazılım Destek Birimi
              </li>
              <li>
                <span className="hl-title">Stack:</span> React • Node.js • Express • PostgreSQL • Python
              </li>
              <li>
                <span className="hl-title">Sertifikalar:</span> GDSC Core Team • Frontend Workshop
              </li>
            </ul>

            <div className="github-link">
              <a
                href="https://github.com/Merve1277"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="github-icon">⚡</span> GitHub Profilim
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
