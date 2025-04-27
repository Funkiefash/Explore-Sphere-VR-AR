
import { useState, useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 2;
const ZOOM_SPEED = 0.1;

const CameraControls = () => {
  const { camera } = useThree();
  const [isMoving, setIsMoving] = useState(false);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);
  const targetZoom = useRef(1);
  const mouseDown = useRef(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * 0.001;
      targetZoom.current = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, targetZoom.current - delta));
    };
    
    const handleMouseDown = (e: MouseEvent) => {
      mouseDown.current = true;
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseDown.current) return;
      setIsMoving(true);
      
      const deltaX = e.clientX - mousePosition.current.x;
      const deltaY = e.clientY - mousePosition.current.y;
      
      targetRotationY.current -= deltaX * 0.01;
      targetRotationX.current -= deltaY * 0.01;
      
      targetRotationX.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationX.current));
      
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };
    
    const handleMouseUp = () => {
      mouseDown.current = false;
      setTimeout(() => setIsMoving(false), 150);
    };

    // Touch events
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        mouseDown.current = true;
        mousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!mouseDown.current || e.touches.length !== 1) return;
      setIsMoving(true);

      const deltaX = e.touches[0].clientX - mousePosition.current.x;
      const deltaY = e.touches[0].clientY - mousePosition.current.y;

      targetRotationY.current -= deltaX * 0.01;
      targetRotationX.current -= deltaY * 0.01;

      targetRotationX.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationX.current));

      mousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      mouseDown.current = false;
      setTimeout(() => setIsMoving(false), 150);
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
  
  useFrame(() => {
    camera.rotation.x += (targetRotationX.current - camera.rotation.x) * 0.1;
    camera.rotation.y += (targetRotationY.current - camera.rotation.y) * 0.1;
    
    // Only adjust zoom if the camera has zoom property
    if ('zoom' in camera) {
      camera.zoom += (targetZoom.current - camera.zoom) * ZOOM_SPEED;
      camera.updateProjectionMatrix();
    }
  });
  
  return null;
};

export default CameraControls;
