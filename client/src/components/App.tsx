import React, { FunctionComponent } from "react";

type Props = {};

const App: FunctionComponent<Props> = props => {
  return (
    <>
      <div>
        <h1>Hello React Training!</h1>
        <p>
          Dear sir or madam, you must be <strong>suckling</strong> on a{" "}
          <em>duckling!</em>
        </p>
      </div>
    </>
  );
};

export default App;
