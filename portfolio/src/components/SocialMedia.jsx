import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Food from "./Food";

const SocialMedia = () => {
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 5000,
        position: [1, 0.3, 0],
      }}
    >
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={-3} />
      <Stage environment="sunset" intensity={0.5}>
        <Food />
      </Stage>
    </Canvas>
  );
};

export default SocialMedia;
