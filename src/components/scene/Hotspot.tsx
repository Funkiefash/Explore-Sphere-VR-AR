
import { useState } from 'react';
import { Vector3 } from 'three';

interface HotspotProps {
  id: string;
  position: Vector3;
  onClick: () => void;
}

const Hotspot: React.FC<HotspotProps> = ({ position, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial
        color={hovered ? "#8b5cf6" : "#6d28d9"}
        emissive={hovered ? "#8b5cf6" : "#6d28d9"}
        emissiveIntensity={0.8}
        transparent
        opacity={0.8}
      />
      <pointLight color="#8b5cf6" intensity={5} distance={3} />
    </mesh>
  );
};

export default Hotspot;
