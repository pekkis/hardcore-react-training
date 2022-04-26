import { FC, StrictMode, useEffect, useState } from "react";
import App from "./components/App";

const Root: FC = () => {
  const [tussi, setTussi] = useState<boolean>(true);

  /*
  useEffect(() => {
    setTimeout(() => {
      setTussi(false);
    }, 5000);
  });
  */

  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return <StrictMode>{tussi && <App />}</StrictMode>;
};

export default Root;
