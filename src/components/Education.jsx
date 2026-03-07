import { useLang } from '../i18n/LanguageContext';
import './Education.css';

function Education() {
    const { t } = useLang();

    const items = t.education?.items || [
        {
            title: 'Bilgisayar Mühendisliği',
            institution: 'İnönü Üniversitesi',
            period: '2021 — 2025',
            desc: 'Algoritma, veri yapıları, yazılım mühendisliği, görüntü işleme ve daha bir çok alanda eğitim aldım.',
        },
        {
            title: 'Staj — Yazılım Destek Birimi',
            institution: 'Malatya Büyükşehir Belediyesi',
            period: '70 iş günü',
            desc: 'Donanım envanter yönetim sistemi geliştirme, REST API tasarımı ve React frontend entegrasyonu.',
        },
    ];

    return (
        <section className="education" id="education">
            <div className="container">
                <h2 className="section-title">{t.education?.title || 'Eğitim Yolculuğum'}</h2>
                <p className="section-subtitle">{t.education?.subtitle || ''}</p>

                <div className="timeline">
                    {items.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                                {index < items.length - 1 && <div className="timeline-line"></div>}
                            </div>
                            <div className="glass-card timeline-card">
                                <div className="timeline-top">
                                    <div>
                                        <h3 className="timeline-title">{item.title}</h3>
                                        <span className="timeline-institution">{item.institution}</span>
                                    </div>
                                    <span className="pill timeline-period">{item.period}</span>
                                </div>
                                <p className="timeline-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
