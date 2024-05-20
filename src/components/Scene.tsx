import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import styles from '../styles/scene.module.css';
import { useRef, useState } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';
import { Euler } from 'three';
import  { useScroll } from 'framer-motion';

const Scene = () => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas camera={{position: [0, 0, 1] }}>
        <Stars /> 
      </Canvas>
    </div>
  )
}

const Stars = () =>  {

  const ref = useRef(null);
  const [sphere] = useState<any>(() => new Float32Array(inSphere(new Float64Array(5001), { radius: 0.2 })));
  const [rotation, setRotation] = useState(new Euler(0, 0, 0));
  const { scrollYProgress } = useScroll();

  const ROTATION_DELTA = 0.0003;
  const ROTATION_SCROLL_SPEED = 1.2;
  const CAMERA_X_OFFSET = 0.5;
  const CAMERA_Y_OFFSET = 0.5;

  useFrame(({ camera }) => {
    const scrollProgress = scrollYProgress.get();
    const rotationAngle = Math.PI * (scrollProgress * ROTATION_SCROLL_SPEED);
    
    setRotation((prev) => new Euler(
      rotationAngle + ROTATION_DELTA, 
      rotationAngle + ROTATION_DELTA, 
      prev.z  + ROTATION_DELTA
    ));

    camera.position.x = 0 - scrollProgress * CAMERA_X_OFFSET;
    camera.position.y = 0 + scrollProgress * CAMERA_Y_OFFSET;
    camera.position.z = 1 - scrollProgress * 1.8;
  });

  return (
    <group rotation={rotation}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} >
        <PointMaterial transparent color={"rgb(0, 150, 250)"} size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default Scene;
