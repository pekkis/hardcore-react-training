import { FC } from "react";
import { useParams } from "react-router";
import useDuckStore from "../services/state";

const DuckPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const duck = useDuckStore((store) => store.ducks[id!]);

  if (!duck) {
    return null;
  }

  return (
    <div>
      <h2>
        {duck.lastName}, {duck.firstName}
      </h2>

      <p>Surullinen elämäntarina!</p>
    </div>
  );
};

export default DuckPage;
