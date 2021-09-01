import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { extend, Canvas, useFrame } from "@react-three/fiber";
import { Text } from "troika-three-text";

/* This is just some semi copy paste I cooked up yesterday */

const fonts = {
  Roboto: "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",
  "Noto Sans":
    "https://fonts.gstatic.com/s/notosans/v7/o-0IIpQlx3QUlC5A4PNr5TRG.woff",
  //too thin: 'Alex Brush': 'https://fonts.gstatic.com/s/alexbrush/v8/SZc83FzrJKuqFbwMKk6EhUXz6w.woff',
  Comfortaa:
    "https://fonts.gstatic.com/s/comfortaa/v12/1Ptsg8LJRfWJmhDAuUs4TYFs.woff",
  Cookie: "https://fonts.gstatic.com/s/cookie/v8/syky-y18lb0tSbf9kgqU.woff",
  //throws: 'Cutive Mono': 'https://fonts.gstatic.com/s/cutivemono/v6/m8JWjfRfY7WVjVi2E-K9H6RCTmg.woff',
  //throws: 'Gabriela': 'https://fonts.gstatic.com/s/gabriela/v6/qkBWXvsO6sreR8E-b8m5xL0.woff',
  Philosopher:
    "https://fonts.gstatic.com/s/philosopher/v9/vEFV2_5QCwIS4_Dhez5jcWBuT0s.woff",
  Quicksand:
    "https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff",
  Trirong: "https://fonts.gstatic.com/s/trirong/v3/7r3GqXNgp8wxdOdOn4so3g.woff",
  Trocchi: "https://fonts.gstatic.com/s/trocchi/v6/qWcqB6WkuIDxDZLcPrxeuw.woff",
  "Advent Pro":
    "https://fonts.gstatic.com/s/adventpro/v7/V8mAoQfxVT4Dvddr_yOwhTqtLg.woff",
  "Henny Penny":
    "https://fonts.gstatic.com/s/hennypenny/v5/wXKvE3UZookzsxz_kjGSfPQtvXQ.woff",
  Orbitron:
    "https://fonts.gstatic.com/s/orbitron/v9/yMJRMIlzdpvBhQQL_Qq7dys.woff",
  Sacramento:
    "https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f-w.woff",
  "Snowburst One":
    "https://fonts.gstatic.com/s/snowburstone/v5/MQpS-WezKdujBsXY3B7I-UT7SZieOA.woff",
  Syncopate:
    "https://fonts.gstatic.com/s/syncopate/v9/pe0sMIuPIYBCpEV5eFdCBfe5.woff",
  Wallpoet:
    "https://fonts.gstatic.com/s/wallpoet/v9/f0X10em2_8RnXVVdUObp58I.woff",
  "Sirin Stencil":
    "https://fonts.gstatic.com/s/sirinstencil/v6/mem4YaWwznmLx-lzGfN7MdRyRc9MAQ.woff",
  "Roboto Slab":
    "https://rawcdn.githack.com/google/fonts/3b179b729ac3306ab2a249d848d94ff08b90a0af/apache/robotoslab/static/RobotoSlab-Black.ttf"
};

extend({ Text });

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
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
      onPointerOver={(event) => {
        setHover(true);
      }}
      onPointerOut={(event) => {
        console.log(event, "e");
        setHover(false);
      }}
    >
      <boxGeometry args={[0.5, 1, 1.5]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const Pexu = () => {
  const text = "Suckling\non a\nsucculent\nduckling!";

  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.z -= 0.01;
  });

  const [opts, setOpts] = useState({
    font: "Philosopher",
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
    >
      <meshPhongMaterial attach="material" color={opts.color} />
    </text>
  );
};

const Three = (props) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Pexu />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[0, 0, -20]} />
    </Canvas>
  );
};

export default Three;
