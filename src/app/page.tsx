import Clocks from "@/components/Clocks";
import { DateTime } from "luxon";

import { headers } from "next/headers";
import * as styles from "./page.css";
import { getCurrencyRates } from "@/services/currency";
import { YEAR_MONTH_DAY } from "@/services/date";
import Currency from "@/components/currency/Currency";

export default async function IndexPage() {
  const h = headers();

  const dt = DateTime.local();

  const now = dt.toISO() as string;

  const rates = await getCurrencyRates(dt.toFormat(YEAR_MONTH_DAY));

  console.log("rates", rates);

  return (
    <div className={styles.page}>
      <div>
        <Currency initialRates={rates} />
      </div>

      <div>
        <Clocks initialDate={now} />
      </div>
    </div>
  );
}
