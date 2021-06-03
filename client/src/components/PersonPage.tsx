import { FC } from "react";
import { PersonType } from "./App";

type Props = {
  person?: PersonType;
};

const PersonPage: FC<Props> = ({ person }) => {
  if (!person) {
    return null;
  }

  return (
    <section>
      <h1>
        {person.lastName}, {person.firstName}
      </h1>

      <p>Sad life story here!</p>
    </section>
  );
};

export default PersonPage;
