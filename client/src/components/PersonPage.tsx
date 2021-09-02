import { FC } from "react";
import { useParams } from "react-router";
import { useStore } from "../services/state";
import Box from "./Box";

const PersonPage: FC = () => {
  // const person = useStore((store) => store.persons.get(props.match.params.id));

  const { id } = useParams<{ id: string }>();
  const person = useStore((store) => store.persons.get(id));

  if (!person) {
    return null;
  }

  return (
    <section>
      <h2>
        {person.lastName}, {person.firstName}
      </h2>

      <Box>
        <p>
          Surullinen elämäntarina. Yksinhuoltaja, lapsia. Tarvitsee työpaikan.
        </p>
      </Box>
    </section>
  );
};

export default PersonPage;
