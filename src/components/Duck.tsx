import { FC, memo } from "react";
import cx from "clsx";

import { DuckType } from "../services/duck";
import { duckClass, femaleClass, maleClass } from "./Duck.css";
import Button from "./Button";
import { Link } from "react-router-dom";

// import styles from "./Duck.module.css";

// console.log(styles, "stails");

type Props = {
  duckValue: DuckType;
  fireDuck: (id: string) => void;
};

const Duck: FC<Props> = ({ duckValue, fireDuck }) => {
  const classes = cx(duckClass, {
    [maleClass]: duckValue.gender === 0,
    [femaleClass]: duckValue.gender === 1
  });

  // throw new Error("Kauhea kohtalo");

  return (
    <div className={classes}>
      <div>
        <Link to={`/duck/${duckValue.id}`}>
          {duckValue.lastName}, {duckValue.firstName}
        </Link>
      </div>
      <div>
        {duckValue.age.toFixed(2)} v. xxx
        {duckValue.migratesForWinters ? "true" : "false"} xxx
      </div>
      <div>
        <Button
          onClick={() => {
            console.log("CLIXUTI", duckValue);
            fireDuck(duckValue.id);
          }}
        >
          ❤️ vapauta ❤️
        </Button>
      </div>
    </div>
  );
};

export default memo(Duck);
