"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import CarModel from "./CarModel";
import ReflectiveFloor from "./ReflectiveFloor";

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 bg-transparent">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[-5, 2, 6]} fov={50} />
        
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={500}
          castShadow
          shadow-bias={-0.0001}
        />
        <spotLight
          position={[-10, 10, -5]}
          angle={0.25}
          penumbra={1}
          intensity={300}
          color="#ec1313" 
        />
        
        <Environment preset="city" blur={0.8} background={false} />

        <Suspense fallback={null}>
          <group position={[0, -0.5, 0]}>
            <CarModel />
            <ReflectiveFloor />
          </group>
        </Suspense>

        <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2 - 0.05} // Don't go below floor
            autoRotate={false}
        />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
