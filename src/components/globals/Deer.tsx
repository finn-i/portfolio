import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

function Model() {
  const group = useRef<any>(null);
  const { scene, nodes, materials, animations } = useGLTF('trout.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions.Trout_Swim) {
      console.log(Object.keys(actions))
      actions.Trout_Swim.play();
    }
  }, [actions]);

  // useEffect(() => {
  //   scene.traverse((node) => {
  //     if ((node as Mesh).isMesh) {
  //       ((node as Mesh).material as MeshBasicMaterial).wireframe = true;
  //     }
  //   });
  // }, [scene]);

  return (
    <group ref={group} rotation={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
);
}

const Deer = () => {
  return (
    <Canvas camera={{ fov: 50, position: [0, 0, 0] }}>
      <ambientLight intensity={10} />
      <Model />
    </Canvas>
  );
}

export default Deer;