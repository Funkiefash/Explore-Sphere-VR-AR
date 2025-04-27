
import React from 'react';
import FeaturesSection from './FeaturesSection';

const CollaborationSection = () => {
  return (
    <div className="bg-accent/10 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Join Our Learning Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with other learners, share insights, and explore together in our collaborative virtual environments.
          </p>
        </div>
        <FeaturesSection />
      </div>
    </div>
  );
};

export default CollaborationSection;
