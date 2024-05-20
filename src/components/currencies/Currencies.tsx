"use client";

import { EnrichedCurrencyRates, getCurrencyRates } from "@/services/currency";
import { FC, memo, useCallback, useDeferredValue, useState } from "react";

import * as styles from "./Currencies.css";
import CurrenciesList from "./CurrenciesList";
import { DateTime } from "luxon";
import { YEAR_MONTH_DAY } from "@/services/date";
import Button from "../../../packages/quack-ui/src/components/Button";
// import Button from "../../../packages/quack-ui/src/components/Button";
// import { Button } from "@gaylordmcduck/quack-ui";

type Props = {
  rates: EnrichedCurrencyRates;
};

const Currencies: FC<Props> = ({ rates }) => {
  const [filter, setFilter] = useState("");

  const [currentRates, setCurrentRates] = useState(rates);

  const changeDate = useCallback(
    async (dateModifier: number) => {
      const currentDate = currentRates.date;
      const dt = DateTime.fromISO(currentDate);
      const nextDate = dt.plus({ days: dateModifier }).toFormat(YEAR_MONTH_DAY);

      try {
        const rates = await getCurrencyRates(nextDate);
        setCurrentRates(rates);
      } catch (e) {
        console.error(e);
        setCurrentRates({ date: nextDate, rates: {} });
      }
    },
    [currentRates.date]
  );

  const debounced = useDeferredValue(filter);

  return (
    <div className={styles.currenciesClass}>
      <p>
        <Button onClick={() => changeDate(-1)}>&laquo;</Button>
        {currentRates.date}
        <Button onClick={() => changeDate(1)}>&raquo;</Button>
      </p>

      <p>
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </p>

      <CurrenciesList rates={currentRates} filter={debounced} />
    </div>
  );
};

export default memo(Currencies);
