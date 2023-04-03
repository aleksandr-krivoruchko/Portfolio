import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/food-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.banka}
        position={[0.74, 0.35, 0]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.08, 0.01, 0.08]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.metal}
        position={[0.78, 0.35, 0]}
        scale={[0.02, 0.04, 0.02]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.logo}
        position={[0, 0.02, 0]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1.01, 0.31, 1.01]}
      />
    </group>
  );
}

useGLTF.preload("/food-transformed.glb");
