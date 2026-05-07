import React, { useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Solutions = () => {


  return (
    <div className="services-page">
      <section className="services-header">
        <h1 className="services-page-title">Our Solutions</h1>
        <p className="services-page-subtitle">
          Discover our ready-to-deploy, industry-leading solutions ranging from E-commerce and Data Analytics to Salesforce Commerce Cloud. Check back soon for full technical overviews.
        </p>
      </section>
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Solutions;
