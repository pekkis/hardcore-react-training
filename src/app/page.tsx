import { Clocks } from "@/components/clock/Clocks";
import { Currencies } from "@/components/currencies/Currencies";
import Spinner from "@/components/debug/Spinner";
import { Kvaakcast } from "@/components/kvaakcast/Kvaakcast";
import { Kvaaktube } from "@/components/kvaaktube/Kvaaktube";
import { getQuarticles } from "@/services/quarticle";
import Link from "next/link";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import { redirect } from "next/navigation";

/*
<Clock timezone="America/New_York" time={currentTime} locale="en-US" />
<Clock timezone="Europe/London" time={currentTime} locale="en-GB" />
<Clock timezone="Europe/Helsinki" time={currentTime} locale="fi-FI" />
<Clock timezone="Asia/Tokyo" time={currentTime} locale="ja-JP" />
*/

export const metadata = {
  title: "Kvaak.fi"
};

export default async function IndexPage() {
  const now = new Date().getTime();

  const data = [
    { timezone: "America/New_York", locale: "en-US" },
    { timezone: "Europe/London", locale: "en-GB" },
    { timezone: "Europe/Helsinki", locale: "fi-FI" },
    { timezone: "Asia/Seoul", locale: "ko-KR" },
    { timezone: "Asia/Tokyo", locale: "ja-JP" }
  ];

  const { quarticles } = await getQuarticles(0, 10);

  return (
    <div>
      <section>
        <h2>Kvartikkelit</h2>

        {quarticles.map((quarticle) => {
          return (
            <div key={quarticle.id}>
              <h2>
                <Link href={`/a/${quarticle.id}`}>{quarticle.headline}</Link>
              </h2>
            </div>
          );
        })}
      </section>

      <section>
        <h2>Currencies</h2>
        <Suspense fallback={<Spinner />}>
          <Currencies initialTime={now} />
        </Suspense>
      </section>

      <section>
        <h2>Kvaaktube</h2>
        <Suspense fallback={<Spinner />}>
          <Kvaaktube />
        </Suspense>
      </section>

      <section>
        <h2>Kvaakcast</h2>
        <Suspense fallback={<Spinner />}>
          <Kvaakcast />
        </Suspense>
      </section>

      <section>
        <h2>Maailmankello</h2>
        <ErrorBoundary fallback={<div>KAATUMUS MAKSIMUS</div>}>
          <Clocks now={now} data={data} />
        </ErrorBoundary>
      </section>
    </div>
  );
}
