"use client";

import dynamic from "next/dynamic";

const ThreeLoader = dynamic(() => import("./Three"), {
  ssr: false,
  loading() {
    return <div>LADDARE...</div>;
  }
});

export default ThreeLoader;
