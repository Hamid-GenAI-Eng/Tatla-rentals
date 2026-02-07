"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function CarModel() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.05 + 0.2;
      meshRef.current.rotation.y = Math.sin(t * 0.3) * 0.1 - 0.5; // Slight turn
    }
  });

  return (
    <group dispose={null}>
      {/* Placeholder Abstract Car Shape */}
      <mesh ref={meshRef} position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.5, 1.2, 2]} />
        <meshStandardMaterial
          color="#111"
          roughness={0.1}
          metalness={0.9}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* Wheels Placeholder */}
      <mesh position={[-1.5, 0.3, 1]} rotation={[Math.PI/2, 0, 0]} castShadow>
         <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
         <meshStandardMaterial color="#000" roughness={0.5} />
      </mesh>
      <mesh position={[1.5, 0.3, 1]} rotation={[Math.PI/2, 0, 0]} castShadow>
         <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
         <meshStandardMaterial color="#000" roughness={0.5} />
      </mesh>
      <mesh position={[-1.5, 0.3, -1]} rotation={[Math.PI/2, 0, 0]} castShadow>
         <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
         <meshStandardMaterial color="#000" roughness={0.5} />
      </mesh>
      <mesh position={[1.5, 0.3, -1]} rotation={[Math.PI/2, 0, 0]} castShadow>
         <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
         <meshStandardMaterial color="#000" roughness={0.5} />
      </mesh>
    </group>
  );
}
