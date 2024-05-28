import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import styles from "../../styles/contact.module.css";

const Model = () => {
  const group = useRef<any>(null);
  const { scene, animations } = useGLTF('scene.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions.Trout_Swim) {
      actions.Trout_Swim.play();
    }
  }, [actions]);

  return (
    <group 
      ref={group} 
      rotation={[0, 0, 0]} 
    >
      <primitive object={scene} />
    </group>
);
}

const Trout = () => {
  return (
    <Canvas camera={{ fov: 50, position: [-133, 20, 60] }} className={styles.troutCanvas} >
      <ambientLight intensity={1} />
      <directionalLight position={[-2, 5, 0]} intensity={20} color={"rgb(20, 20, 255)"} />
      <directionalLight position={[-2, 5, 0]} intensity={9} />
      <Model />
    </Canvas>
  );
}

export default Trout;

useGLTF.preload("scene.glb");