import { FC, useEffect } from "react";
import AppUI from "./AppUI";

import { useStore } from "../services/state";

const App: FC = () => {
  const firePerson = useStore((store) => store.firePerson);
  const hirePerson = useStore((store) => store.hirePerson);
  const getPersons = useStore((store) => store.getPersons);
  const persons = useStore((store) => Array.from(store.persons.values()));
  const increaseNumberOfRenders = useStore(
    (store) => store.increaseNumberOfRenders
  );
  const numberOfRenders = useStore((store) => store.numberOfRenders);

  useEffect(() => {
    console.log("JOKA KERTA KUN RENDER LOPPUU JA ALKAA OIKEA YÖ!");

    return () => {
      console.log("JOKA KERTA CLEANUP");
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      increaseNumberOfRenders();
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [increaseNumberOfRenders]);

  useEffect(() => {
    getPersons();
    // This is ok to not be in deps because it is run only once and it doesn't even maaaatteeer.
  }, [getPersons]);

  return (
    <AppUI
      firePerson={firePerson}
      hirePerson={hirePerson}
      persons={persons}
      numberOfRenders={numberOfRenders}
      increaseNumberOfRenders={increaseNumberOfRenders}
    />
  );
};

export default App;
