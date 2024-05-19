"use client";

import { getCurrencyRates } from "@/services/currency";
import { YEAR_MONTH_DAY } from "@/services/date";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { FC, useMemo, useState } from "react";
import Spinner from "../debug/Spinner";
import CurrencyList from "./CurrencyList";
import Controls from "./Controls";

type Props = {
  serverTime: number;
};

const Currencies: FC<Props> = ({ serverTime }) => {
  const [date, setDate] = useState(DateTime.fromMillis(serverTime));

  const dateStr = date.toFormat(YEAR_MONTH_DAY);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["currencies", dateStr],
    retry: false,
    queryFn: () => {
      return getCurrencyRates(dateStr);
    }
  });

  if (isError) {
    return (
      <div>
        <Controls
          date={date}
          changeDate={(date) => {
            setDate(date);
          }}
        />
        <p>Datan hakeminen beilasi! :(</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <Controls
          date={date}
          changeDate={(date) => {
            setDate(date);
          }}
        />

        <Spinner />
      </div>
    );
  }

  const rates = Object.entries(data.rates).map((entry) => {
    const [currency, value] = entry;
    return {
      currency,
      value: value.value
    };
  });

  return (
    <div>
      <Controls
        date={date}
        changeDate={(date) => {
          setDate(date);
        }}
      />
      <CurrencyList rates={rates} />
    </div>
  );
};

export default Currencies;
