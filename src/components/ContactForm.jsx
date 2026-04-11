import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form-section" id="contact-form">
      <div className="container">
        <div className="contact-form-grid">
          {/* Left Side: Headlines */}
          <div className="contact-form-info fade-in-up">
            <h4 className="contact-subtitle">Want to talk to us</h4>
            <h2 className="contact-title">Contact Us</h2>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-wrapper fade-in-up fade-delay-1">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Name" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email address" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone" className="form-input" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" className="form-input" required />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="How can we help you? Feel free to get in touch!" 
                  className="form-textarea" 
                  rows="5"
                  required
                ></textarea>
              </div>
              
              {/* Fake reCAPTCHA */}
              <div className="recaptcha-mock mb-6">
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="robot" className="w-5 h-5" />
                  <label htmlFor="robot" className="text-sm font-medium">I'm not a robot</label>
                </div>
                <div className="recaptcha-logo">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" width="32" />
                  <span className="text-xs text-gray-400">Privacy - Terms</span>
                </div>
              </div>

              <button type="submit" className="btn-outline">
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
