import { FC } from "react";
import { useParams } from "react-router";
import useDuckStore from "../services/useDuckStore";

const DuckPage: FC = () => {
  const { id } = useParams();
  const duck = useDuckStore((state) => state.ducks[id as string]);

  if (!duck) {
    return <>not found</>;
  }

  return (
    <section>
      <h2>
        {duck.lastName}, {duck.firstName}
      </h2>

      <p>A sad life story of a duck.</p>
    </section>
  );
};

export default DuckPage;
