
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Environment, InfoPoint } from '@/types';
import PanoramicBackground from './PanoramicBackground';
import CameraControls from './CameraControls';
import Hotspot from './Hotspot';

interface SceneProps {
  environment: Environment;
  onInfoPointClick: (infoPoint: InfoPoint) => void;
}

const Scene = ({ environment, onInfoPointClick }: SceneProps) => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 0.1);
    camera.rotation.set(0, 0, 0);
  }, [camera, environment]);

  return (
    <>
      <PanoramicBackground url={environment.panoramaUrl} />
      <CameraControls />
      
      {environment.infoPoints.map((point) => (
        <Hotspot
          key={point.id}
          id={point.id}
          position={new THREE.Vector3(point.position.x, point.position.y, point.position.z)}
          onClick={() => onInfoPointClick(point)}
        />
      ))}
    </>
  );
};

export default Scene;
