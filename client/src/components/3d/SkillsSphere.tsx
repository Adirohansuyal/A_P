import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface SkillSphereProps {
  skill: string;
  position: [number, number, number];
}

function SkillSphere({ skill, position }: SkillSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? "#6366f1" : "#94a3b8"}
          roughness={0.5}
          metalness={0.8}
        />
        <Text
          position={[0, 0, 0.6]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      </mesh>
    </Float>
  );
}

export default function SkillsSphere() {
  const skills = [
    "Python",
    "Machine Learning",
    "Data Science",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "SQL",
    "React",
    "Node.js",
  ];

  return (
    <div className="w-full h-[500px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <group>
          {skills.map((skill, i) => {
            const theta = (i / skills.length) * Math.PI * 2;
            const y = Math.cos(i / skills.length * Math.PI) * 3;
            const radius = 4;
            
            return (
              <SkillSphere
                key={skill}
                skill={skill}
                position={[
                  Math.cos(theta) * radius,
                  y,
                  Math.sin(theta) * radius,
                ]}
              />
            );
          })}
        </group>
      </Canvas>
    </div>
  );
}
