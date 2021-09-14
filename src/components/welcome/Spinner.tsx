/** @jsxImportSource theme-ui */

import { FC } from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner: FC = () => {
  return (
    <FaSpinner
      className="fa-spin"
      sx={{
        mr: 2,
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
  );
};

export default Spinner;
