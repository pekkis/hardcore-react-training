/** @jsxImportSource @emotion/react */

import { FC } from "react";

const Box: FC = ({ children }) => {
  return (
    <div
      css={{
        backgroundColor: "rgba(255, 255, 255, .5)",
        padding: "1em"
      }}
    >
      {children}
    </div>
  );
};

export default Box;
