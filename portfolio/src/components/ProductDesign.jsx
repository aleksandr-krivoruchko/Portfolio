import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Bike from "./Bike";

const ProductDesign = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate rotateSpeed={16} />
      <Stage environment="sunset" intensity={0.5}>
        <Bike />
      </Stage>
    </Canvas>
  );
};

export default ProductDesign;
