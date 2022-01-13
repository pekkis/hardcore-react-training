import { memo, VFC } from "react";
import { DuckType } from "../services/duck";
import Duck from "./Duck";

import styles from "./DuckList.module.css";

type Props = {
  ducks: DuckType[];
  fireDuck: (id: string) => void;
  showMetadata?: boolean;
};

const DuckList: VFC<Props> = ({ ducks, fireDuck, showMetadata = false }) => {
  return (
    <section>
      {showMetadata && <p>Number of ducks: {ducks.length}</p>}

      <ul className={styles.root}>
        {ducks.map((duck) => (
          <li key={duck.id}>
            <Duck fireDuck={fireDuck} duck={duck} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default memo(DuckList);