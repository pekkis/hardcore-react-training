import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import cx from "clsx";
import { duckClass, femaleClass, maleClass } from "./Duck.css";
import Button from "./Button";

// import styles from "./Duck.module.pcss";

type Props = {
  duck: DuckType;
  fireDuck: (id: string) => void;
};

const Duck: FC<Props> = ({ duck, fireDuck }) => {
  const classes = cx(duckClass, {
    [maleClass]: duck.gender === 0,
    [femaleClass]: duck.gender === 1
  });

  return (
    <div className={classes}>
      <div>
        <div>
          <strong>{duck.lastName}</strong>, {duck.firstName}
        </div>

        <div>{duck.age.toFixed(3)}</div>
      </div>
      <div>
        <Button
          className="ribuslk"
          onClick={() => {
            fireDuck(duck.id);
          }}
        >
          voimauta
        </Button>
      </div>
    </div>
  );
};

export default memo(Duck);
