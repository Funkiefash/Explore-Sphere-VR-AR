
import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <FeatureCard
        emoji="🤝"
        title="Collaborative Learning"
        description="Join study groups and share your knowledge with peers from around the world."
      />
      <FeatureCard
        emoji="💡"
        title="Interactive Sessions"
        description="Participate in live discussions and interactive learning sessions."
      />
      <FeatureCard
        emoji="🌟"
        title="Expert Guidance"
        description="Learn from experienced educators and subject matter experts."
      />
    </div>
  );
};

const FeatureCard = ({ emoji, title, description }: { emoji: string; title: string; description: string }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <div className="text-3xl text-primary mb-4">{emoji}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeaturesSection;
