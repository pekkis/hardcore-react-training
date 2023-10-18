"use client";

import { EnrichedCurrencyRates } from "@/services/currency";
import { FC, useDeferredValue, useEffect, useMemo, useState } from "react";
import RatesTable from "./RatesTable";

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

  return (
    <section>
      <input
        value={filter}
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />

      <RatesTable rates={filteredRates} />
    </section>
  );
};

export default Currency;
