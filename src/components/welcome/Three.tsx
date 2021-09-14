/** @jsxImportSource theme-ui */

import * as THREE from "three";
import { FC, useRef, useState } from "react";
import { extend, Canvas, useFrame } from "@react-three/fiber";
import { Text } from "troika-three-text";

const fonts = {
  Roboto: "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
};

extend({ Text });

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    ref.current.rotation.z += 0.01;
    ref.current.rotation.x += 0.01;
  });
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => {
        console.log(event, "e");
        setActive(!active);
      }}
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerOut={(event) => {
        setHover(false);
      }}
    >
      <boxGeometry args={[0.5, 1, 1.5]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const Pexu = () => {
  const text = "Suckling\non a\nduckling!";

  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.z -= -0.01;
  });

  const [opts, setOpts] = useState({
    font: "Roboto",
    fontSize: 5,
    color: "#000",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "center",
    materialType: "MeshPhongMaterial"
  });

  return (
    <text
      ref={ref}
      position-z={-15}
      rotation={[0.3, 0, 0]}
      {...opts}
      text={text}
      font={fonts[opts.font]}
      anchorX="center"
      anchorY="middle"
      position={[0, 0, -15]}
    >
      <meshPhongMaterial attach="material" color={opts.color} />
    </text>
  );
};

const Three: FC = () => {
  return (
    <div sx={{ width: "100%", height: "400px" }}>
      <Canvas
        resize={{
          debounce: 100,
          scroll: false
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <Pexu />
        <Box position={[-3, -1.5, 0]} />
        <Box position={[3, 2, -2]} />
      </Canvas>
    </div>
  );
};

export default Three;
