"use client";

import { EnrichedCurrencyRates, getCurrencyRates } from "@/services/currency";
import { YEAR_MONTH_DAY } from "@/services/date";
import { DateTime } from "luxon";
import {
  FC,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState
} from "react";
import Spinner from "../debug/Spinner";
import { useQuery } from "@tanstack/react-query";
import CurrencyTable from "./CurrencyTable";
import Controls from "./Controls";
import Input from "../duck-ui/Input";

type Props = {
  serverTime: number;
};

const filterByName = (filter: string, currency: string) => {
  if (filter === "") {
    return true;
  }

  if (currency.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
    return true;
  }
  return false;
};

const Currencies: FC<Props> = ({ serverTime }) => {
  const [date, setDate] = useState(
    DateTime.fromSeconds(serverTime).toFormat(YEAR_MONTH_DAY)
  );

  const [filter, setFilter] = useState("");

  const deferredFilter = useDeferredValue(filter);

  const { data, isLoading, isError, isStale } = useQuery({
    queryKey: ["rates", date],
    queryFn: () => {
      return getCurrencyRates(date);
    }
  });

  /*
  const [rates, setRates] = useState<EnrichedCurrencyRates | undefined>();

  useEffect(() => {
    getCurrencyRates(date).then(setRates);
  }, [date]);
  */

  const rates = useMemo(() => {
    return Object.entries(data?.rates || {}).map((r) => {
      return {
        currency: r[0],
        record: r[1]
      };
    });
  }, [data?.rates]);

  const filteredRates = useMemo(
    () =>
      rates.filter((rate) => {
        return filterByName(deferredFilter, rate.currency);
      }),
    [deferredFilter, rates]
  );

  const handleChange = useCallback(
    (newDate: string) => {
      console.log("NEW DATE", newDate);
      setDate(newDate);
    },
    [setDate]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div>
        <Controls date={date} handleChange={handleChange} />
        oh noes errore
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <Controls
          date={date}
          handleChange={(newDate) => {
            console.log("NEW DATE", newDate);
            setDate(newDate);
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <Controls
        date={date}
        handleChange={(newDate) => {
          console.log("NEW DATE", newDate);
          setDate(newDate);
        }}
      />

      <p>
        <Input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </p>

      <CurrencyTable rates={filteredRates} />
    </div>
  );
};

export default Currencies;
