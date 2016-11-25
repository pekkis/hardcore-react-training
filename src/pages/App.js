import React from 'react';
import styles from './App.pcss';
import Helmet from 'react-helmet';

const App = props => {
  const { children } = props;

  return (
    <div className={styles.root}>
      <Helmet
        htmlAttributes={{ "lang": "fi" }}
        titleTemplate="%s - Hardcore React Training"
        defaultTitle="Hard Core"
        meta={[
          {name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
        ]}
        link={[
          {"rel": "canonical", "href": "http://mysite.com/example"},
          {"rel": "apple-touch-icon", "href": "http://mysite.com/img/apple-touch-icon-57x57.png"},
          {"rel": "apple-touch-icon", "sizes": "72x72", "href": "http://mysite.com/img/apple-touch-icon-72x72.png"}
        ]}
        onChangeClientState={(newState) => console.log(newState)}
      />

      <header>
        <h1>Hardcore App</h1>
      </header>

      <main>
        {children}
      </main>

      <footer>
        Copyright Dr. Kobros Foundation
      </footer>



    </div>

  )
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
