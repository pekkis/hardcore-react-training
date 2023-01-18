type Props = {};

import { FC, useEffect, useState } from "react";
import { DuckType, getDucks } from "../services/duck";

const App: FC<Props> = () => {
  const [ducks, setDucks] = useState<DuckType[]>([]);

  useEffect(() => {
    console.log("RENDER APP");
    // getDucks().then(setDucks);

    return () => {
      console.log("RENDER APP CLEANUP");
    };
  });

  useEffect(() => {
    console.log("DUCKS HAVE CHANGED", ducks);
    // getDucks().then(setDucks);

    return () => {
      console.log("DUCKS HAVE CHANGED CLEANUP");
    };
  }, [ducks]);

  useEffect(() => {
    getDucks().then(setDucks);

    return () => {
      console.log("NOTHING HAS CHANGED CLEANUP");
    };
  }, []);

  return (
    <main>
      <h1>Hyper ERP 50000 Pro</h1>

      <p>Welcome</p>

      <h2>Ducks</h2>

      {ducks.length === 0 && <p>Ei ankkoja...</p>}

      {ducks.map((duck) => {
        return <div key={duck.id}>{duck.id}</div>;
      })}
    </main>
  );
};

export default App;
