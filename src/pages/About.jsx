import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import { Target, Lightbulb, ShieldCheck } from 'lucide-react';
import './About.css';

const About = () => {


  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero text-center fade-in-up">
        <h1 className="about-title">About DeversityLabs</h1>
        <p className="about-subtitle">
          Empowering the future of digital business through state-of-the-art engineering, elite talent, and unwavering dedication to our partners' success.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission fade-in-up fade-delay-1">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                To accelerate technical innovation globally by providing unparalleled software development, AI, and Cloud expertise to ambitious organizations. We don't just write code; we architect solutions that drive monumental growth.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-box">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">50+</span>
                <span className="stat-label">Elite Engineers</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values bg-slate-50 py-24 fade-in-up fade-delay-1">
        <div className="container">
          <h2 className="text-center font-bold text-4xl mb-16 text-slate-800">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Lightbulb size={32} /></div>
              <h3>Innovation First</h3>
              <p>We leverage the latest frameworks and AI to deliver future-proof solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><ShieldCheck size={32} /></div>
              <h3>Integrity & Trust</h3>
              <p>Transparent communication and rock-solid reliability in every sprint.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Target size={32} /></div>
              <h3>Precision Execution</h3>
              <p>Flawless delivery driven by rigorous engineering standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form at bottom */}
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default About;
