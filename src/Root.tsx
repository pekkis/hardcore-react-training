import { FC, useEffect, useState } from "react";
import App from "./components/App";
import { Provider } from "./components/DuckContext";

const Root: FC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <>
      <Provider
        quotations={["kvaak quak", "kvaaketi kvaak", "kvaaaaaaaaaaaaaaak!"]}
      >
        <App />
      </Provider>
    </>
  );
};

export default Root;
