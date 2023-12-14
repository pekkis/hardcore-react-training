import Clocks from "@/components/clock/Clocks";
import Spinner from "@/components/debug/Spinner";
import Podcast from "@/components/podcast/Podcast";
import QuackTube from "@/components/quacktube/QuackTube";

import { DateTime } from "luxon";
import { Suspense } from "react";

import * as styles from "./page.css";
import Currencies from "@/components/currencies/Currencies";
import Headlines from "@/components/quarticles/Headlines";

export const metadata = {
  title: "Welcome to Duck Economist"
};

export default async function IndexPage() {
  const serverTime = DateTime.utc().toMillis();

  return (
    <div className={styles.container}>
      <h1>Duck Economist</h1>

      <section>
        <h2>Latest Quarticles</h2>
        <Headlines />
      </section>

      <section>
        <h2>Currencies</h2>
        <Suspense fallback={<Spinner />}>
          <Currencies serverTime={serverTime} />
        </Suspense>
      </section>

      <section className={styles.puuppa}>
        <section className={styles.clocks}>
          <Clocks serverTime={serverTime} />
        </section>
      </section>
      <section>
        <h2>Podcast</h2>
        <Suspense fallback={<Spinner />}>
          <Podcast />
        </Suspense>
      </section>

      <section>
        <h2>Kvaaktuub</h2>
        <Suspense fallback={<Spinner />}>
          <QuackTube />
        </Suspense>
      </section>
    </div>
  );
}
