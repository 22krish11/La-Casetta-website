import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial, PerspectiveCamera } from '@react-three/drei'

function ProjectMesh({ type }) {
  const mesh = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.cos(t / 4) / 4
    mesh.current.rotation.y = Math.sin(t / 4) / 4
    mesh.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <mesh ref={mesh}>
      {type === 'box' ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : (
        <torusKnotGeometry args={[0.5, 0.2, 128, 32]} />
      )}
      <MeshDistortMaterial color={type === 'box' ? "#3b82f6" : "#10b981"} speed={2} distort={0.3} />
    </mesh>
  )
}

export default function ProjectCanvas({ type }) {
  return (
    <div className="w-full h-48">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ProjectMesh type={type} />
      </Canvas>
    </div>
  )
}
