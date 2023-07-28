import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Ball from "./Ball";

const WebDesign = () => {
  return (
    <Canvas>
      <Ball />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 5]} />
      <OrbitControls autoRotate enableZoom={true} autoRotateSpeed={5} />
    </Canvas>
  );
};

export default WebDesign;
