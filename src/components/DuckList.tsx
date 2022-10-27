import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import Duck from "./Duck";

import { ascend, prop, sortWith } from "ramda";

type Props = {
  ducks: DuckType[];
  showConfidentialInformation?: boolean;
  fireDuck: (id: string) => void;
};

// prop("lastName") === field => obj => obj.field

const duckSorter = sortWith<DuckType>([
  ascend(prop("lastName")),
  ascend(prop("firstName"))
]);

const DuckList: FC<Props> = ({
  ducks,
  showConfidentialInformation = false,
  fireDuck
}) => {
  if (ducks.length === 0) {
    return <div>Ei ankkoja...</div>;
  }

  const sortedDucks = duckSorter(ducks);

  const averageAge =
    ducks.reduce((acc, duck) => acc + duck.age, 0) / ducks.length;

  return (
    <div>
      {showConfidentialInformation && (
        <p>
          Ankkoja listalla {ducks.length} kpl, keskikä: {averageAge.toFixed(2)}
        </p>
      )}

      {sortedDucks.map((duck) => (
        <Duck fireDuck={fireDuck} key={duck.id} duck={duck} />
      ))}
    </div>
  );
};

export default memo(DuckList);
