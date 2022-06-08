import { FC, StrictMode } from "react";

import App from "./components/App";

const Root: FC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <>
      <StrictMode>
        <App />
      </StrictMode>
    </>
  );
};

export default Root;
