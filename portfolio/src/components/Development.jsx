import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Tablet from "./Tablet";

const Development = () => {
  return (
    <Canvas
      camera={{
        fov: 95,
        near: 0.5,
        far: 500,
        position: [1, 1, 1],
      }}
    >
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
      <Tablet />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 5]} />
    </Canvas>
  );
};

export default Development;
