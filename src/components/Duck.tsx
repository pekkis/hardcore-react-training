import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import cx from "clsx";
import { duckClass, femaleClass, maleClass } from "./Duck.css";
import Button from "./Button";
import { Link } from "react-router-dom";

// import * as styles from "./Duck.css";

type Props = {
  duck: DuckType;
  fireDuck: (id: string) => void;
};

const Duck: FC<Props> = ({ duck, fireDuck }) => {
  const classes = cx(duckClass, {
    [maleClass]: duck.gender === 0,
    [femaleClass]: duck.gender === 1
  });

  // throw new Error("Shit has hit the fan!");

  return (
    <div className={classes}>
      {/*JSON.stringify(duck, null, 2)*/}
      <div>
        <Link to={`/duck/${duck.id}`}>
          <strong>{duck.lastName}</strong>, {duck.firstName} (
          {duck.age.toFixed(2)} v)
        </Link>
      </div>

      <div>
        <Button
          disabled={duck.isBeingFired}
          onClick={() => {
            fireDuck(duck.id);
          }}
        >
          Nouse siivillesi!
        </Button>
      </div>
    </div>
  );
};

export default memo(Duck);
