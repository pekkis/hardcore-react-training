import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import Duck from "./Duck";
// import cx from "clsx";
// import styles from "./DuckList.module.css";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
  Variants
} from "framer-motion";
import styles from "./DuckList.module.css";

import { ascend, sortWith, prop } from "ramda";

type Props = {
  ducks: DuckType[];
  fireDuck: (id: DuckType["id"]) => void;
  showMetadata?: boolean;
};

const duckSorter = sortWith<DuckType>([
  ascend(prop("lastName")),
  ascend(prop("firstName")) // d => d.firstName
]);

function sortByName(a: DuckType, b: DuckType): number {
  return (
    a.lastName.localeCompare(b.lastName) ||
    -a.firstName.localeCompare(b.firstName)
  );
}

const DuckList: FC<Props> = ({ ducks, showMetadata = false, fireDuck }) => {
  const shouldReduceMotion = useReducedMotion();

  if (ducks.length === 0) {
    return <section>zero ducks given.</section>;
  }

  // const sortedDucks = [...ducks].sort(sortByName);
  // const sortedDucks = ducks.sort(sortByName); // duckSorter(ducks);

  const sortedDucks = duckSorter(ducks);

  const averageAge = ducks.reduce((a, d) => a + d.age, 0) / ducks.length;

  const variants: Variants = {
    initial: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : "-120vh"
    },
    visible: {
      opacity: 1,
      x: 0
    },
    exit: {
      rotate: 360,
      x: "120vh",
      opacity: 0,
      transition: {
        duration: 2
      }
    }
  };

  return (
    <section>
      {showMetadata && (
        <p>
          Ducks in list: {ducks.length}. Average age: {averageAge}
        </p>
      )}
      <LayoutGroup>
        <motion.ul
          variants={variants}
          className={styles.list}
          initial="initial"
          animate="visible"
        >
          <AnimatePresence>
            {sortedDucks.map((duck) => {
              return (
                <motion.li layout key={duck.id} variants={variants} exit="exit">
                  <Duck duck={duck} fireDuck={fireDuck} />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </section>
  );

  // const { duck } = props;
};

export default memo(DuckList);
