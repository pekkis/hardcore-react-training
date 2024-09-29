"use client";

import { Controls } from "@/components/currencies/Controls";
import Currencies from "@/components/currencies/Currencies";
import Spinner from "@/components/debug/Spinner";
import { EnrichedCurrencyRates, getCurrencyRates } from "@/services/currency";
import { YEAR_MONTH_DAY } from "@/services/date";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { useCallback, useState } from "react";

type Props = {
  serverTime: string;
};

export const CurrencyRates = ({ serverTime }: Props) => {
  const [date, setDate] = useState(
    DateTime.fromISO(serverTime).toFormat(YEAR_MONTH_DAY)
  );

  const changeDate = useCallback(
    async (date: string) => {
      setDate(date);
    },
    [date]
  );

  console.log("DATE", date);

  const { data, isLoading, isPending, isError } = useQuery({
    queryKey: ["currency", date],
    queryFn: () => {
      return getCurrencyRates(date);
    },
    retry: 0
  });

  if (isError) {
    return (
      <div>
        <Controls date={date} changeDate={changeDate} />

        <p>Virhe haettaessa valuuttakursseja</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <Controls date={date} changeDate={changeDate} />
        <Spinner /> Laddare...
      </div>
    );
  }

  return (
    <div>
      <Controls date={date} changeDate={changeDate} />
      <Currencies date={date} rates={data} />
    </div>
  );
};
