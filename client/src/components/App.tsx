/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  return (
    <div
      css={{
        border: "3px dotted rgb(255, 255, 0)"
      }}
      sx={{
        padding: 2
      }}
    >
      <h1>Suckling on a duckling!</h1>
      <p>
        Good day to you, sir. Are you <em>suckling on a duckling?</em>
      </p>
    </div>
  );
};

export default App;
