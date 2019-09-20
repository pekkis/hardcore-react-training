import React, { useEffect } from "react";
import PersonList from "./PersonList";
import HirePersonForm from "./HirePersonForm";
import { useDispatch, useSelector } from "react-redux";
import "./App.pcss";
import { FIRE_PERSON, HIRE_PERSON, GET_PERSONS } from "../ducks/person";
import Spinner from "./Spinner";

/*
{
  person: Map({ persons: List() })
}
*/

const App = props => {
  const persons = useSelector(state => state.person.get("persons"));
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.ui.get("loading") > 0);

  useEffect(() => {
    dispatch({ type: GET_PERSONS });
    dispatch({ type: GET_PERSONS });
  }, [dispatch]);

  const firePerson = id => {
    dispatch({ type: FIRE_PERSON, payload: id });
  };

  const hirePerson = person => {
    dispatch({ type: HIRE_PERSON, payload: person });
  };

  const isGood = p => p.age < 30 || p.isRelatedToCEO === true;

  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
      {isLoading && <Spinner />}
      <h1>Fraktio ERP 50.000.000</h1>

      <HirePersonForm hirePerson={hirePerson} />

      <h2>Pahat ihmiset</h2>
      <PersonList firePerson={firePerson} persons={badPersons} showMetadata />

      <h2>Hyvät ihmiset</h2>
      <PersonList firePerson={firePerson} persons={goodPersons} />
    </div>
  );
};

export default App;
