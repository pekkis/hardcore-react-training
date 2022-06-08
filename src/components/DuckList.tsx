import { FC, memo, ReactElement } from "react";
import { DuckType } from "../services/duck";
import Duck from "./Duck";
import { rootClass } from "./DuckList.css";

type Props = {
  ducks: DuckType[];
  title: string;
  showMetadata?: boolean;
  fireDuck: (id: string) => void;
  // titleRenderer: ({ title }: { title: string }) => ReactElement;
};

const DuckList: FC<Props> = ({
  ducks,
  title,
  fireDuck,
  showMetadata = false
}) => {
  // const TitleRenderer = titleRenderer;

  const averageAge = ducks.reduce((a, d) => a + d.age, 0) / ducks.length;

  return (
    <>
      <h2>{title}</h2>

      {showMetadata && (
        <p>
          Ankkoja listalla: {ducks.length}. Keskikä: {averageAge.toFixed(2)}
        </p>
      )}

      <ul className={rootClass}>
        {ducks.map((duck) => {
          return <Duck fireDuck={fireDuck} key={duck.id} duck={duck} />;
        })}
      </ul>
    </>
  );
};

export default memo(DuckList);
