
import { useState } from 'react';
import SceneViewer from '@/components/SceneViewer';
import LandingPage from '@/components/landing/LandingPage';
import { Environment } from '@/types';
import { environments } from '@/components/environments/EnvironmentData';

const Index = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState<Environment | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {selectedEnvironment ? (
        <SceneViewer 
          environment={selectedEnvironment} 
          onBack={() => setSelectedEnvironment(null)}
        />
      ) : (
        <LandingPage 
          environments={environments}
          onSelectEnvironment={(env) => setSelectedEnvironment(env)}
        />
      )}
    </div>
  );
};

export default Index;
