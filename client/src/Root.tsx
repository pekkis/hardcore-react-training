import React, { FunctionComponent } from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

type Props = {
  store: any;
};

const Root: FunctionComponent<Props> = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
