import {
  FC,
  ReactNode,
  useState,
  useEffect,
  useCallback,
  useMemo
} from "react";
import {
  DuckType,
  getDucks,
  fireDuck as fireDuckSrv,
  hireDuck as hireDuckSrv,
  DuckProspectType
} from "../services/duck";
import { cleanse } from "../services/instance";
import DuckList from "./DuckList";
import HireDuckForm from "./HireDuckForm";

type Props = {
  children: ReactNode;
};

const App: FC = (props) => {
  const [ducks, setDucks] = useState<DuckType[]>([]);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

  const fireDuck = useCallback(
    async (id: string) => {
      const fired = await fireDuckSrv(id);
      setDucks((ducks) => {
        return ducks.filter((d) => d.id !== fired.id);
      });
    },
    [setDucks]
  );

  const hireDuck = useCallback(
    async (prospect: DuckProspectType) => {
      const hired = await hireDuckSrv(prospect);
      setDucks((ducks) => {
        // ducks.push(hired) // returns
        return ducks.concat(hired);
        // return [...ducks, prospect];
      });
    },
    [setDucks]
  );

  const isGood = (duck: DuckType) => {
    if (duck.age >= 10) {
      return false;
    }

    if (duck.gender === 1) {
      return true;
    }
  };

  const goodDucks = useMemo(() => ducks.filter(isGood), [ducks]);
  const badDucks = useMemo(() => ducks.filter((d) => !isGood(d)), [ducks]);

  useEffect(() => {
    const i = setInterval(() => {
      setSecondsElapsed((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  // Hookkien SÄÄNNÖT
  /*
  useEffect(() => {
    console.log("Tyhjää kutsutaan joka kerta!");
  });
  */

  useEffect(() => {
    console.log("THIS IS THE THING!!!");
    // IS THIS THE REAL LIFE OR IS THIS JUST FANTASY?
    /*
    getDucks().then((ducks) => {
      console.log("FETCHED DA DUCKS");
      setDucks(ducks);
    });
    */
  }, []);

  useEffect(() => {
    console.log("Tämä efekti suoritetaan aina kun ankat muuttuvat");
  }, [ducks]);

  /*
  getDucks().then((ducks) => {
    console.log("FETCHED DA DUCKS");
    setDucks(ducks);
  });
  */

  return (
    <main>
      <h1>Duck Erp 100000</h1>

      <button
        onClick={() => {
          cleanse();
        }}
      >
        puhdista
      </button>

      <HireDuckForm hireDuck={hireDuck} />

      <h2>Etusivu</h2>

      <p>
        Sekunteja elämästä kulunut: <strong>{secondsElapsed}</strong>
      </p>

      <DuckList
        fireDuck={fireDuck}
        title="Pahat ankat"
        ducks={badDucks}
        showMetadata
      />

      <DuckList fireDuck={fireDuck} title="Hyvät ankat" ducks={goodDucks} />
    </main>
  );
};

export default App;
