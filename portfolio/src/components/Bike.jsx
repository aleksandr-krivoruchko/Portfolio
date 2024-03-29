import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/bike-transformed.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-20.86, -6.79, 20.86]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <group
            name="TheRocketAnimationfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.08, 0.08, 0.08]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={30}
                >
                  <group name="Object_7">
                    <group name="_rootJoint">
                      <group name="Root_00" rotation={[Math.PI / 2, 0, 0]}>
                        <group
                          name="VentMain_01"
                          position={[0, 1.2, 3.74]}
                          rotation={[-Math.PI / 2, 0, -Math.PI]}
                        >
                          <group
                            name="VentMain_end_010"
                            position={[0, 0.24, 0]}
                          />
                          <group
                            name="VentMain"
                            position={[0, 0.11, 0]}
                            rotation={[0, 0, Math.PI]}
                          >
                            <mesh
                              name="VentMain_Test_0"
                              geometry={nodes.VentMain_Test_0.geometry}
                              material={materials.Test}
                            />
                          </group>
                        </group>
                        <group
                          name="VentSub_02"
                          position={[0, 1.2, 3.51]}
                          rotation={[-Math.PI / 2, 0, -Math.PI]}
                        >
                          <group
                            name="VentSub_end_011"
                            position={[0, 0.12, 0]}
                          />
                          <group
                            name="VentSub"
                            position={[0, 0.06, 0]}
                            rotation={[0, 0, Math.PI]}
                          >
                            <mesh
                              name="VentSub_Test_0"
                              geometry={nodes.VentSub_Test_0.geometry}
                              material={materials.Test}
                            />
                          </group>
                        </group>
                        <group
                          name="WingRight_03"
                          position={[-0.2, 0.88, -2.9]}
                          rotation={[-Math.PI / 2, 0, Math.PI]}
                        >
                          <group
                            name="FlapRight_04"
                            position={[0.55, 0.04, 0]}
                            rotation={[0, 0, -1.84]}
                          >
                            <group
                              name="FlapRight_end_012"
                              position={[0, 0.41, 0]}
                            />
                            <group
                              name="FlapRight"
                              position={[0, 0.2, 0]}
                              rotation={[0, 0, -1.3]}
                            >
                              <mesh
                                name="FlapRight_Test_0"
                                geometry={nodes.FlapRight_Test_0.geometry}
                                material={materials.Test}
                              />
                            </group>
                          </group>
                          <group
                            name="WingRight"
                            position={[0, 0.24, 0]}
                            rotation={[0, 0, -Math.PI]}
                          >
                            <mesh
                              name="WingRight_Test_0"
                              geometry={nodes.WingRight_Test_0.geometry}
                              material={materials.Test}
                            />
                          </group>
                        </group>
                        <group
                          name="WingLeft_05"
                          position={[0.19, 0.88, -2.9]}
                          rotation={[-Math.PI / 2, 0, -Math.PI]}
                        >
                          <group
                            name="FlapLeft_06"
                            position={[-0.55, 0.04, 0]}
                            rotation={[0, 0, 1.84]}
                          >
                            <group
                              name="FlapLeft_end_013"
                              position={[0, 0.41, 0]}
                            />
                            <group
                              name="FlapLeft"
                              position={[0, 0.2, 0]}
                              rotation={[0, 0, 1.3]}
                            >
                              <mesh
                                name="FlapLeft_Test_0"
                                geometry={nodes.FlapLeft_Test_0.geometry}
                                material={materials.Test}
                              />
                            </group>
                          </group>
                          <group
                            name="WingLeft"
                            position={[0, 0.24, 0]}
                            rotation={[0, 0, Math.PI]}
                          >
                            <mesh
                              name="WingLeft_Test_0"
                              geometry={nodes.WingLeft_Test_0.geometry}
                              material={materials.Test}
                            />
                          </group>
                        </group>
                        <group
                          name="SwitchRight_07"
                          position={[-0.69, 1.94, 0.65]}
                          rotation={[-0.49, -0.02, -0.03]}
                        >
                          <group
                            name="SwitchRight_end_014"
                            position={[0, 0.02, 0]}
                          />
                          <group
                            name="SwitchRight"
                            rotation={[-1.08, -0.02, 0.03]}
                          >
                            <mesh
                              name="SwitchRight_Test_0"
                              geometry={nodes.SwitchRight_Test_0.geometry}
                              material={materials.Test}
                            />
                          </group>
                        </group>
                        <group
                          name="SwitchLeft_08"
                          position={[0.69, 1.94, 0.65]}
                          rotation={[-0.49, 0.02, 0.03]}
                        >
                          <group
                            name="SwitchLeft_end_015"
                            position={[0, 0.02, 0]}
                          />
                          <group
                            name="SwitchLeft"
                            rotation={[-1.08, 0.02, -0.03]}
                          >
                            <mesh
                              name="SwitchLeft_Test_0"
                              geometry={nodes.SwitchLeft_Test_0.geometry}
                              material={materials.Test}
                            />
                          </group>
                        </group>
                        <group
                          name="WingMain_09"
                          position={[0, 1.76, -2.72]}
                          rotation={[-0.38, 0, 0]}
                        >
                          <group
                            name="WingMain_end_016"
                            position={[0, 0.3, 0]}
                          />
                          <group name="WingMain" rotation={[-1.19, 0, 0]}>
                            <mesh
                              name="WingMain_Test_0"
                              geometry={nodes.WingMain_Test_0.geometry}
                              material={materials.Test}
                            />
                          </group>
                        </group>
                        <group name="Bike" rotation={[-Math.PI / 2, 0, 0]}>
                          <mesh
                            name="Bike_Test_0"
                            geometry={nodes.Bike_Test_0.geometry}
                            material={materials.Test}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/bike-transformed.glb");
