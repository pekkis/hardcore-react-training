"use client";

import { FC, useState } from "react";
import { cleanse } from "../../services/instance";
import Spinner from "./Spinner";
import styles from "./Cleanser.module.css";

const CleanseButton: FC = () => {
  const [error, setError] = useState<string | undefined>();
  const [isCleansing, setIsCleansing] = useState<boolean>(false);

  return (
    <div className={styles.root}>
      {error && <strong className={styles.error}>ERROR: {error}</strong>}
      <button
        disabled={isCleansing}
        onClick={async () => {
          setIsCleansing(true);
          try {
            await cleanse();
            setIsCleansing(false);
          } catch (e: unknown) {
            setIsCleansing(false);
            setError((e as Error).message);
          }
        }}
      >
        {isCleansing && <Spinner />}
        Cleanse all data
      </button>
    </div>
  );
};

export default CleanseButton;
