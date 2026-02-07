"use client";

import { MeshReflectorMaterial } from "@react-three/drei";

export default function ReflectiveFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#151515"
        metalness={0.5}
        mirror={0} // Changed mirror to 0 for type safety if needed, or keeping it as prop if valid
      />
    </mesh>
  );
}
