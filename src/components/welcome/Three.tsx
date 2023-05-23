"use client";

import * as THREE from "three";
import { FC, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { containerClass } from "./Three.css";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (!ref.current) {
      return;
    }
    ref.current.rotation.z += 0.01;
    ref.current.rotation.x += 0.01;
  });
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={() => {
        setActive((current) => !current);
      }}
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerOut={() => {
        setHover(false);
      }}
    >
      <boxGeometry args={[0.5, 1, 1.5]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const Three: FC = () => {
  return (
    <div className={containerClass}>
      <Canvas
        resize={{
          offsetSize: true,
          debounce: 100,
          scroll: false
        }}
      >
        <ambientLight />

        <pointLight position={[10, 10, 10]} />

        <Box position={[-3, 3, -1]} />
        <Box position={[2, -3, 0]} />
        <Box position={[-3, -1.5, 0]} />
        <Box position={[3, 2, -2]} />
      </Canvas>
    </div>
  );
};

export default Three;
