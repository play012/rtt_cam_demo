import React from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';

function Avatar(props: ThreeElements['mesh']) {
  const ref = React.useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={0xffffff} />
    </mesh>
  )
}

export default function ThreeJS() {
  return (
    <Canvas>
      <Avatar />
    </Canvas>
  )
};