import { FC } from "react";
import { useParams } from "react-router";
import useStore from "../services/store";
import Helmet from "react-helmet";

const DuckPage: FC = () => {
  const { id } = useParams();
  const duck = useStore((state) => state.ducks[id as string]);

  if (!duck) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>
          {duck.lastName}, {duck.firstName} - Mallard ERP
        </title>
      </Helmet>

      <h2>
        <strong>{duck.lastName}</strong>, {duck.firstName}
      </h2>

      <p>Quack. Quackety quack.</p>
    </>
  );
};

export default DuckPage;
