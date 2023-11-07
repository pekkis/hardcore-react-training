import { FC } from "react";

const HotReloadTester: FC = () => {
  return (
    <p
      style={{
        border: "5px dotted rgb(255, 0, 0)",
        padding: "1em",
        marginBlock: "1rem"
      }}
    >
      I am the text that will change without reloading when you edit me and save
      the file
    </p>
  );
};

export default HotReloadTester;
