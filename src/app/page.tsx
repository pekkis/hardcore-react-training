import Clocks from "@/components/clock/Clocks";
import Spinner from "@/components/debug/Spinner";
import Kvaakcast from "@/components/media/Kvaakcast";
import Kvaaktube from "@/components/media/Kvaaktube";

import { ErrorBoundary } from "react-error-boundary";

import { DateTime } from "luxon";
import { Suspense } from "react";
import Currencies from "@/components/currencies/Currencies";

export default async function IndexPage() {
  const now = DateTime.utc().toUnixInteger() as number;

  return (
    <div>
      <div>
        <h2>Valuutat</h2>
        <Currencies serverTime={now} />
      </div>

      <div>
        <h2>Kvaakcast</h2>
        <Suspense fallback={<Spinner />}>
          <Kvaakcast />
        </Suspense>
      </div>

      <div>
        <h2>Kvaaktube</h2>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary fallback={<div>oh noes!</div>}>
            <Kvaaktube />
          </ErrorBoundary>
        </Suspense>
      </div>

      <div>
        <h2>Kellot</h2>
        <Clocks serverTime={now} />
      </div>
    </div>
  );
}
