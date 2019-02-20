import React from "react";
import Loading from "./Loading";
import IndexPage from "./containers/IndexPageContainer";
import PersonPage from "./containers/PersonPageContainer";
import Notifications from "./notifications/containers/NotificationsContainer";
import UserInfo from "./containers/UserInfoContainer";
import { Switch, Route } from "react-router";

import "./App.pcss";

class App extends React.PureComponent {
  async componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
    getPersons();
    getPersons();
    getPersons();
    getPersons();
    getPersons();
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        <Notifications />
        {loading && <Loading />}
        <h1>Fraktio ERP 5000</h1>

        <UserInfo />

        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/person/:id" exact component={PersonPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
