import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    text: "Their Salesforce implementation saved us countless hours. The automation and integrations they built are truly top-notch.",
    author: "Michael Chen",
    role: "VP of Sales, GrowthWorks",
  },
  {
    text: "The AI/ML predictive model they built for our SaaS platform increased user retention by 35%. Absolutely phenomenal work.",
    author: "Elena Rodriguez",
    role: "Product Manager, StartupX",
  },
  {
    text: "We needed a robust ServiceNow deployment and DeversityLabs delivered perfectly. Their expertise is unmatched.",
    author: "David Smith",
    role: "Director of IT, Enterprise IT",
  },
  {
    text: "Connecting our Hubspot marketing with a custom MERN stack backend was brilliant. Highly recommend their services.",
    author: "Amanda Wright",
    role: "CMO, MarketFlow",
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="testimonials-section py-20 bg-white" id="testimonials">
      <div className="container">
        <h2 className="text-center text-4xl font-bold text-slate-800 mb-4">Trusted by organizations worldwide to deliver exceptional technology solutions.</h2>
        
        <div className="testimonials-track-container mt-12">
          <div className="testimonials-scroll-view" ref={scrollRef}>
            {testimonials.map((t, index) => (
              <div className="testimonial-card" key={index}>
                <div className="stars-wrapper">
                  <Star className="star-icon" fill="#fbbf24" stroke="none" size={20} />
                  <Star className="star-icon" fill="#fbbf24" stroke="none" size={20} />
                  <Star className="star-icon" fill="#fbbf24" stroke="none" size={20} />
                  <Star className="star-icon" fill="#fbbf24" stroke="none" size={20} />
                  <Star className="star-icon" fill="#fbbf24" stroke="none" size={20} />
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author-block">
                  <h4 className="testimonial-author">{t.author}</h4>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons perfectly matching screenshot */}
        <div className="testimonials-controls mt-10">
          <button className="slider-btn" onClick={scrollLeft} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button className="slider-btn" onClick={scrollRight} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
