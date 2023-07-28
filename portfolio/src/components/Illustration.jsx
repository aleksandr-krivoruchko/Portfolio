import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Shiba from "./Shiba";

const Illustration = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <Shiba />
    </Canvas>
  );
};

export default Illustration;
