import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import Duck from "./Duck";

type Props = {
  ducks: DuckType[];
  showMetadata: boolean;
  fireDuck: (id: string) => void;
};

const DuckList: FC<Props> = ({ ducks, fireDuck, showMetadata }) => {
  return (
    <div>
      {ducks.map((duck) => {
        return <Duck duckValue={duck} key={duck.id} fireDuck={fireDuck} />;
      })}
    </div>
  );
};

export default memo(DuckList);
