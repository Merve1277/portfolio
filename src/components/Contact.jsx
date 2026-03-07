import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './Contact.css';

function Contact() {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else throw new Error();
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const links = [
    { icon: '⌘', label: 'GitHub', href: 'https://github.com/Merve1277' },
    { icon: '↗', label: 'LinkedIn', href: 'https://linkedin.com/in/mervegorgeç7' },
    { icon: '✉', label: 'mgor29372@gmail.com', href: 'mailto:mgor29372@gmail.com' },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>

        <div className="contact-grid">
          {/* Left - info + links */}
          <div className="contact-info">
            <p className="contact-text">{t.contact.description}</p>
            <div className="contact-links">
              {links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="glass-card contact-link">
                  <span className="contact-link-icon">{link.icon}</span>
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.labelName || 'İsim'}</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required disabled={status === 'sending'} />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.labelEmail || 'Email'}</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required disabled={status === 'sending'} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.labelMessage || 'Mesaj'}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required disabled={status === 'sending'}></textarea>
            </div>
            <button type="submit" className={`btn-primary submit-btn ${status}`} disabled={status === 'sending'}>
              {status === 'sending' ? (t.contact.btnSending || 'Gönderiliyor...') :
                status === 'success' ? (t.contact.btnSuccess || '✓ Gönderildi!') :
                  status === 'error' ? (t.contact.btnError || '✕ Hata') :
                    (t.contact.btnSend || 'Gönder →')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
