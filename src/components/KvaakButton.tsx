"use client";

import { Quarticle } from "@/services/quarticle";
import { FC } from "react";
import Button from "./Button";

type Props = {
  quarticle: Quarticle;
};

const KvaakButton: FC<Props> = ({ quarticle }) => {
  return (
    <Button
      onClick={() => {
        console.log("KVAAK BUTTON");
      }}
    >
      Console loggaa kvaak
    </Button>
  );
};

export default KvaakButton;
