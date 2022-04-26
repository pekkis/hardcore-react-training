import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import styles from "./Duck.module.pcss";
import cx from "clsx";

/*
const HelperCompo = () => {

}
*/

type Props = {
  duck: DuckType;
  fireDuck: (id: string) => void;
};

const Duck: FC<Props> = ({ duck, fireDuck }) => {
  const classes = cx(styles.duck, {
    [styles.male]: duck.gender === 0,
    [styles.female]: duck.gender === 1
  });

  return (
    <div className={classes} key={duck.id}>
      <div>
        {duck.lastName}, {duck.firstName}
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
  );
};

export default memo(Duck);
