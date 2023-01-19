import { FC } from "react";
import { FaSpinner } from "react-icons/fa";
import { spinClass } from "./Spinner.css";

const Spinner: FC = () => {
  return <FaSpinner className={spinClass} />;
};

export default Spinner;
