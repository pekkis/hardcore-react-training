import { FunctionComponent } from "react";
import App from "./components/App";
import { Global } from "@emotion/react";

const Root: FunctionComponent = () => {
  return (
    <>
      <Global
        styles={{
          html: {
            fontFamily: "Comic Sans MS"
          }
        }}
      />
      <App />
    </>
  );
};

export default Root;
