import { useState } from 'react';
import './Contact.css';

function Contact() {
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

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          message: formData.message
        })
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
          <form className="contact-form" onSubmit={handleSubmit}>
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
