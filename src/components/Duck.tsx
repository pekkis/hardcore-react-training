import { VFC } from "react";
import { DuckType } from "../services/duck";
import styles from "./Duck.module.css";
import cx from "clsx";
import Button from "./Button";

type Props = {
  duck: DuckType;
};

const Person: VFC<Props> = ({ duck }) => {
  const classes = cx(styles.root, {
    [styles.male]: duck.gender === 0,
    [styles.female]: duck.gender === 1
  });

  return (
    <div className={classes}>
      <div className={styles.info}>
        <div>
          <strong>{duck.lastName}</strong>, {duck.firstName}
        </div>
        <div>
          <em>{duck.age.toFixed(2)} y</em>
        </div>
      </div>

      <div className={styles.actions}>
        <Button type="button">free</Button>
      </div>
    </div>
  );
};

export default Person;
