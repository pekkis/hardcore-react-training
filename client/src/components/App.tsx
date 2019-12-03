import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
  Suspense
} from "react";
import { PersonType } from "./Person";
import { List } from "immutable";
// import IndexPage from "./IndexPage";
// import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { GET_PERSONS, FIRE_PERSON, HIRE_PERSON } from "../ducks/person";
import Spinner from "./Spinner";
import Notifications from "./Notifications";
import Modal from "./Modal";
import { LOGIN, LOGOUT } from "../ducks/auth";

const PersonPage = React.lazy(() => import("./PersonPage"));
const IndexPage = React.lazy(() => import("./IndexPage"));

type Props = {};

const App: FunctionComponent<Props> = props => {
  const dispatch = useDispatch();

  const persons: List<PersonType> = useSelector(state => state.person.toList());
  const isLoading: boolean = useSelector(
    state => state.ui.get("loadingCount") > 0
  );

  const token = useSelector(state => state.auth.get("token"));

  useEffect(() => {
    dispatch({
      type: GET_PERSONS
    });
  }, [dispatch]);

  const firePerson = useCallback(
    (id: string) => {
      dispatch({
        type: FIRE_PERSON,
        payload: id
      });
    },
    [dispatch]
  );

  const hirePerson = useCallback(
    (person: PersonType) => {
      dispatch({
        type: HIRE_PERSON,
        payload: person
      });
    },
    [dispatch]
  );

  return (
    <>
      <div>
        {token && (
          <div>
            <button
              onClick={() => {
                dispatch({ type: LOGOUT });
              }}
            >
              kirjauduppa ulos
            </button>
          </div>
        )}
        {!token && (
          <Modal>
            <div>
              Imaiskaapa meh-ewää.
              <button
                type="button"
                onClick={() => {
                  dispatch({
                    type: LOGIN,
                    payload: {
                      email: "gaylord.lohiposki@dr-kobros.com",
                      password: "gaylordpassu"
                    }
                  });
                }}
              >
                kirjauduppa sissää
              </button>
            </div>
          </Modal>
        )}
        <Notifications />
        {isLoading && <Spinner />}
        <h1>Fraktio ERP 50.000</h1>

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Suspense fallback={<div>Laddare...</div>}>
                  <IndexPage
                    persons={persons}
                    hirePerson={hirePerson}
                    firePerson={firePerson}
                  />
                </Suspense>
              );
            }}
          />

          <Route
            exact
            path="/person/:id"
            render={props => {
              // props.match.params.id
              const person = persons.find(p => p.id === props.match.params.id);
              return (
                <Suspense fallback={<div>Laddare...</div>}>
                  <PersonPage person={person} firePerson={firePerson} />
                </Suspense>
              );
            }}
          />

          <Route
            render={() => (
              <div>
                <h2>Oh noes, no page!</h2>
              </div>
            )}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
