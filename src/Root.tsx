import { VFC } from "react";
import Welcome from "./components/welcome/Welcome";

const Root: VFC = () => {
  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return (
    <>
      <Welcome />
    </>
  );
};

export default Root;
