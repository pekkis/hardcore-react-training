import Clocks from "@/components/clock/Clocks";
import Spinner from "@/components/debug/Spinner";
import Kvaakcast from "@/components/media/Kvaakcast";
import Kvaaktube from "@/components/media/Kvaaktube";

import { ErrorBoundary } from "react-error-boundary";

import { DateTime } from "luxon";
import { Suspense } from "react";
import Currencies from "@/components/currencies/Currencies";
import Link from "next/link";
import * as styles from "./page.css";
import { getQuarticles } from "@/services/quarticle";

export const metadata = {
  title: "Etusivu - Kvauppalehti"
};

export default async function IndexPage() {
  const now = DateTime.utc().toUnixInteger() as number;

  const { quarticles } = await getQuarticles(0, 5);

  return (
    <div className={styles.grid}>
      <div className={styles.latest}>
        <h2>Kvartikkelit</h2>

        <ul>
          {quarticles.map((quarticle) => {
            return (
              <li key={quarticle.id}>
                <Link href={`/a/${quarticle.id}`}>{quarticle.headline}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.currencies}>
        <h2>Valuutat</h2>
        <Currencies serverTime={now} />
      </div>

      <div className={styles.quackcast}>
        <h2>Kvaakcast</h2>
        <Suspense fallback={<Spinner />}>
          <Kvaakcast />
        </Suspense>
      </div>

      <div className={styles.quacktube}>
        <h2>Kvaaktube</h2>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary fallback={<div>oh noes!</div>}>
            <Kvaaktube />
          </ErrorBoundary>
        </Suspense>
      </div>

      <div className={styles.clock}>
        <h2>Kellot</h2>
        <Clocks serverTime={now} />
      </div>
    </div>
  );
}
