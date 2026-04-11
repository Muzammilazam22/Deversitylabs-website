import React, { useState } from 'react';
import { Users, UserPlus, FileSignature, CheckCircle2 } from 'lucide-react';
import './EngagementModels.css';

const models = [
  {
    id: 'dedicated',
    title: 'Dedicated Team',
    icon: <Users size={24} />,
    description: 'Hire an entire autonomous elite team to work exclusively on your long-term product development.',
    features: [
      'Full control over team composition',
      'Direct communication and management',
      'Scalable resources on demand',
      'Monthly predictable billing'
    ]
  },
  {
    id: 'augmentation',
    title: 'Staff Augmentation',
    icon: <UserPlus size={24} />,
    description: 'Seamlessly extend your in-house capabilities with our top-tier engineers, perfectly matching your stack.',
    features: [
      'Fill specific skill gaps instantly',
      'Seamless cultural integration',
      'Flexible contracts (hourly/monthly)',
      'No recruitment overhead'
    ]
  },
  {
    id: 'fixed',
    title: 'Fixed Price',
    icon: <FileSignature size={24} />,
    description: 'Best for projects with clearly defined scope and requirements. We deliver the complete product within budget.',
    features: [
      'Clear milestones and deadlines',
      'Zero budget overruns',
      'Comprehensive project management',
      'Guaranteed delivery'
    ]
  }
];

const EngagementModels = () => {
  const [activeTab, setActiveTab] = useState(models[0].id);

  const activeModel = models.find(m => m.id === activeTab);

  return (
    <section className="engagement-section py-24" id="hire">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Hire & Engagement Models</h2>
          <p className="section-subtitle">
            Flexible partnership frameworks designed to perfectly align with your business goals and technical requirements.
          </p>
        </div>

        <div className="engagement-container">
          {/* Tab Navigation */}
          <div className="engagement-tabs">
            {models.map(model => (
              <button
                key={model.id}
                className={`tab-button ${activeTab === model.id ? 'active' : ''}`}
                onClick={() => setActiveTab(model.id)}
              >
                {model.title}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="engagement-content-wrapper">
            <div className="engagement-card" key={activeModel.id}>
              <div className="engagement-header">
                <div className="engagement-icon-wrapper">
                  {activeModel.icon}
                </div>
                <div>
                  <h3 className="engagement-title">{activeModel.title}</h3>
                  <p className="engagement-desc">{activeModel.description}</p>
                </div>
              </div>
              
              <div className="engagement-features">
                {activeModel.features.map((feature, idx) => (
                  <div className="feature-item" key={idx}>
                    <CheckCircle2 size={20} className="feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="engagement-action">
                <button className="btn-primary">Hire a {activeModel.title} →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
