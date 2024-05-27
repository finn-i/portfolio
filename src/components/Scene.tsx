import { Canvas, useFrame } from '@react-three/fiber';
import styles from '../styles/scene.module.css';
import { useRef, useState } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';
import { motion } from 'framer-motion';

const Scene = () => {
  return (
    <motion.div 
      className={styles.canvasContainer}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1, delay: 0.5 }} 
    >
      <Canvas camera={{position: [0, 0, 1] }}>
        <Stars /> 
      </Canvas>
    </motion.div>
  )
}

const Stars = () =>  {

  const ref = useRef<any>(null);
  const pref = useRef<any>(null);
  const [sphere] = useState<any>(() => new Float32Array(inSphere(new Float64Array(3000), { radius: 0.4 })));
  let scrollY = 0;
  const homeSection = document.getElementById("homeSection");

  const ROTATION_DELTA = 0.0002;
  const ROTATION_SCROLL_SPEED = 0.5;
  const CAMERA_X_OFFSET = 0.3;
  const CAMERA_Y_OFFSET = 0.5;

  useFrame(({ camera }) => {

    if (homeSection) {
      scrollY = 0 - (homeSection.getBoundingClientRect().top) / homeSection.clientHeight;
    }
    
    const rotationAngle = Math.PI * (scrollY * ROTATION_SCROLL_SPEED);
    
    ref.current.rotation.set(
      ref.current.rotation.x + ROTATION_DELTA, 
      rotationAngle + ROTATION_DELTA,
      ref.current.rotation.z + ROTATION_DELTA, 
    );

    camera.position.x = 0 - scrollY * CAMERA_X_OFFSET;
    camera.position.y = 0 + scrollY * CAMERA_Y_OFFSET;
    camera.position.z = 1 - scrollY * 0.5;
  });

  return (
    <group ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled={false} >
        <PointMaterial ref={pref} transparent size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default Scene;
