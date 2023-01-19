import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import cx from "clsx";
import { duckClass, femaleClass, maleClass } from "./Duck.css";
import Button from "./Button";
import { useQuotations } from "./DuckContext";
import { Link } from "react-router-dom";

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
  const quotations = useQuotations();

  // throw new Error("Kakka on osunut tuulettimeen");

  return (
    <div className={classes}>
      <div>
        <div>
          <Link to={`/duck/${duck.id}`}>
            <strong>{duck.lastName}</strong>, {duck.firstName}
          </Link>
        </div>

        <div>{duck.age.toFixed(3)}</div>

        <div>{quotations[0]}</div>
      </div>
      <div>
        <Button
          disabled={duck.isBeingFired}
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
