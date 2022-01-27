import { FC } from "react";
import { FaSpinner } from "react-icons/fa";
import { spinnerClass, spinClass } from "./Spinner.css";

const Spinner: FC = () => {
  return (
    <div className={spinnerClass}>
      <FaSpinner className={spinClass} />
    </div>
  );
};

export default Spinner;
