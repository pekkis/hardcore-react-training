import { FC, useState, useEffect, useRef } from "react";
// import { cleanse } from "../services/instance";

import styles from "./App.module.css";

import logo from "../assets/favicon.png";

import { cleanse } from "../services/instance";
import Button from "./Button";
import Spinner from "./Spinner";
import useDuckStore from "../services/useDuckStore";
import { Outlet } from "react-router";

type Props = {};

/*
const InternalHelperComponentForJustMe = (props) => {
  return "hihuli hei";
};
*/

// Map

/*
{
  aaaa-bbb-ccc: {
    id: aaa-bbb-ccc
  },
    bbbb-bbb-ccc: {
    id: bbb-bbb-ccc
  }
}
*/

const App: FC<Props> = () => {
  const [counter, setCounter] = useState<number>(0);

  // const { ducks, operationsPending, fireDuck, hireDuck } = useDucks();

  const ducks = useDuckStore((state) => state.ducks);
  const operationsPending = useDuckStore((state) => state.operationsPending);
  const isInitialized = useDuckStore((state) => state.isInitialized);
  const getDucks = useDuckStore((state) => state.getDucks);

  useEffect(() => {
    getDucks();
  }, [getDucks]);

  /*
  useEffect(() => {
    console.log("CLEANSING");
    cleanse().then(() => {
      console.log("CLEANSED");
    });
  }, []);
  */

  useEffect(() => {
    console.log("RENDER!");
  });

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("ASSERT THAT I AM HERE");
      // setCounter(counter + 1);

      setCounter((counter) => {
        return counter + 1;
      });
    }, 5000);

    return () => {
      console.log("CLEANUP!");

      clearInterval(interval);
    };
  }, []);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  console.log("button ref", buttonRef);

  // const ducks = getDucks();
  console.log(ducks, "duckkendaaler");

  /*
  if (!isInitialized) {
    return <em>HOLD YER HORSES!</em>;
  }
  */

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>
          <img
            alt="Mallard ERP logo"
            className={styles.logo}
            src={logo}
            width="50"
          />
          Mallard ERP
        </h1>

        {operationsPending > 0 && <Spinner />}
      </header>

      <main className={styles.main}>
        <Button ref={buttonRef} onClick={() => cleanse()}>
          cleanse
        </Button>

        <p>
          Counter: <strong>{counter}</strong>
        </p>

        <hr />
        <Outlet />
      </main>
    </>
  );
};

export default App;
