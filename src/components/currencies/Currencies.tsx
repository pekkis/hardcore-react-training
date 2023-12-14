"use client";

import { getCurrencyRates } from "@/services/currency";
import { YEAR_MONTH_DAY } from "@/services/date";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { FC, useDeferredValue, useState } from "react";
import Spinner from "../debug/Spinner";
import CurrencyList from "./CurrencyList";
import Controls from "./Controls";

type Props = {
  serverTime: number;
};

const willShow = (currency: string, filter: string) => {
  if (filter === "") {
    return true;
  }

  if (currency.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
    return true;
  }

  return false;
};

const Currencies: FC<Props> = ({ serverTime }) => {
  const [currentDate, setCurrentDate] = useState(
    DateTime.fromMillis(serverTime).toFormat(YEAR_MONTH_DAY)
  );

  // useCurrencyRates() <- encapsulate the usage of queries et al.

  const { isLoading, data, isError } = useQuery({
    retry: false,
    queryKey: ["currency", currentDate],
    queryFn: () => {
      return getCurrencyRates(currentDate);
    }
  });

  const [filter, setFilter] = useState("");

  // const deferredFilter = useDeferredValue(filter);

  const ratesList = Object.entries(data?.rates || {}).map(
    ([currency, record]) => {
      return {
        currency,
        record
      };
    }
  );

  // useMemo: read me well
  // function? useCallback <= understand

  const filteredRatesList = ratesList.filter((rl) => {
    return willShow(rl.currency, filter);
  });

  const deferredPieru = useDeferredValue(filteredRatesList);

  if (isError) {
    return (
      <div>
        <Controls
          currentDate={currentDate}
          changeDate={(date) => {
            setCurrentDate(date);

            console.log("NEXT DATE", date);
          }}
        />

        <p>OH NOES!</p>
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div>
        <Controls
          currentDate={currentDate}
          changeDate={(date) => {
            setCurrentDate(date);

            console.log("NEXT DATE", date);
          }}
        />

        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <p>
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </p>

      <Controls
        currentDate={currentDate}
        changeDate={(date) => {
          setCurrentDate(date);

          console.log("NEXT DATE", date);
        }}
      />

      <CurrencyList rates={deferredPieru} />
    </div>
  );
};

export default Currencies;
