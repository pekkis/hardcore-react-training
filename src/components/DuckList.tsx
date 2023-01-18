import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import Duck from "./Duck";

type Props = {
  // title: string;
  ducks: DuckType[];
  showMetadata?: boolean;
  fireDuck: (id: string) => void;
};

const DuckList: FC<Props> = ({ ducks, fireDuck, showMetadata = false }) => {
  const averageAge =
    ducks.reduce((a, duck) => {
      return a + duck.age;
    }, 0) / ducks.length;

  return (
    <div>
      {showMetadata && (
        <p>
          Ankkoja listalla: {ducks.length}. Keski-ikä: {averageAge.toFixed(2)}{" "}
          v.
        </p>
      )}
      {ducks.map((duck) => {
        return <Duck key={duck.id} duck={duck} fireDuck={fireDuck} />;
      })}
    </div>
  );
};

export default memo(DuckList);
