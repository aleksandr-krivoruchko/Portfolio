import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Shiba from "./Shiba";

const Illustration = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment="sunset" intensity={0.5}>
        <Shiba />
      </Stage>
    </Canvas>
  );
};

export default Illustration;
