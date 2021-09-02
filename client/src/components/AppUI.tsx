/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { PersonType } from "../services/person";
import { useStore } from "../services/state";
import IndexPage from "./IndexPage";
import Spinner from "./Spinner";
import { Switch, Route } from "react-router";
import NotFound from "./NotFound";
import PersonPage from "./PersonPage";

type Props = {
  firePerson: (id: string) => void;
  hirePerson: (person: PersonType) => void;
  persons: PersonType[];
  increaseNumberOfRenders: () => void;
  numberOfRenders: number;
};

const AppUI: FC<Props> = (props) => {
  const {
    persons,
    firePerson,
    hirePerson,
    numberOfRenders,
    increaseNumberOfRenders
  } = props;

  const isLoading = useStore((store) => Boolean(store.asyncLoading));

  return (
    <main>
      <h1>Giga ERP!!!</h1>
      {isLoading && <Spinner />}
      <button onClick={increaseNumberOfRenders}>incremento!</button>

      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <IndexPage
                persons={persons}
                firePerson={firePerson}
                hirePerson={hirePerson}
                numberOfRenders={numberOfRenders}
              />
            );
          }}
        />
        <Route component={PersonPage} path="/person/:id" />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};

export default AppUI;
