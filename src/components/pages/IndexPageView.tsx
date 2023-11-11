import { EnrichedCurrencyRates } from "@/services/currency";
import { GetQuarticlesResponse } from "@/services/quarticle";
import Clocks from "../Clocks";
import Currencies from "../Currencies";
import LatestQuarticles from "../LatestQuarticles";
import * as styles from "./IndexPageView.css";

type Props = {
  serverTime: string;
  rates: EnrichedCurrencyRates;
  latestQuarticles: GetQuarticlesResponse;
};

export default function IndexPageView({
  rates,
  latestQuarticles,
  serverTime
}: Props) {
  return (
    <div>
      <h1>Tervetuloa Kvauppalehden sivuille</h1>

      {/* <CleanseButton /> */}

      <p>Kvauppalehti on Internetin johtava kvauppapaikka!!!</p>

      <div className={styles.grid}>
        <section className={styles.clock}>
          <h2>Maailmankello</h2>

          <Clocks serverTime={serverTime} />
        </section>

        <section className={styles.currencies}>
          <Currencies rates={rates} />
        </section>

        <section className={styles.latest}>
          <LatestQuarticles quarticles={latestQuarticles.quarticles} />
        </section>
      </div>
    </div>
  );
}
