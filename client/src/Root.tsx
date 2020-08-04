import React, { FunctionComponent } from "react";
import App from "./components/App";

interface Props {}

const Root: FunctionComponent<Props> = (props) => {
  console.log("Lollipop");
  return <App />;
};

export default Root;
