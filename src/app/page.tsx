import Clocks from "@/components/clock/Clocks";
import Currencies from "@/components/currency/Currencies";
import Spinner from "@/components/debug/Spinner";
import QuackCast from "@/components/quackcast/QuackCast";
import QuackTube from "@/components/quacktube/QuackTube";

import { getQuarticles } from "@/services/quarticle";
import { DateTime } from "luxon";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Etusivu - Kvauppalehti"
};

export default async function IndexPage() {
  const serverTime = DateTime.utc().toMillis();

  const quarticles = await getQuarticles(0, 5);

  return (
    <div>
      <section>
        <h2>Uutisotsakkeet</h2>

        {quarticles.quarticles.map((quarticle) => {
          return (
            <p key={quarticle.id}>
              <Link href={`/a/${quarticle.id}`}>{quarticle.headline}</Link>
            </p>
          );
        })}
      </section>

      <section>
        <h2>Valuuttalasquri</h2>

        <Suspense fallback={<Spinner />}>
          <Currencies serverTime={serverTime} />
        </Suspense>
      </section>

      <section>
        <h2>Kvaaktuupi</h2>

        <Suspense fallback={<Spinner />}>
          <QuackTube />
        </Suspense>
      </section>

      <section>
        <h2>Kvaakcast</h2>

        <Suspense fallback={<Spinner />}>
          <QuackCast />
        </Suspense>
      </section>

      <section>
        <h2>Maailmankello</h2>
        <Clocks serverTime={serverTime} />
      </section>
    </div>
  );
}
