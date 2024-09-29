"use client";

import { EnrichedCurrencyRates, getCurrencyRates } from "@/services/currency";
import { FC, memo, useCallback, useDeferredValue, useState } from "react";

import * as styles from "./Currencies.css";
import CurrenciesList from "./CurrenciesList";

type Props = {
  rates: EnrichedCurrencyRates;
  date: string;
};

const Currencies: FC<Props> = ({ rates }) => {
  const [filter, setFilter] = useState("");

  const debounced = useDeferredValue(filter);

  return (
    <div className={styles.currenciesClass}>
      <p>
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </p>

      <CurrenciesList rates={rates} filter={debounced} />
    </div>
  );
};

export default memo(Currencies);
