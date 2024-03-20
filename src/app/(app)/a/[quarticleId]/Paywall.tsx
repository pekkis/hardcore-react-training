"use client";

import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as styles from "./Paywall.css";

const Paywall: FC = () => {
  const [showPaywall, setShowPaywall] = useState(false);

  useEffect(() => {
    setShowPaywall(false);
  }, []);

  if (!showPaywall) {
    return null;
  }

  const portalElement = document.getElementById("portal");
  if (!portalElement) {
    return null;
  }

  return createPortal(
    <div className={styles.backdrop}>
      <dialog open>höhö</dialog>
    </div>,
    portalElement
  );
};

export default Paywall;
