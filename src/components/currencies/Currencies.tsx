"use client";

import { Controls } from "@/components/currencies/Controls";
import { CurrencyTable } from "@/components/currencies/CurrencyTable";
import Spinner from "@/components/debug/Spinner";
import { getCurrencyRates } from "@/services/currency";
import { YEAR_MONTH_DAY } from "@/services/date";
import { useExampleStore } from "@/stores/exampleStore";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { FC, useDeferredValue, useMemo, useState } from "react";

type Props = {
  initialTime: number;
};

export const Currencies: FC<Props> = ({ initialTime }) => {
  const user = useExampleStore((state) => state.user);

  const [currentDate, setCurrentDate] = useState(
    DateTime.fromMillis(initialTime).toFormat(YEAR_MONTH_DAY)
  );

  const [filter, setFilter] = useState("");

  const deferredFilter = useDeferredValue(filter);

  const { isError, data, isLoading } = useQuery({
    retry: false,
    queryKey: ["currencies", currentDate],
    queryFn: () => {
      return getCurrencyRates(currentDate);
    }
  });

  if (isLoading) {
    return (
      <div>
        Currencies
        <Controls
          filter={filter}
          changeFilter={(next) => {
            setFilter(next);
          }}
          currentDate={currentDate}
          changeDate={(next) => {
            setCurrentDate(next);
          }}
        />
        <Spinner />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div>
        Currencies
        <Controls
          filter={filter}
          changeFilter={(next) => {
            setFilter(next);
          }}
          currentDate={currentDate}
          changeDate={(next) => {
            setCurrentDate(next);
          }}
        />
        Virhe datojen haussa!!
      </div>
    );
  }

  const rates = Object.entries(data.rates)
    .map(([country, rate]) => {
      return {
        country,
        rate: rate.value
      };
    })
    .filter((rate) => {
      if (deferredFilter.length === 0) {
        return true;
      }

      return rate.country.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <div>
      Currencies
      <Controls
        filter={filter}
        changeFilter={(next) => {
          setFilter(next);
        }}
        currentDate={currentDate}
        changeDate={(next) => {
          setCurrentDate(next);
        }}
      />
      <CurrencyTable currencyData={rates} />
    </div>
  );
};
