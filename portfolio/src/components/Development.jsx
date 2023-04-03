import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Tablet from "./Tablet";

const Development = () => {
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [1, 1, 1],
      }}
    >
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
      <Stage environment="sunset" intensity={0.5}>
        <Tablet />
      </Stage>
    </Canvas>
  );
};

export default Development;
