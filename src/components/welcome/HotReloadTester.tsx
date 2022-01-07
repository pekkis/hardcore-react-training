import { FC } from "react";

const HotReloadTester: FC = () => {
  return (
    <span
      style={{
        border: "3px dotted rgb(0, 200, 0)"
      }}
    >
      I am the text that will change without reloading when you edit me and save
      the file.
    </span>
  );
};

export default HotReloadTester;
