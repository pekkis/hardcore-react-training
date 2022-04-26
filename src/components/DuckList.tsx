import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import Duck from "./Duck";

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

  return (
    <div>
      <TitleComponent numberOfDucks={ducks.length} />

      {showMetadata && <p>Keski-ikä: {averageAge.toFixed(3)}</p>}

      {ducks.map((duck) => {
        return <Duck fireDuck={fireDuck} key={duck.id} duck={duck} />;
      })}
    </div>
  );
};

export default memo(DuckList);
