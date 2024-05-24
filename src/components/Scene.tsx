import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import styles from '../styles/scene.module.css';
import { useEffect, useRef, useState } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere, inBox } from 'maath/random';
import  { useMotionValueEvent, useScroll } from 'framer-motion';
import { theme } from '../assets/data';
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
  const [sphere] = useState<any>(() => new Float32Array(inSphere(new Float64Array(3000), { radius: 0.5 })));
  // const [sphere2] = useState<any>(() => new Float32Array(inSphere(new Float64Array(3000), { radius: 0.2 })));
  const { scrollYProgress } = useScroll();

  const ROTATION_DELTA = 0.0002;
  const ROTATION_SCROLL_SPEED = 1.2;
  const CAMERA_X_OFFSET = 1.2;
  const CAMERA_Y_OFFSET = 1.5;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0) {
        pref.current.color.set(theme.accent);
      } else {
        pref.current.color.set(theme.secondary);
      }
  })

  useFrame(({ camera }) => {
    const scrollProgress = scrollYProgress.get();
    const rotationAngle = Math.PI * (scrollProgress * ROTATION_SCROLL_SPEED);
    
    ref.current.rotation.set(
      rotationAngle + ROTATION_DELTA,
      ref.current.rotation.y + ROTATION_DELTA, 
      ref.current.rotation.z - ROTATION_DELTA, 
    );

    camera.position.x = 0 - scrollProgress * CAMERA_X_OFFSET;
    camera.position.y = 0 + scrollProgress * CAMERA_Y_OFFSET;
    camera.position.z = 1 - scrollProgress * 1.2;
  });

  return (
    <group ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled={false} >
        <PointMaterial ref={pref} transparent size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
      {/* <Points positions={sphere2} stride={3} frustumCulled={false} >
        <PointMaterial transparent color={"rgb(50, 50, 20)"} size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points> */}
    </group>
  )
}

export default Scene;
