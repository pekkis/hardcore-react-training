import { FC, useEffect, useState } from "react";
import App from "./components/App";

const Root: FC = () => {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 1000000);
  }, []);

  // All React components must return one thing. A fragment (the empty tag <>) is such "one thing" that has no markup.
  return <>{isVisible && <App />}</>;
};

export default Root;
