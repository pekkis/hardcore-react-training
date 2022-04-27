import { FC } from "react";
import { useParams } from "react-router";
import { DuckType } from "../services/duck";
import useStore from "../services/store";

type Props = {};

const DuckPage: FC = () => {
  const params = useParams<{ id: string }>();

  const duck: DuckType | undefined = useStore(
    (store) => store.ducks[params.id as string]
  );

  if (!duck) {
    return <div>ANKKAA EI LÖYDY</div>;
  }

  return (
    <div>
      <h2>
        {duck.lastName}, {duck.firstName}
      </h2>

      <p>Ankan surullinen elämäntarina tässä.</p>
    </div>
  );
};

export default DuckPage;
