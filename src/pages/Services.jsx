import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import './Services.css';

const servicesData = [
  {
    title: "Custom Software Development",
    desc: "We design and engineer tailor-made software solutions that align with your unique business objectives — from initial discovery through deployment and beyond.",
    image: service1,
    imagePosition: "right",
    isIsolated: true // New flag because this image has no baked-in text
  },
  {
    title: "Cloud Infrastructure",
    desc: "Unlock peak performance with our scalable cloud architecture services. We help you migrate, optimize, and manage cloud environments for maximum reliability.",
    image: service2,
    imagePosition: "left"
  },
  {
    title: "Web Development",
    desc: "From responsive landing pages to complex web applications, we craft pixel-perfect digital experiences built for speed, accessibility, and long-term scalability.",
    image: service3,
    imagePosition: "right",
    isIsolated: true // Vector illustration without baked-in text
  },
  {
    title: "Mobile Development",
    desc: "We build high-performance native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.",
    image: service4,
    imagePosition: "left"
  },
  {
    title: "Backend & API Engineering",
    desc: "Robust back-end systems are the backbone of every great product. We architect secure, scalable APIs and server-side infrastructure that power your applications.",
    image: service5,
    imagePosition: "right"
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
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
          <section className={`service-block py-20 ${idx % 2 !== 0 ? 'bg-slate-50' : 'bg-white'}`} key={idx}>
            <div className="container">
              <div className={`service-grid ${isReverse ? 'reverse' : ''} fade-in-up`}>
                
                <div className="service-content">
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <button className="btn-outline mt-6">Learn More</button>
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
                      justifyContent: isReverse ? 'flex-start' : 'flex-end',
                      mixBlendMode: 'darken'
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
