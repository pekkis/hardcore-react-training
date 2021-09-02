import { FC } from "react";
import { PersonType } from "../services/person";

type Props = {
  persons: PersonType[];
};

const Metadata: FC<Props> = ({ persons }) => {
  return <p>Henkilöitä listalla: {persons.length}</p>;
};

export default Metadata;
