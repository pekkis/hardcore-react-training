import { memo, VFC } from "react";
import { DuckType } from "../services/duck";
import styles from "./Duck.module.css";
import cx from "clsx";
import Button from "./Button";
import { Link } from "react-router-dom";

type Props = {
  duck: DuckType;
  fireDuck: (id: string) => void;
};

const Duck: VFC<Props> = ({ duck, fireDuck }) => {
  const classes = cx(styles.root, {
    [styles.male]: duck.gender === 0,
    [styles.female]: duck.gender === 1
  });

  return (
    <div className={classes}>
      <div className={styles.info}>
        <div className={styles.name}>
          <Link to={`/duck/${duck.id}`}>
            <strong>{duck.lastName}</strong>, {duck.firstName}
          </Link>
        </div>
        <div className={styles.block}>
          <em>{duck.age.toFixed(2)} y</em>
        </div>
        <div className={styles.block}>
          opinion on migration: {duck.migratesForWinters ? "👍" : "👎"}
        </div>
        <div className={styles.block}>
          related to the boss: {duck.relatedToCEO ? "✔" : "✖"}
        </div>
      </div>

      <div className={styles.actions}>
        <Button
          disabled={duck.isBeingFired}
          onClick={() => {
            fireDuck(duck.id);
          }}
          type="button"
        >
          free
        </Button>
      </div>
    </div>
  );
};

export default memo(Duck);
