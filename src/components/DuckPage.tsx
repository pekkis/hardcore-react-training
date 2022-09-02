import { FC } from "react";
import { useParams } from "react-router";
import { DuckType } from "../services/duck";

type Props = {
  ducks: DuckType[];
};

const DuckPage: FC<Props> = ({ ducks }) => {
  const { id } = useParams();

  const duck = ducks.find((duck) => duck.id === id);

  if (!duck) {
    return null;
  }

  return (
    <div>
      <h2>
        {duck.lastName}, {duck.firstName}
      </h2>

      <p>Surullinen elämäntarina tässä.</p>
    </div>
  );
};

export default DuckPage;
