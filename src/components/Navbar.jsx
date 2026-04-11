import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <Logo className="nav-logo" />
        </a>

        <nav className="desktop-nav">
          <div className="nav-item-dropdown">
            <a href="/services" className="nav-link">Services</a>
            <div className="dropdown-menu shadow-lg">
              <a href="/services#ai" className="dropdown-item">AI Solutions</a>
              <a href="/services#custom" className="dropdown-item">Custom Software Development</a>
              <a href="/services#cloud" className="dropdown-item">Cloud Infrastructure Setup</a>
              <a href="/services#web" className="dropdown-item">Web Development</a>
              <a href="/services#mobile" className="dropdown-item">Mobile Development</a>
              <a href="/services#backend" className="dropdown-item">Backend Applications</a>
            </div>
          </div>
          <a href="/solutions" className="nav-link">Solutions</a>
          <a href="/hire" className="nav-link">Hire Us</a>
          <a href="/industries" className="nav-link">Industries</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/careers" className="nav-link">Careers</a>
          <a href="#contact-form" className="nav-link">Contact</a>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn-primary">
            Book a Call <ArrowRight size={16} />
          </a>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="/services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
          <a href="/hire" onClick={() => setMobileMenuOpen(false)}>Hire Us</a>
          <a href="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</a>
          <a href="/about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</a>
          <a href="#contact-form" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
