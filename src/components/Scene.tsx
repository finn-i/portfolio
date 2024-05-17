import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import styles from '../styles/scene.module.css';
import { useRef, useState } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { inSphere } from 'maath/random';
import { Euler } from 'three';

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
  const ROTATION_DELTA = 0.0001;
  const [sphere] = useState<any>(() => new Float32Array(inSphere(new Float64Array(5001), { radius: 2 })));
  const [rotation, setRotation] = useState(new Euler(0, 0, 0));

  useFrame(() => {
    setRotation((prev) => new Euler(
      prev.x  + ROTATION_DELTA, 
      prev.y + ROTATION_DELTA, 
      prev.z  + ROTATION_DELTA
    ));
  });

  return (
    <group rotation={rotation}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} >
        <PointMaterial transparent color="#F0EDCC" size={0.004} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default Scene;
