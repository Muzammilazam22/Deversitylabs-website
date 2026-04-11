import React, { useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const GenericPage = ({ title, description }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32">
      <div className="container text-center py-20">
        <h1 className="text-5xl font-bold text-slate-800 mb-6">{title}</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-20">
          {description}
        </p>
      </div>
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default GenericPage;
