import axios from "axios";
import { getBaseUrl } from "./instance";

import cc from "currency-codes";

export type CurrencyName = string;

export type CurrencyRates = {
  date: string;
  rates: Record<CurrencyName, number>;
};

export type CurrencyRecord = {
  value: number;
  meta?: cc.CurrencyCodeRecord;
};

export type EnrichedCurrencyRates = {
  date: string;
  rates: Record<CurrencyName, CurrencyRecord>;
};

export const getCurrencyRates = async (
  date: string
): Promise<EnrichedCurrencyRates> => {
  try {
    const ret = await axios.get<CurrencyRates>(
      `${getBaseUrl()}/currency/${date}`
    );

    const currencyRates = ret.data;

    const enriched: EnrichedCurrencyRates = {
      ...currencyRates,
      rates: Object.fromEntries(
        Object.entries(currencyRates.rates).map(([key, value]) => {
          return [
            key,
            {
              value,
              meta: cc.code(key)
            }
          ];
        })
      )
    };

    return enriched;
  } catch (e) {
    console.log("ERROR FETCHING CURRENCY RATES", e);
    throw e;
  }
};
