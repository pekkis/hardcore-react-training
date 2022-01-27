import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import cx from "clsx";
import styles from "./Duck.module.css";
import Button from "./Button";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

type Props = {
  duck: DuckType;
  fireDuck: (id: DuckType["id"]) => void;
};

// oldDuck === newDuck

const Duck: FC<Props> = ({ duck, fireDuck }) => {
  const classes = cx(styles.duck, {
    [styles.male]: duck.gender === 0,
    [styles.female]: duck.gender === 1
  });

  // throw new Error("Puuppa has hit the fan!");

  // console.log(duck);

  return (
    <div className={classes}>
      <div>
        <div>
          <Link to={`/duck/${duck.id}`}>
            <strong>{duck.lastName}</strong>, {duck.firstName}
          </Link>
        </div>
        <div>
          <strong>{duck.age.toFixed(2)}</strong> y
        </div>
      </div>
      <div>
        <Button disabled={duck.isBeingFired} onClick={() => fireDuck(duck.id)}>
          liberate
          {duck.isBeingFired && <Spinner />}
        </Button>
      </div>
    </div>
  );
};

export default memo(Duck);
