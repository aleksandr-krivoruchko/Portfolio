import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Ball from "./Ball";

const WebDesign = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment="sunset" intensity={0.5}>
        <Ball />
      </Stage>
    </Canvas>
  );
};

export default WebDesign;
