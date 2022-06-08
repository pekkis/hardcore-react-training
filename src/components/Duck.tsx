import { FC, memo } from "react";
import { DuckType } from "../services/duck";

import cx from "clsx";

// import styles from "./Duck.css";

import { duckClass, femaleClass, maleClass } from "./Duck.css";

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
    <li className={classes}>
      <div>
        <div>
          <strong>{duck.lastName}</strong>, {duck.firstName} (
          {duck.age.toFixed(2)} y.)
        </div>
        <div>
          <button
            onClick={() => {
              fireDuck(duck.id);
            }}
          >
            vapauta
          </button>
        </div>
      </div>
    </li>
  );
};

export default memo(Duck);
