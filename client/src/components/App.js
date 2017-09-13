import React from "react";
import styles from "./App.pcss";
import Loading from "./Loading";
import logo from "../assets/trollo.png";
import IndexPage from './container/IndexPageContainer';
import UserPage from './container/UserPageContainer';
import { Switch, Route } from 'react-router';
import { FormattedMessage } from 'react-intl';

class App extends React.Component {

  componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { loading } = this.props;

    return (
      <div>

        <h1>
          <img alt="In Fraktio We Trust" src={logo} />
          <FormattedMessage id="fraktio" defaultMessage="Fraktio LUB" />
        </h1>

        {loading && <Loading />}

        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/user/:id" exact component={UserPage} />
        </Switch>

      </div>
    );
  }
}

export default App;
