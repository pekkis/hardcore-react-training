"use client";

import { EnrichedCurrencyRates, getCurrencyRates } from "@/services/currency";
import { FC, useEffect, useState } from "react";
import Spinner from "../debug/Spinner";
import { DateTime } from "luxon";
import { YEAR_MONTH_DAY } from "@/services/date";

type Props = {
  time: number;
};

const Currencies: FC<Props> = ({ time }) => {
  const [rates, setRates] = useState<EnrichedCurrencyRates>();

  useEffect(() => {
    const dt = DateTime.fromSeconds(time);
    const dateStr = dt.toFormat(YEAR_MONTH_DAY);

    // const lus = Promise.resolve("594398").then((x) => parseInt(x));

    const fetcher = async () => {
      const ret = await getCurrencyRates(dateStr);
      setRates(ret);
    };

    fetcher();

    // getCurrencyRates(dateStr).then(setRates);
  }, [time]);

  // 2023-10-26
  // getCurrencyRates("2023-10-26");

  // EnrichedJotakin

  if (!rates) {
    return <Spinner />;
  }

  return (
    <div>
      <h2>Valuuttakurssit</h2>

      {JSON.stringify(rates)}
    </div>
  );
};

export default Currencies;
