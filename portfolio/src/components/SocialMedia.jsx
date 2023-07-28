import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Food from "./Food";

const SocialMedia = () => {
  return (
    <Canvas
      camera={{
        fov: 150,
        near: 0.1,
        far: 5000,
        position: [1, 0.3, 1],
      }}
    >
      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={-3} />
      <Food />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} />
    </Canvas>
  );
};

export default SocialMedia;
