import { FC, memo, useState } from "react";
import { DuckType } from "../services/duck";
import styles from "./Duck.module.pcss";
import cx from "clsx";
import Button from "./Button";
import { Link } from "react-router-dom";
import DuckModal from "./DuckModal";

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

  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className={classes} key={duck.id}>
      {modal && <DuckModal duck={duck} />}

      <div>
        <Link to={`/duck/${duck.id}`}>
          {duck.lastName}, {duck.firstName}
        </Link>
      </div>
      <div>
        <Button
          disabled={duck.isBeingFired}
          onClick={() => {
            fireDuck(duck.id);
          }}
        >
          vapauta
        </Button>

        <Button
          onClick={() => {
            setModal(true);
          }}
        >
          modalisoi
        </Button>
      </div>
    </div>
  );
};

export default memo(Duck);
