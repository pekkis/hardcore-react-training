import React, { FunctionComponent } from "react";

import styles from "./App.module.pcss";

interface Props {
  suckleOnA?: string;
}

const App: FunctionComponent<Props> = ({ suckleOnA = "duckling" }) => {
  return (
    <>
      <div className={styles.root}>
        <h1>Hardcore React Training!</h1>
        <p>
          Dear sir or madam, you <em>must</em> be{" "}
          <strong>suckling on a {suckleOnA}!</strong>
        </p>
      </div>
    </>
  );
};

export default App;
