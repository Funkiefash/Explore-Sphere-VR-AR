
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, InfoPoint } from '@/types';
import { Button } from '@/components/ui/button';
import { Navigation, ArrowLeft, ZoomIn, ZoomOut } from 'lucide-react';
import Scene from './scene/Scene';
import InformationPanel from './InformationPanel';

interface SceneViewerProps {
  environment: Environment;
  onBack: () => void;
}

const SceneViewer: React.FC<SceneViewerProps> = ({ environment, onBack }) => {
  const [selectedInfoPoint, setSelectedInfoPoint] = useState<InfoPoint | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const image = new Image();
    image.src = environment.panoramaUrl;
    image.onload = () => {
      setLoading(false);
    };
    
    return () => {
      image.onload = null;
    };
  }, [environment.panoramaUrl]);

  return (
    <div className="relative w-full h-screen">
      {loading && (
        <div className="scene-loading">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-transparent border-primary rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="text-white/90 text-lg">Loading environment...</p>
          </div>
        </div>
      )}
      
      <Button
        variant="ghost"
        onClick={onBack}
        className="absolute top-4 left-4 z-50 bg-black/30 hover:bg-black/50 text-white"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Environments
      </Button>
      
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 px-4 py-2 rounded-full">
        <h2 className="text-white font-semibold">{environment.name}</h2>
      </div>
      
      <div className="absolute bottom-4 right-4 z-50 flex flex-col gap-2">
        <div className="bg-black/30 px-3 py-2 rounded-lg flex items-center">
          <Navigation className="w-5 h-5 mr-2 text-white/70" />
          <span className="text-white/70 text-sm">Click and drag to look around</span>
        </div>
        <div className="bg-black/30 px-3 py-2 rounded-lg flex items-center">
          <ZoomIn className="w-5 h-5 mr-2 text-white/70" />
          <span className="text-white/70 text-sm">Scroll to zoom in/out</span>
        </div>
      </div>
      
      <Canvas className="w-full h-full">
        <Scene 
          environment={environment} 
          onInfoPointClick={(infoPoint) => setSelectedInfoPoint(infoPoint)}
        />
      </Canvas>
      
      <InformationPanel 
        infoPoint={selectedInfoPoint}
        onClose={() => setSelectedInfoPoint(null)}
      />
    </div>
  );
};

export default SceneViewer;
