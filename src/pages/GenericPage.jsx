import React, { useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const GenericPage = ({ title, description }) => {


  return (
    <div className="services-page">
      <section className="services-header">
        <h1 className="services-page-title">{title}</h1>
        <p className="services-page-subtitle">
          {description}
        </p>
      </section>
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default GenericPage;
