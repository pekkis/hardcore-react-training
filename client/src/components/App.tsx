import React, { FunctionComponent } from "react";

import styles from "./App.module.pcss";

type Props = {};

const App: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className={styles.root}>
        <h1>Hello React Training!</h1>
        <p>
          Dear sir or madam, you <em>must</em> be{" "}
          <strong>suckling on a duckling!</strong>
        </p>
      </div>
    </>
  );
};

export default App;
