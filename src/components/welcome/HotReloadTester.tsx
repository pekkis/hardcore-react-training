import { FC } from "react";

const HotReloadTester: FC = () => {
  return (
    <span
      style={{
        border: "5px dotted rgb(255, 0, 0)",
        padding: "1em"
      }}
    >
      I am the text that will change without reloading when you edit me and save
      the file LUS LUS LUUS
    </span>
  );
};

export default HotReloadTester;
