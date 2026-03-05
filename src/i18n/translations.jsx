const translations = {
    tr: {
        // Header
        nav: {
            home: 'Ana Sayfa',
            about: 'Hakkımda',
            projects: 'Projeler',
            skills: 'Yetenekler',
            contact: 'İletişim',
        },
        // Hero
        hero: {
            label: '<developer>',
            headline: 'Merhaba, ben Merve',
            title: 'Bilgisayar Mühendisi / Full Stack Developer',
            tagline: 'Analitik Düşünce • Problem Çözme • Temiz Kod',
            description: 'İnönü Üniversitesi Bilgisayar Mühendisliği mezunuyum. React, Node.js ve Python ile projeler geliştiriyorum.',
            btnProjects: 'Projelerimi Gör',
            btnContact: 'İletişime Geç',
            badge1: 'Stajyer @ Malatya Büyükşehir Belediyesi (Bilgi İşlem)',
            badge2: 'ALES Sayısal: 83',
            badge3: 'GPA: 3.27 / 4.00',
            code: {
                role: 'Full Stack Developer',
                stack: 'React, Node.js, Express, PostgreSQL',
                project: 'Donanım Envanter Sistemi',
                extras: 'Python • OpenCV • GLCM/HoG/LBP',
                mindset: 'Araştır → Tasarla → Temiz Kod',
                propRole: 'role',
                propStack: 'stack',
                propProject: 'proje',
                propExtras: 'ekstra',
                propMindset: 'yaklaşım',
            },
        },
        // About
        about: {
            title: 'Hakkımda',
            intro: (
                <>
                    Merhaba! Ben <strong>Merve Görgeç</strong> — İnönü Üniversitesi
                    Bilgisayar Mühendisliği mezunuyum (GPA: 3.27/4.00).
                </>
            ),
            p1: (
                <>
                    <strong>Full Stack Web Geliştirme</strong> (React, Node.js, Express) ve
                    <strong> Python tabanlı görüntü işleme</strong> (OpenCV, GLCM, HoG, LBP)
                    alanlarında projeler geliştirdim. Analitik düşünme becerisine,
                    problem çözme yetkinliğine ve teknik öğrenmeye yüksek motivasyona sahibim.
                </>
            ),
            p2: (
                <>
                    Malatya Büyükşehir Belediyesi Bilgi İşlem Dairesi'nde <strong>70 iş günü staj</strong> yaptım.
                    Burada donanım envanter yönetim sistemi geliştirme sürecinde yer aldım,
                    <strong> Node.js tabanlı REST API</strong> geliştirme ve <strong>React frontend</strong> entegrasyon
                    süreçlerinde aktif rol aldım.
                </>
            ),
            p3: 'Şu anda tam zamanlı pozisyonlara hazırlanıyor, portföyümü güçlendiriyor ve yeni teknolojiler öğrenmeye devam ediyorum.',
            hlEducation: 'Eğitim:',
            hlEducationVal: 'Bilgisayar Mühendisliği — İnönü Üniversitesi (2021-2025)',
            hlIntern: 'Staj:',
            hlInternVal: 'Malatya Büyükşehir Belediyesi — Yazılım Destek Birimi',
            hlStack: 'Stack:',
            hlStackVal: 'React • Node.js • Express • PostgreSQL • Python',
            hlCerts: 'Sertifikalar:',
            hlCertsVal: 'GDSC Core Team • Frontend Workshop',
            github: 'GitHub Profilim',
        },
        // Skills
        skills: {
            title: 'Yeteneklerim',
        },
        // Contact
        contact: {
            title: 'İletişim',
            subtitle: 'Birlikte Çalışalım!',
            description: 'Bir projeniz mi var veya işbirliği yapmak ister misiniz? Benimle iletişime geçin, birlikte harika projeler geliştirelim!',
            labelName: 'İsim',
            labelEmail: 'Email',
            labelMessage: 'Mesaj',
            btnSend: 'Gönder',
            btnSending: 'Gönderiliyor...',
            btnSuccess: '✓ Gönderildi!',
            btnError: '✕ Hata oluştu',
            feedbackSuccess: '✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.',
            feedbackError: '❌ Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan email gönderin.',
            methodEmail: 'Email',
            methodGitHub: 'GitHub',
            methodLocation: 'Konum',
            locationValue: 'Türkiye',
        },
        // Footer
        footer: {
            tagline: 'Kod yazarak dünyamı değiştiriyorum. 💻',
            social: 'Sosyal Medya',
            quickLinks: 'Hızlı Bağlantılar',
            rights: 'Tüm hakları saklıdır.',
            madeWith: 'React & GitHub API ile ❤️ yapıldı',
        },
        // Terminal
        terminal: {
            lines: [
                '$ npm install @merve/bilgisayar-muhendisi',
                '✓ React + Node.js kuruldu',
                '✓ Python + OpenCV kuruldu',
                '✓ PostgreSQL + REST API kuruldu',
                '✓ JWT kimlik doğrulama aktif',
                '> Projeler derleniyor...',
                '✨ Hazır! Kod yazmaya başlayalım!'
            ],
        },
    },

    en: {
        // Header
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
        },
        // Hero
        hero: {
            label: '<developer>',
            headline: "Hi, I'm Merve",
            title: 'Computer Engineer / Full Stack Developer',
            tagline: 'Analytical Thinking • Problem Solving • Clean Code',
            description: "Computer Engineering graduate from İnönü University. I build projects with React, Node.js, and Python.",
            btnProjects: 'View Projects',
            btnContact: 'Get in Touch',
            badge1: 'Intern @ Malatya Municipality (IT Dept.)',
            badge2: 'ALES Quant: 83',
            badge3: 'GPA: 3.27 / 4.00',
            code: {
                role: 'Full Stack Developer',
                stack: 'React, Node.js, Express, PostgreSQL',
                project: 'Hardware Inventory System',
                extras: 'Python • OpenCV • GLCM/HoG/LBP',
                mindset: 'Research → Design → Clean Code',
                propRole: 'role',
                propStack: 'stack',
                propProject: 'project',
                propExtras: 'extras',
                propMindset: 'mindset',
            },
        },
        // About
        about: {
            title: 'About Me',
            intro: (
                <>
                    Hi! I'm <strong>Merve Görgeç</strong> — Computer Engineering graduate
                    from İnönü University (GPA: 3.27/4.00).
                </>
            ),
            p1: (
                <>
                    I've built projects in <strong>Full Stack Web Development</strong> (React, Node.js, Express)
                    and <strong>Python-based image processing</strong> (OpenCV, GLCM, HoG, LBP).
                    I have strong analytical thinking, problem-solving skills, and high motivation for technical learning.
                </>
            ),
            p2: (
                <>
                    I completed a <strong>70-day internship</strong> at Malatya Metropolitan Municipality IT Department.
                    I actively participated in developing a hardware inventory management system,
                    <strong> Node.js REST API</strong> development, and <strong>React frontend</strong> integration.
                </>
            ),
            p3: "Currently preparing for full-time positions, strengthening my portfolio, and continuing to learn new technologies.",
            hlEducation: 'Education:',
            hlEducationVal: 'Computer Engineering — İnönü University (2021-2025)',
            hlIntern: 'Internship:',
            hlInternVal: 'Malatya Municipality — Software Support Unit',
            hlStack: 'Stack:',
            hlStackVal: 'React • Node.js • Express • PostgreSQL • Python',
            hlCerts: 'Certificates:',
            hlCertsVal: 'GDSC Core Team • Frontend Workshop',
            github: 'My GitHub',
        },
        // Skills
        skills: {
            title: 'My Skills',
        },
        // Contact
        contact: {
            title: 'Contact',
            subtitle: "Let's Work Together!",
            description: "Have a project or want to collaborate? Get in touch and let's build amazing things together!",
            labelName: 'Name',
            labelEmail: 'Email',
            labelMessage: 'Message',
            btnSend: 'Send',
            btnSending: 'Sending...',
            btnSuccess: '✓ Sent!',
            btnError: '✕ Error',
            feedbackSuccess: '✅ Your message has been sent! I will get back to you soon.',
            feedbackError: '❌ Failed to send. Please try again or send an email directly.',
            methodEmail: 'Email',
            methodGitHub: 'GitHub',
            methodLocation: 'Location',
            locationValue: 'Turkey',
        },
        // Footer
        footer: {
            tagline: 'Changing my world by writing code. 💻',
            social: 'Social Media',
            quickLinks: 'Quick Links',
            rights: 'All rights reserved.',
            madeWith: 'Made with ❤️ using React & GitHub API',
        },
        // Terminal
        terminal: {
            lines: [
                '$ npm install @merve/computer-engineer',
                '✓ React + Node.js installed',
                '✓ Python + OpenCV installed',
                '✓ PostgreSQL + REST API installed',
                '✓ JWT authentication enabled',
                '> Building projects...',
                '✨ Ready to code!'
            ],
        },
    },
};

export default translations;
