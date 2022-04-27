import { FC, useEffect } from "react";
import { cleanse } from "../services/instance";
import styles from "./App.module.pcss";
import SecondsElapsed from "./SecondsElapsed";
import Button from "./Button";
import useStore from "../services/store";
import Spinner from "./Spinner";
import { Outlet } from "react-router";

// console.log(styles);

const App: FC = () => {
  const ducks = useStore((store) => Object.values(store.ducks));
  const getDucks = useStore((store) => store.getDucks);
  const secondsElapsed = useStore((store) => store.secondsElapsed);
  const increment = useStore((store) => store.incrementSecondsElapsed);

  const isInitialized = useStore((store) => store.isInitialized);

  useEffect(() => {
    // Every time.
    console.log("App :: Render!");
  });

  useEffect(() => {
    // oldValue === newValue
    console.log("App :: Ducks have changed");
  }, [ducks]);

  useEffect(() => {
    // oldValue === newValue
    console.log("App :: Ducks have changed");
    getDucks();

    /*
    const fetcher = async () => {
      const ducksFromServer = await getDucks();
      setDucks(ducksFromServer);
    };
    fetcher();
    */

    // const ducks = await getDucks();

    /*
  const ducksFromServer = getDucks().then((ducks) => {
    setDucks(ducks);
  });
  */

    // can return either undefined or a cleanup function

    return () => {
      // cleanup
    };
  }, [getDucks]);

  const isLoading = useStore((store) => store.isLoading > 0);

  if (!isInitialized) {
    return <Spinner />;
  }

  return (
    <section className={styles.main}>
      <h1 className={styles.header}>Duck ERP 10000 Pro</h1>
      {isLoading && <Spinner />}
      <Button
        onClick={() => {
          cleanse();
        }}
      >
        cleanse
      </Button>
      <SecondsElapsed secondsElapsed={secondsElapsed} increment={increment} />
      <main>
        <Outlet />
      </main>
      <footer>Copyright &copy: 2022 Gaylord McAnkka</footer>
    </section>
  );
};

export default App;
