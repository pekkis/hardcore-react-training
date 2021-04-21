import { FunctionComponent, useEffect, useState } from "react";
import { getPersons, PersonInterface } from "../services/person";
import HirePersonForm from "./HirePersonForm";
import PersonList from "./PersonList";

const App: FunctionComponent = () => {
  const [persons, setPersons] = useState<PersonInterface[]>([]);
  const [counter, setCounter] = useState(0);

  const firePerson = (id: string) => {
    setPersons((persons) => persons.filter((p) => p.id !== id));
  };

  const hirePerson = (person: PersonInterface) => {
    setPersons((persons) => persons.concat(person));
  };

  useEffect(() => {
    console.log("Joka ikinen kerta");
  });

  useEffect(() => {
    console.log("Joka kerta kun personit muuttuu, ja saapuu oikea yö.");
  }, [persons]);

  useEffect(() => {
    getPersons().then(setPersons);

    console.log("Vain kerran, kun komponentti on rendattu ekan kerran");
  }, []);

  useEffect(() => {
    const tussi = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    return () => {
      clearInterval(tussi);
    };
  }, []);

  return (
    <main>
      <h1>Mega ERP</h1>

      <p>Renderiä rendailtu {counter} kertaa.</p>

      <HirePersonForm hirePerson={hirePerson} />

      <PersonList firePerson={firePerson} persons={persons} />
    </main>
  );
};

export default App;
