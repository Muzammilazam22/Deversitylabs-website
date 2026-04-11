import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-container text-center">
        <div className="hero-content">
          <div className="badge">Innovate. Transform. Scale.</div>
          <h1 className="hero-title">
            Empowering your business with <span className="highlight">Next-Gen Technology</span>
          </h1>
          <p className="hero-subtitle">
            As your Technology Partner, DeversityLabs turns vision into reality. We specialize in AI/ML, Salesforce, Hubspot, ServiceNow, and modern Full-Stack development to accelerate your success.
          </p>
          <div className="hero-actions">
            <a href="#contact-form" className="btn-primary hero-btn">Get Started</a>
            <a href="/services" className="btn-secondary hero-btn">Explore Services</a>
          </div>
        </div>
      </div>
      
      {/* Logos Section built right below Hero */}
      <div className="trusted-by">
        <p>Trusted by innovative companies worldwide</p>
        <div className="logo-strip">
          {/* We use text placeholders styled nicely for logos */}
          <span className="logo-placeholder">Acme Corp</span>
          <span className="logo-placeholder">GlobalTech</span>
          <span className="logo-placeholder">NextGen</span>
          <span className="logo-placeholder">Synergy</span>
          <span className="logo-placeholder">Apex</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
