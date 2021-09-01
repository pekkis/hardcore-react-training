import { FC, useState, useEffect, useCallback } from "react";
import { getPersons, PersonType } from "../services/person";
import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";

// import "./App.module.pcss";

/*
class App extends React.Component {
  state = [];

  componentDidMount() {
    // hakisin tyypit linjalta, päivittäisin tilaa
    console.log("MOUNT");
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <main>
        <h1>Giga ERP!!!</h1>
      </main>
    );
  }
}
*/

const isGood = (p: PersonType) => p.age < 30;

const App: FC = () => {
  const [persons, setPersons] = useState<PersonType[]>([]);
  const [numberOfRenders, setNumberOfRenders] = useState<number>(0);

  const firePerson = useCallback(
    (id: string): void => {
      setPersons((persons) => persons.filter((p) => p.id !== id));
    },
    [setPersons]
  );

  const hirePerson = useCallback(
    (person: PersonType): void => {
      setPersons((persons) => persons.concat(person));
    },
    [setPersons]
  );

  useEffect(() => {
    console.log("JOKA KERTA KUN RENDER LOPPUU JA ALKAA OIKEA YÖ!");

    return () => {
      console.log("JOKA KERTA CLEANUP");
    };
    //return undefined;
  });

  /*
  useEffect(() => {
    const interval = setInterval(() => {
      setNumberOfRenders((n) => n + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  */

  useEffect(() => {
    getPersons().then(setPersons);
  }, []);

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter((p) => !isGood(p));

  return (
    <main>
      <h1>Giga ERP!!!</h1>

      <HirePersonForm hirePerson={hirePerson} />

      <p>{numberOfRenders}</p>

      <h2>Pahat</h2>
      <PersonList firePerson={firePerson} persons={badPersons} />

      <h2>Hyvät</h2>
      <PersonList firePerson={firePerson} persons={goodPersons} />
    </main>
  );
};

export default App;
