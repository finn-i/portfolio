import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/contact.module.css";

const Model = () => {
  const group = useRef<any>(null);
  const { scene, animations } = useGLTF('scene.glb');
  const { actions } = useAnimations(animations, group);
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (actions && actions.Trout_Swim) {
      actions.Trout_Swim.play();
    }
  }, [actions]);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    if (hovered) group.current.scale.set(1.1, 1.1, 1.1);
    else group.current.scale.set(1, 1, 1)
  }, [hovered]);

  useFrame(() => {
    if (hovered) {
      // group.current.rotation.set(group.current.rotation.x, group.current.rotation.y, group.current.rotation.z + 0.01)  
    }
  })

  // useEffect(() => {
  //   scene.traverse((node) => {
  //     if ((node as Mesh).isMesh) {
  //       ((node as Mesh).material as MeshBasicMaterial).wireframe = true;
  //     }
  //   });
  // }, [scene]);

  return (
    <group 
      ref={group} 
      rotation={[0, 0, 0]} 
      onPointerEnter={()=>{setHovered(true)}}
      onPointerLeave={()=>{setHovered(false)}}
      onClick={() => {
        // rfpRef.current.fullpageApi.moveTo("home");
      }}
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
      {/* <OrbitControls enableDamping={false} /> */}
    </Canvas>
  );
}

export default Trout;

useGLTF.preload("scene.glb");