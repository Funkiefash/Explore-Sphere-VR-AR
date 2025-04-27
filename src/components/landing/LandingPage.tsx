
import React from 'react';
import EnvironmentSelector from '@/components/EnvironmentSelector';
import LandingHeader from '@/components/landing/LandingHeader';
import CollaborationSection from '@/components/landing/CollaborationSection';
import { Environment } from '@/types';

interface LandingPageProps {
  environments: Environment[];
  onSelectEnvironment: (env: Environment) => void;
}

const LandingPage = ({ environments, onSelectEnvironment }: LandingPageProps) => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <LandingHeader />
        <EnvironmentSelector 
          environments={environments} 
          onSelect={onSelectEnvironment}
        />
      </div>
      <CollaborationSection />
    </>
  );
};

export default LandingPage;
