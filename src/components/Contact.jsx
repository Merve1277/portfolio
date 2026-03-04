import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">04.</span> İletişim
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Birlikte Çalışalım!</h3>
            <p>Bir projeniz mi var veya işbirliği yapmak ister misiniz? Benimle iletişime geçin, birlikte harika projeler geliştirelim!</p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>mgor29372@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">💼</span>
                <div>
                  <h4>GitHub</h4>
                  <p>@Merve1277</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="method-icon">📍</span>
                <div>
                  <h4>Konum</h4>
                  <p>Türkiye</p>
                </div>
              </div>
            </div>
          </div>
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className={`form-group ${isFocused.name ? 'focused' : ''}`}>
              <label htmlFor="name">İsim</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setIsFocused({ ...isFocused, name: true })}
                onBlur={() => setIsFocused({ ...isFocused, name: false })}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className={`form-group ${isFocused.email ? 'focused' : ''}`}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setIsFocused({ ...isFocused, email: true })}
                onBlur={() => setIsFocused({ ...isFocused, email: false })}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className={`form-group ${isFocused.message ? 'focused' : ''}`}>
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setIsFocused({ ...isFocused, message: true })}
                onBlur={() => setIsFocused({ ...isFocused, message: false })}
                rows="5"
                required
                disabled={status === 'sending'}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`submit-btn ${status}`}
              aria-label="Formu gönder"
              disabled={status === 'sending'}
            >
              {status === 'sending' && 'Gönderiliyor...'}
              {status === 'success' && '✓ Gönderildi!'}
              {status === 'error' && '✕ Hata oluştu'}
              {status === 'idle' && (
                <>
                  Gönder
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="form-feedback success">
                ✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
              </p>
            )}
            {status === 'error' && (
              <p className="form-feedback error">
                ❌ Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan email gönderin.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
