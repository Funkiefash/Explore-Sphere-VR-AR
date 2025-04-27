
import { useState } from 'react';
import { Environment } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface EnvironmentSelectorProps {
  environments: Environment[];
  onSelect: (environment: Environment) => void;
}

const EnvironmentSelector: React.FC<EnvironmentSelectorProps> = ({ environments, onSelect }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 mb-4">
          AdventureSphere
        </h1>
        <p className="text-lg text-white/80 max-w-lg mx-auto">
          Explore immersive educational environments and discover knowledge through interactive VR experiences
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {environments.map((env) => (
          <div 
            key={env.id}
            className="environment-card"
            onMouseEnter={() => setHoveredId(env.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card 
              className={`overflow-hidden cursor-pointer transition-all duration-300 border-transparent ${
                hoveredId === env.id ? 'border-primary/50' : ''
              }`}
              onClick={() => onSelect(env)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={env.imageUrl} 
                  alt={env.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredId === env.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <span className="inline-block px-2 py-1 text-xs rounded bg-primary/90 text-white mb-1">
                    {env.category.charAt(0).toUpperCase() + env.category.slice(1)}
                  </span>
                  <h3 className="text-white text-lg font-bold">{env.name}</h3>
                </div>
              </div>
              <CardContent className="p-4 bg-secondary">
                <p className="text-white/80 text-sm">{env.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentSelector;
