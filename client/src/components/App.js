import React from "react";
import styles from "./App.pcss";
import trollo from "../assets/trollo.png";
import Loading from "./Loading";
import { Switch, Route } from "react-router";
import IndexPage from "./container/IndexPageContainer";
import PersonPage from "./container/PersonPageContainer";

class App extends React.PureComponent {
  componentDidMount() {
    const { fetchPersons, persons } = this.props;
    console.log(persons.toJS());
    if (persons.count() === 0) {
      fetchPersons();
    }
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        <h1>
          <img src={trollo} />
          Fraktio Tussimestari ERP 2.0
        </h1>

        {loading > 0 && <Loading />}

        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/person/:id" component={PersonPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
