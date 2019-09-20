import React, { FunctionComponent } from "react";
import App from "./components/App";
import { Provider } from "react-redux";

type Props = {
  store: any;
};

const Root: FunctionComponent<Props> = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
