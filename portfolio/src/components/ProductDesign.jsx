import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Bike from "./Bike";

const ProductDesign = () => {
  return (
    <Canvas
      camera={{
        fov: 25,
        near: 0.5,
        far: 1000,
        position: [5, 1, 1],
        rotation: [30, 0, 0],
      }}
    >
      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={4} />
      <Stage environment="sunset" intensity={0.5}>
        <Bike />
      </Stage>
    </Canvas>
  );
};

export default ProductDesign;
