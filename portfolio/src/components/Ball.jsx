import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/ball-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.pSphere1_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
            position={[0, 0, -0.06]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.98, 0.97, 0.98]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ball-transformed.glb");
