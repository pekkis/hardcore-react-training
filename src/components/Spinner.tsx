/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner: FC = () => {
  return (
    <div
      css={{
        position: "fixed",
        top: 0,
        right: 0,
        fontSize: "1em",
        color: "rgb(0 0 0)",
        margin: ".3em",
        zIndex: 100000
      }}
    >
      <FaSpinner
        className="fa-spin"
        css={{
          animation: "fa-spin 5s infinite linear",
          "@keyframes fa-spin": {
            "0%": {
              transform: "rotate(0deg)"
            },
            "100%": {
              transform: "rotate(359deg)"
            }
          }
        }}
      />
    </div>
  );
};

export default Spinner;
