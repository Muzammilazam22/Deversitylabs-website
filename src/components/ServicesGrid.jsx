import React from 'react';
import { Brain, Cloud, Rocket, Code2, Database, LayoutTemplate, Smartphone } from 'lucide-react';
import './ServicesGrid.css';

const services = [
  {
    icon: <Brain size={32} />,
    title: 'AI/ML Solutions',
    description: 'Transform your business with intelligent machine learning models, predictive analytics, and natural language processing tailored to your needs.',
  },
  {
    icon: <Cloud size={32} />,
    title: 'Salesforce Consulting',
    description: 'Optimize your CRM strategy with custom Salesforce implementation, integration, and development for seamless sales operations.',
  },
  {
    icon: <Rocket size={32} />,
    title: 'Hubspot Integration',
    description: 'Automate marketing and sales pipelines with powerful Hubspot configurations, ensuring your growth engine never stops.',
  },
  {
    icon: <LayoutTemplate size={32} />,
    title: 'ServiceNow Implementation',
    description: 'Streamline your IT service management operations using automated workflows and customized ServiceNow ecosystems.',
  },
  {
    icon: <Database size={32} />,
    title: 'MERN Stack',
    description: 'Build fast, scalable enterprise applications utilizing MongoDB, Express.js, React, and Node.js.',
  },
  {
    icon: <Code2 size={32} />,
    title: 'MEAN Stack',
    description: 'Develop robust architecture backed by Angular, combining performance with extensive enterprise features.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'MEVN Stack',
    description: 'Create lightning-fast reactive SPA platforms using Vue.js wrapped in a scalable Node backend environment.',
  }
];

const ServicesGrid = () => {
  return (
    <section className="services-section py-24" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Services We Provide</h2>
          <p className="section-subtitle">
            As your Technology Partner you can count on us for the Technical Success of your business across multiple advanced stacks.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a href="#contact" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
