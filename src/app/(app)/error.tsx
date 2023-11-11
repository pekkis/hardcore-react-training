"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("ERRORE FATALE", error);
  }, [error]);

  return (
    <div>
      <h2>Carricamento! Errore fatale!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
