import { FC, useState } from "react";
import { cleanse } from "../../services/instance";
import Spinner from "./Spinner";

const CleanseButton: FC = () => {
  const [isCleansing, setIsCleansing] = useState<boolean>(false);

  return (
    <button
      disabled={isCleansing}
      onClick={async () => {
        setIsCleansing(true);
        await cleanse();
        setIsCleansing(false);
      }}
    >
      {isCleansing && <Spinner />}
      Cleanse all data
    </button>
  );
};

export default CleanseButton;
