
import { useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

interface PanoramicBackgroundProps {
  url: string;
}

const PanoramicBackground = ({ url }: PanoramicBackgroundProps) => {
  const texture = useLoader(THREE.TextureLoader, url);
  
  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

export default PanoramicBackground;
