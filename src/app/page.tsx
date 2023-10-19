import Clocks from "@/components/Clocks";
import { DateTime } from "luxon";
import * as styles from "./page.css";
import { EnrichedCurrencyRates, getCurrencyRates } from "@/services/currency";
import { YEAR_MONTH_DAY } from "@/services/date";
import Currency from "@/components/currency/Currency";
import { getQuarticles } from "@/services/quarticle";
import Headlines from "@/components/quarticles/Headlines";

const fetchRates = async (dt: DateTime): Promise<EnrichedCurrencyRates> => {
  try {
    const rates = await getCurrencyRates(dt.toFormat(YEAR_MONTH_DAY));
    return rates;
  } catch (e) {
    return {
      date: dt.toFormat(YEAR_MONTH_DAY),
      rates: {}
    };
  }
};

export default async function IndexPage() {
  // const h = headers();

  const dt = DateTime.local();

  const now = dt.toISO() as string;

  const rates = await fetchRates(dt);

  const quarticlesResponse = await getQuarticles(0, 10);

  console.log("rates", rates);

  return (
    <div className={styles.grid}>
      <div className={styles.currencies}>
        <Currency initialRates={rates} />
      </div>

      <div className={styles.clock}>
        <Clocks initialDate={now} />
      </div>

      <div className={styles.latest}>
        <Headlines quarticles={quarticlesResponse.quarticles} />
      </div>
    </div>
  );
}
