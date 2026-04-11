import React, { useEffect } from 'react';
import EngagementModels from '../components/EngagementModels';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Hire = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <EngagementModels />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Hire;
