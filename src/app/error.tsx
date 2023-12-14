"use client";

import { useEffect } from "react";

export default function ErrorPage() {
  useEffect(() => {
    // send the error to Sentry or Sentry analogue
  });

  return (
    <div>
      <h1>500</h1>

      <p>Oh noes fatale errore. Retry? go to himapage</p>
    </div>
  );
}
