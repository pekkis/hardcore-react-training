"use client";

import { EnrichedCurrencyRates, getCurrencyRates } from "@/services/currency";
import { FC, useCallback, useDeferredValue, useMemo, useState } from "react";
import RatesTable from "./RatesTable";
import { DateTime } from "luxon";
import { YEAR_MONTH_DAY } from "@/services/date";
import Controls from "./Controls";

// import {} from "react-icons/";

type Props = {
  initialRates: EnrichedCurrencyRates;
};

const abbreviationFilter = (filterBy: string, abbreviation: string) => {
  if (!filterBy) {
    return true;
  }

  return abbreviation
    .toLocaleLowerCase()
    .includes(filterBy.toLocaleLowerCase());
};

const Currency: FC<Props> = ({ initialRates }) => {
  const [rates, setRates] = useState(initialRates);

  const [filter, setFilter] = useState("");

  const deferredFilter = useDeferredValue(filter);

  const filteredRates = useMemo(() => {
    return Object.entries(rates.rates).filter(([abbr]) => {
      return abbreviationFilter(deferredFilter, abbr);
    });
  }, [deferredFilter, rates.rates]);

  // useCallback

  const changeDate = useCallback(
    async (changeInDays: number) => {
      const current = DateTime.fromISO(rates.date);
      const nextDate = current.plus({ days: changeInDays });

      try {
        const nextRates = await getCurrencyRates(
          nextDate.toFormat(YEAR_MONTH_DAY)
        );
        setRates(nextRates);
      } catch (e) {
        setRates({
          date: nextDate.toFormat(YEAR_MONTH_DAY),
          rates: {}
        });
      }
    },
    [rates.date]
  );

  return (
    <section>
      <Controls date={rates.date} changeDate={changeDate} />
      <div>
        <input
          value={filter}
          type="text"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>

      <RatesTable rates={filteredRates} />
    </section>
  );
};

export default Currency;
