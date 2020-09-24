import { DateTime } from "luxon";
import React, { FunctionComponent, useState, useEffect } from "react";
import { getPersons } from "../services/person";
import { PersonInterface } from "../types";
import HirePersonForm, { HireablePerson } from "./HirePersonForm";

import "./App.module.pcss";
import Clock from "./Clock";
import PersonCatalogue from "./PersonCatalogue";

import { v4 } from "uuid";

import * as R from "ramda";

const App: FunctionComponent = () => {
  const [persons, setPersons] = useState<PersonInterface[]>([]);

  const [time, setTime] = useState<DateTime>(DateTime.utc());

  useEffect(() => {
    console.log("I will be run every goddamn render");
  });

  // Change: persons !== newPersons
  useEffect(() => {
    console.log("I will be run every time persons are CHANGED");
  }, [persons]);

  useEffect(() => {
    getPersons().then(setPersons);
    return () => {
      console.log("cleanup");
    };
  }, []);

  // Clock effect
  /*
  useEffect(() => {
    console.log("Time to update da clock maaan!");

    const updateTimeInterval = setInterval(() => {
      setTime(DateTime.utc());
    }, 1000);

    return () => {
      clearInterval(updateTimeInterval);
    };
  }, [setTime]);
  */

  const hirePerson = (person: HireablePerson) => {
    const hiredPerson: PersonInterface = {
      ...person,
      id: v4()
    };

    setPersons(R.append(hiredPerson, persons));
    // setPersons(persons.concat([hiredPerson]));
  };

  const firePerson = (id: string) => {
    // setPersons(persons.filter((p) => p.id !== id));

    // functional
    setPersons(R.filter((p: PersonInterface) => p.id !== id, persons));
  };

  return (
    <div>
      <h1>Peksu MEGA ERP 10.000</h1>

      <Clock time={time} />

      <HirePersonForm hirePerson={hirePerson} />

      <PersonCatalogue persons={persons} firePerson={firePerson} />
    </div>
  );
};

export default App;
