import { FC } from "react";
import { checkerClass } from "./VanillaExtractChecker.css";

const VanillaExtractChecker: FC = () => {
  return (
    <div className={checkerClass}>
      Nuttin special in this div, just asserting that things work as intended...
    </div>
  );
};

export default VanillaExtractChecker;
