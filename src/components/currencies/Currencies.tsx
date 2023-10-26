"use client";

import { EnrichedCurrencyRates, getCurrencyRates } from "@/services/currency";
import { FC, useEffect, useState } from "react";
import Spinner from "../debug/Spinner";
import { DateTime } from "luxon";
import { YEAR_MONTH_DAY } from "@/services/date";
import RatesTable from "./RatesTable";
import DateSelector from "./DateSelector";

type Props = {
  time: number;
};

const filterBySearch = (search: string, abbreviation: string) => {
  return abbreviation.toLocaleLowerCase().includes(search.toLocaleLowerCase());
};

const Currencies: FC<Props> = ({ time }) => {
  const [rates, setRates] = useState<EnrichedCurrencyRates>();

  const [filterBy, setFilterBy] = useState("");
  // useDeferredValue()

  const [ratesDateTime, setRatesDateTime] = useState(
    DateTime.fromSeconds(time)
  );

  useEffect(() => {
    // const dt = DateTime.fromSeconds(time);
    const dateStr = ratesDateTime.toFormat(YEAR_MONTH_DAY);

    // const lus = Promise.resolve("594398").then((x) => parseInt(x));

    const fetcher = async () => {
      try {
        const ret = await getCurrencyRates(dateStr);
        setRates(ret);
      } catch (e) {
        setRates({
          date: dateStr,
          rates: {}
        });
      }
    };

    fetcher();

    // getCurrencyRates(dateStr).then(setRates);
  }, [ratesDateTime]);

  // 2023-10-26
  // getCurrencyRates("2023-10-26");

  // EnrichedJotakin

  if (!rates) {
    return <Spinner />;
  }

  // useMemo()
  const entries = Object.entries(rates.rates);
  const ratesList = entries.map((entry) => {
    return {
      abbreviation: entry[0],
      value: entry[1].value
    };
  });
  const filteredRatesList = ratesList.filter((r) => {
    return filterBySearch(filterBy, r.abbreviation);
  });

  // useCallback()
  const handleChangeDate = (nextDate: DateTime) => {
    console.log(nextDate, "hip huu");

    if (!nextDate.isValid) {
      return;
    }

    setRatesDateTime(nextDate);
  };

  return (
    <div>
      <h2>Valuuttakurssit</h2>

      <DateSelector currentDate={ratesDateTime} changeDate={handleChangeDate} />

      <div>
        <input
          value={filterBy}
          type="text"
          name="filter"
          onChange={(e) => {
            console.log("input", e.target.value);
            setFilterBy(e.target.value);
          }}
        />
      </div>

      <RatesTable rates={filteredRatesList} />
    </div>
  );
};

export default Currencies;
