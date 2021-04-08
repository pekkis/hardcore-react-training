/** @jsxImportSource theme-ui */
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <FaSpinner
      className="fa-spin"
      sx={{
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
