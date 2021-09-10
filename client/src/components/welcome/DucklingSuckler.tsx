import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { PekkisDucklingSuckler } from "./duckling-suckler";

const DucklingSuckler = createComponent(
  React,
  "pekkis-duckling-suckler",
  PekkisDucklingSuckler,
  {
    onactivate: "activate",
    onchange: "change"
  }
);

export default DucklingSuckler;
