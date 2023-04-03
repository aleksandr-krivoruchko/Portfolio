import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Food from "./Food";

const SocialMedia = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate rotateSpeed={16} />
      <Stage environment="sunset" intensity={0.5}>
        <Food />
      </Stage>
    </Canvas>
  );
};

export default SocialMedia;
