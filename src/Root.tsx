import { FC } from "react";
import App from "./components/App";
import Welcome from "./components/welcome/Welcome";

const Root: FC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <>
      <Welcome />
      <App />
    </>
  );
};

export default Root;
