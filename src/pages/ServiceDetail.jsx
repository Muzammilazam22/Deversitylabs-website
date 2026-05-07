import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GenericPage from './GenericPage';

const serviceDetails = {
  custom: {
    title: "Custom Software Development",
    description: "We design and engineer tailor-made software solutions that align with your unique business objectives. Our custom software development process involves deep collaboration to ensure the final product meets your exact specifications and solves your most complex challenges."
  },
  cloud: {
    title: "Cloud Infrastructure",
    description: "Unlock peak performance with our scalable cloud architecture services. We specialize in AWS, Azure, and Google Cloud Platform, helping you migrate legacy systems, optimize your current cloud infrastructure, and manage cloud environments for maximum reliability and cost-efficiency."
  },
  web: {
    title: "Web Development",
    description: "From responsive landing pages to complex web applications, we craft pixel-perfect digital experiences. Our team utilizes modern frameworks like React, Vue, and Next.js to build web applications that are lightning-fast, highly accessible, and optimized for SEO."
  },
  mobile: {
    title: "Mobile Development",
    description: "We build high-performance native and cross-platform mobile applications. Whether you need an iOS app built with Swift, an Android app using Kotlin, or a cross-platform solution using React Native or Flutter, we deliver seamless user experiences."
  },
  backend: {
    title: "Backend & API Engineering",
    description: "Robust back-end systems are the backbone of every great product. We architect secure, scalable APIs and server-side infrastructure using Node.js, Python, Go, and Java to power your applications and handle high-volume data processing."
  },
  ai: {
    title: "AI/ML Development",
    description: "Empower your digital products with predictive analytics, natural language processing, and automation. We build and integrate intelligent algorithms and machine learning models tailored to your specific industry use cases."
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const data = serviceDetails[slug];

  if (!data) {
    return (
      <div className="container py-24 text-center">
        <h2>Service not found</h2>
        <Link to="/services" className="btn-primary mt-4">Back to Services</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container mb-8">
        <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '600' }}>
          <ArrowLeft size={16} /> Back to Services
        </Link>
      </div>
      <GenericPage title={data.title} description={data.description} />
    </div>
  );
};

export default ServiceDetail;
