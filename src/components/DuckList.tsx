import { memo, VFC } from "react";
import { DuckType } from "../services/duck";
import Duck from "./Duck";
import {
  motion,
  AnimatePresence,
  Variants,
  LayoutGroup,
  useReducedMotion
} from "framer-motion";

import styles from "./DuckList.module.css";

type Props = {
  ducks: DuckType[];
  fireDuck: (id: string) => void;
  showMetadata?: boolean;
};

const DuckList: VFC<Props> = ({ ducks, fireDuck, showMetadata = false }) => {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    initial: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : "-50vh"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : "105vh",
      transition: {
        duration: 0.5
      }
    }
  };

  if (ducks.length === 0) {
    return <section>zero ducks given.</section>;
  }

  const averageAge = ducks.reduce((a, d) => a + d.age, 0) / ducks.length;

  return (
    <section>
      {showMetadata && (
        <p>
          Number of ducks: {ducks.length}, average age: {averageAge.toFixed(2)}
        </p>
      )}

      <LayoutGroup>
        <motion.ul
          className={styles.root}
          variants={variants}
          initial="initial"
          animate="visible"
        >
          <AnimatePresence>
            {ducks.map((duck) => (
              <motion.li layout key={duck.id} variants={variants} exit="exit">
                <Duck fireDuck={fireDuck} duck={duck} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </section>
  );
};

export default memo(DuckList);
