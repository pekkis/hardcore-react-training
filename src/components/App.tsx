import {
  FC,
  useEffect,
  useState,
  useCallback,
  useMemo,
  lazy,
  Suspense
} from "react";
import { Route, Routes } from "react-router";
import gaylord from "../assets/gaylord-mcduck.jpg";
import {
  DuckProspectType,
  DuckType,
  fireDuck,
  getDucks,
  hireDuck
} from "../services/duck";
import { cleanse } from "../services/instance";
import { mainClass } from "./App.css";
import Button from "./Button";

// import DuckPage from "./DuckPage";
// import IndexPage from "./IndexPage";

const DuckPage = lazy(() => import("./DuckPage"));
const IndexPage = lazy(() => import("./IndexPage"));

const LazyLoadedPage = ({ children }) => {
  return (
    <Suspense fallback={<div>Hoi laari laari laa, hän lataa</div>}>
      {children}
    </Suspense>
  );
};

const App: FC = () => {
  const [duckState, setDuckState] = useState<DuckType[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [isCleansing, setIsCleansing] = useState<boolean>(false);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      console.log("INTERVALLI");
      setCounter((oldValue) => {
        return oldValue + 1;
      });
    }, 1000);

    return () => {
      clearInterval(counterInterval);
    };
  }, []);

  useEffect(() => {
    console.log("Tämä suoritetaan joka kerta.");
  });

  useEffect(() => {
    console.log("Tämä joka kerta kun ankat vaihtuvat");
  }, [duckState]);

  useEffect(() => {
    getDucks().then((ducks) => {
      console.log("hep");
      console.log(ducks, "ducks");
      setDuckState(ducks);
    });
  }, []);

  const onFireDuck = useCallback(
    async (id: string): Promise<void> => {
      await fireDuck(id);

      setDuckState((currentDucks) => {
        return currentDucks.filter((duck) => duck.id !== id);
      });
    },
    [setDuckState]
  );

  const onHireDuck = useCallback(
    async (prospect: DuckProspectType): Promise<void> => {
      const hiredDuck = await hireDuck(prospect);

      setDuckState((currentDucks) => {
        return [...currentDucks, hiredDuck];
        // return currentDucks.concat(hiredDuck)
      });
    },
    [setDuckState]
  );

  // console.log("render");

  return (
    <main className={mainClass}>
      <h1 className="duck">Duck ERP 2000</h1>

      <p>
        Ohjelmaa käytetty: <strong>{counter}</strong> sekuntia!
      </p>

      <img alt="Gaylord" src={gaylord} width="200" />

      <Button
        variant="secondary"
        disabled={isCleansing}
        onClick={async () => {
          setIsCleansing(true);
          const tussi = await cleanse();

          console.log(tussi, "TUSSI");
          setIsCleansing(false);

          /*
          cleanse().then(() => {
            setIsCleansing(false);
          }, () => {}).catch(e => {})
          */
        }}
      >
        {!isCleansing ? (
          <span>puhdista</span>
        ) : (
          "puhdistus käynnissäääääääh odota kärsivällisesti tuloksien valmistumista"
        )}
      </Button>

      <hr />

      <Routes>
        <Route
          path="/"
          element={
            <LazyLoadedPage>
              <IndexPage
                duckState={duckState}
                onHireDuck={onHireDuck}
                onFireDuck={onFireDuck}
              />
            </LazyLoadedPage>
          }
        />
        <Route
          path="/duck/:id"
          element={
            <LazyLoadedPage>
              <DuckPage ducks={duckState} />
            </LazyLoadedPage>
          }
        />
      </Routes>
    </main>
  );
};

export default App;
