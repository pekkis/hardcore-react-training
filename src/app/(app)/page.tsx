import IndexPageView from "@/components/pages/IndexPageView";
import * as currencyService from "@/services/currency";
import * as quarticleService from "@/services/quarticle";
import { Metadata } from "next";

import { DateTime } from "luxon";
import { YEAR_MONTH_DAY } from "@/services/date";
import { cache } from "react";

export const metadata: Metadata = {
  title: "Pääsivu - Kvauppalehti"
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

export default async function IndexPage() {
  const now = DateTime.utc();

  const serverTime = now.toISO() as string;
  const date = now.toFormat(YEAR_MONTH_DAY);

  const rates = await fetchCurrencyRates(date);

  const latestQuarticles = await quarticleService.getQuarticles(0, 10);

  return (
    <IndexPageView
      rates={rates}
      latestQuarticles={latestQuarticles}
      serverTime={serverTime}
    />
  );
}
