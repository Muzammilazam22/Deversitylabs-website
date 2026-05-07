import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Logo className="nav-logo" />
        </Link>

        <nav className="desktop-nav">
          <div className="nav-item-dropdown">
            <Link to="/services" className="nav-link">Services</Link>
            <div className="dropdown-menu shadow-lg">
              <Link to="/services#custom" className="dropdown-item">Custom Software Development</Link>
              <Link to="/services#cloud" className="dropdown-item">Cloud Infrastructure Setup</Link>
              <Link to="/services#web" className="dropdown-item">Web Development</Link>
              <Link to="/services#mobile" className="dropdown-item">Mobile Development</Link>
              <Link to="/services#backend" className="dropdown-item">Backend Applications</Link>
              <Link to="/services#ai" className="dropdown-item">AI Solutions</Link>
            </div>
          </div>
          <Link to="/solutions" className="nav-link">Solutions</Link>
          <Link to="/hire" className="nav-link">Hire Us</Link>
          <Link to="/industries" className="nav-link">Industries</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/careers" className="nav-link">Careers</Link>
          <a href="#contact-form" className="nav-link">Contact</a>
        </nav>

        <div className="nav-actions">
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a href="#contact" className="btn-primary">
            <span>Book a Call</span> <ArrowRight size={16} />
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
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
          <Link to="/hire" onClick={() => setMobileMenuOpen(false)}>Hire Us</Link>
          <Link to="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
          <a href="#contact-form" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
