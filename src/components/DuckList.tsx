import { AnimatePresence, LayoutGroup } from "framer-motion";
import { FC, memo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { DuckType } from "../services/duck";
import Duck from "./Duck";

import { motion, Variants } from "framer-motion";

const variants: Variants = {
  in: {
    x: 0
  },
  out: {
    x: -1000
  },
  exit: {
    rotate: 500,
    position: "absolute",
    zoom: 3,
    x: "100%",
    y: 0,
    opacity: 0,
    transition: {
      duration: 2
    }
  }
};

type Props = {
  ducks: DuckType[];
  showMetadata?: boolean;
  title: ({ numberOfDucks }: { numberOfDucks: number }) => JSX.Element;
  fireDuck: (id: string) => void;
};

const DuckList: FC<Props> = ({
  fireDuck,
  ducks,
  title,
  showMetadata = false
}) => {
  const TitleComponent = title;

  const averageAge = ducks.reduce((a, d) => a + d.age, 0) / ducks.length;

  if (ducks.length === 0) {
    return null;
  }

  return (
    <div>
      <TitleComponent numberOfDucks={ducks.length} />

      {showMetadata && <p>Keski-ikä: {averageAge.toFixed(3)}</p>}

      <LayoutGroup>
        <motion.div layout>
          <AnimatePresence>
            {ducks.map((duck) => {
              return (
                <motion.div
                  key={duck.id}
                  layout={true}
                  variants={variants}
                  initial="out"
                  animate="in"
                  exit="exit"
                >
                  <Duck fireDuck={fireDuck} duck={duck} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default memo(DuckList);
