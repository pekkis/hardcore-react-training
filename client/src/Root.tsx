import React, { FunctionComponent } from "react";
import App from "./components/App";
import { Store } from "redux";
import { Provider } from "react-redux";

interface Props {
  store: Store;
}

const Root: FunctionComponent<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
