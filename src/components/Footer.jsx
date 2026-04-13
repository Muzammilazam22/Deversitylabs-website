import React from 'react';
import './Footer.css';
import Logo from './Logo';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="/#home" className="logo mb-4">
              <Logo className="footer-logo" />
            </a>
            <p className="footer-desc mt-4">
              Your trusted Technology Partner empowering businesses with state-of-the-art solutions in AI, Salesforce, and Full-Stack environments.
            </p>
            <div className="social-links mt-8">
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><a href="#">AI/ML Solutions</a></li>
              <li><a href="#">Salesforce Consulting</a></li>
              <li><a href="#">Hubspot Integration</a></li>
              <li><a href="#">ServiceNow</a></li>
              <li><a href="#">MERN/MEAN/MEVN Stack</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <Mail size={18} className="contact-icon" />
                <span>hello@deversitylabs.com</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>123 Innovation Drive,<br />Tech Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom mt-16 pt-8 pb-8">
          <p>&copy; {new Date().getFullYear()} DeversityLabs. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
