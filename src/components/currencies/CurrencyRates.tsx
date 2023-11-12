import { cache } from "react";
import * as currencyService from "@/services/currency";
import { YEAR_MONTH_DAY } from "@/services/date";
import { DateTime } from "luxon";
import Currencies from "./Currencies";

type Props = {
  serverTime: string;
};

const fetchCurrencyRates = cache(
  async (date: string): Promise<currencyService.EnrichedCurrencyRates> => {
    try {
      const rates = await currencyService.getCurrencyRates(date);
      return rates;
    } catch (e) {
      return {
        date: date,
        rates: {}
      };
    }
  }
);

const CurrencyRates = async ({ serverTime }: Props) => {
  const now = DateTime.fromISO(serverTime);
  const date = now.toFormat(YEAR_MONTH_DAY);

  const rates = await fetchCurrencyRates(date);

  return <Currencies rates={rates} />;
};

export default CurrencyRates;
