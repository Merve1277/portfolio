import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import './Contact.css';

function Contact() {
  const { t } = useLang();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Portfolyo İletişim: ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Form Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">04.</span> {t.contact.title}
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t.contact.subtitle}</h3>
            <p>{t.contact.description}</p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div>
                  <h4>{t.contact.methodEmail}</h4>
                  <p>mgor29372@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">💼</span>
                <div>
                  <h4>{t.contact.methodGitHub}</h4>
                  <p>@Merve1277</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">📍</span>
                <div>
                  <h4>{t.contact.methodLocation}</h4>
                  <p>{t.contact.locationValue}</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className={`form-group ${isFocused.name ? 'focused' : ''}`}>
              <label htmlFor="name">{t.contact.labelName}</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onFocus={() => setIsFocused({ ...isFocused, name: true })} onBlur={() => setIsFocused({ ...isFocused, name: false })} required disabled={status === 'sending'} />
            </div>
            <div className={`form-group ${isFocused.email ? 'focused' : ''}`}>
              <label htmlFor="email">{t.contact.labelEmail}</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setIsFocused({ ...isFocused, email: true })} onBlur={() => setIsFocused({ ...isFocused, email: false })} required disabled={status === 'sending'} />
            </div>
            <div className={`form-group ${isFocused.message ? 'focused' : ''}`}>
              <label htmlFor="message">{t.contact.labelMessage}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} onFocus={() => setIsFocused({ ...isFocused, message: true })} onBlur={() => setIsFocused({ ...isFocused, message: false })} rows="5" required disabled={status === 'sending'}></textarea>
            </div>
            <button type="submit" className={`submit-btn ${status}`} aria-label={t.contact.btnSend} disabled={status === 'sending'}>
              {status === 'sending' && t.contact.btnSending}
              {status === 'success' && t.contact.btnSuccess}
              {status === 'error' && t.contact.btnError}
              {status === 'idle' && (<>{t.contact.btnSend}<span className="btn-arrow" aria-hidden="true">→</span></>)}
            </button>
            {status === 'success' && <p className="form-feedback success">{t.contact.feedbackSuccess}</p>}
            {status === 'error' && <p className="form-feedback error">{t.contact.feedbackError}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
