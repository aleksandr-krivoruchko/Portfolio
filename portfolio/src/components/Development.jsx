import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Tablet from "./Tablet";

const Development = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate rotateSpeed={16} />
      <Stage environment="sunset" intensity={0.5}>
        <Tablet />
      </Stage>
    </Canvas>
  );
};

export default Development;
