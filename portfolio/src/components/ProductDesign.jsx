import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Bike from "./Bike";

const ProductDesign = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={10} />
      <Bike />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 5]} />
    </Canvas>
  );
};

export default ProductDesign;
