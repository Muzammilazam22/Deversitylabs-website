import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import serviceCloud from '../assets/service-cloud.jpg';
import serviceAPI from '../assets/service-api.jpg';
import serviceAI from '../assets/service-ai.png';
import serviceMobileNew from '../assets/service-mobile-new.png';
import './Services.css';

const servicesData = [
  {
    title: "Custom Software Development",
    slug: "custom",
    desc: "We design and engineer tailor-made software solutions that align with your unique business objectives — from initial discovery through deployment and beyond.",
    image: service1,
    imagePosition: "right",
    isIsolated: true
  },
  {
    title: "Cloud Infrastructure",
    slug: "cloud",
    desc: "Unlock peak performance with our scalable cloud architecture services. We help you migrate, optimize, and manage cloud environments for maximum reliability.",
    image: serviceCloud,
    imagePosition: "left",
    isIsolated: true
  },
  {
    title: "Web Development",
    slug: "web",
    desc: "From responsive landing pages to complex web applications, we craft pixel-perfect digital experiences built for speed, accessibility, and long-term scalability.",
    image: service3,
    imagePosition: "right",
    isIsolated: true
  },
  {
    title: "Mobile Development",
    slug: "mobile",
    desc: "We build high-performance native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.",
    image: serviceMobileNew,
    imagePosition: "left",
    isIsolated: true
  },
  {
    title: "Backend & API Engineering",
    slug: "backend",
    desc: "Robust back-end systems are the backbone of every great product. We architect secure, scalable APIs and server-side infrastructure that power your applications.",
    image: serviceAPI,
    imagePosition: "right",
    isIsolated: true
  },
  {
    title: "AI/ML Development",
    slug: "ai",
    desc: "We build and integrate intelligent algorithms and machine learning models to empower your digital products with predictive analytics and automation.",
    image: serviceAI,
    imagePosition: "left",
    isIsolated: true
  }
];

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="services-page page-transition">
      {/* Header section matching ExperLabs style */}
      <section className="services-header">
        <h1 className="services-page-title">Services</h1>
        <p className="services-page-subtitle">
          As Your Technology Partner you can count on us for the Technical Success of your business.
        </p>
      </section>

      {/* Dynamic Services Mapping */}
      {servicesData.map((service, idx) => {
        const isReverse = service.imagePosition === "left";
        return (
          <section id={service.slug} className={`service-block py-20 ${idx % 2 !== 0 ? 'bg-slate-50' : 'bg-white'}`} key={idx}>
            <div className="container">
              <div className={`service-grid ${isReverse ? 'reverse' : ''}`}>
                
                <div className="service-content">
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <Link to={`/services/${service.slug}`} className="btn-outline mt-6 inline-block">Learn More</Link>
                </div>

                <div className="service-illustration flex items-center justify-center">
                  <div 
                    className="illustration-crop-wrapper border-0 !shadow-none bg-transparent" 
                    style={{ 
                      width: '100%', 
                      maxWidth: '500px', 
                      height: '400px', 
                      overflow: 'hidden', 
                      display: 'flex', 
                      justifyContent: isReverse ? 'flex-start' : 'flex-end'
                    }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      style={{ 
                        width: service.isIsolated ? '100%' : '200%', 
                        height: '100%', 
                        objectFit: 'contain', 
                        objectPosition: service.isIsolated ? 'center' : (isReverse ? 'left center' : 'right center'),
                        pointerEvents: 'none'
                      }} 
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* Place the Contact Form exactly at the end of the page as requested */}
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Services;
