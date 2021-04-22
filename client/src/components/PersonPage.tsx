import { FC } from "react";
import { PersonInterface } from "../services/person";

type Props = {
  person?: PersonInterface;
};

const PersonPage: FC<Props> = ({ person }) => {
  if (!person) {
    return <section>oh noes no person</section>;
  }

  return (
    <section>
      <h2>
        {person.lastName}, {person.firstName}
      </h2>

      <p>Surullinen elämäntarina.</p>
    </section>
  );
};

export default PersonPage;
