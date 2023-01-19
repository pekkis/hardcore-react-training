import { FC } from "react";
import { useParams } from "react-router-dom";
import { DuckType } from "../services/duck";
import useDuckStore from "../services/store";

// const kana = koira as unknown as chicken

const DuckPage: FC = () => {
  const { id } = useParams<{ id: DuckType["id"] }>();

  const duck: DuckType | undefined = useDuckStore(
    (state) => state?.ducks?.[id as string]
  );

  if (!duck) {
    return <span>duck not found!</span>;
  }

  return (
    <section>
      <h2>
        {duck.lastName}, {duck.firstName}
      </h2>
      {JSON.stringify(duck, null, 2)}
      duck page!
    </section>
  );
};

export default DuckPage;
