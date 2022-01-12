import { VFC } from "react";
import { DuckType } from "../services/duck";
import Duck from "./Duck";

import styles from "./DuckList.module.css";

type Props = {
  ducks: DuckType[];
};

const DuckList: VFC<Props> = ({ ducks }) => {
  return (
    <section>
      <ul className={styles.root}>
        {ducks.map((duck) => (
          <li key={duck.id}>
            <Duck duck={duck} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DuckList;
