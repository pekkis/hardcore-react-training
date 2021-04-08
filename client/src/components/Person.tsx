import { FC, memo } from "react";
import { PersonInterface } from "../types";
import styles from "./Person.module.pcss";
import cx from "clsx";
import Button from "./Button";

type Props = {
  person: PersonInterface;
  firePerson: (id: string) => void;
};

const Person: FC<Props> = ({ person, firePerson }) => {
  const classes = cx(styles.root, {
    [styles.male]: person.gender === 0,
    [styles.female]: person.gender === 1,
    [styles.other]: person.gender === 2
  });

  return (
    <div className={classes}>
      <div className={styles.data}>
        {person.lastName}, {person.firstName} ({person.age} y)
        {person.handedness === "l" && <div>🖎</div>}
      </div>

      <div className={styles.controls}>
        {
          <Button
            disabled={person.isBeingFired}
            onClick={() => firePerson(person.id)}
          >
            Liberate
          </Button>
        }
      </div>
    </div>
  );
};

export default memo(Person);
