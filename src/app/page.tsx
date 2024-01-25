// "use client";

import Clocks from "@/components/clock/Clocks";
import Spinner from "@/components/debug/Spinner";
import QuackTube from "@/components/quacktube/QuackTube";
import { DateTime } from "luxon";
import { FC, Suspense } from "react";

const IndexPage: FC = async () => {
  const time = DateTime.utc().toISO(); // .toISO();

  return (
    <div>
      <h1>Hellurei!!!</h1>

      <p>Lolloti!</p>

      <section>
        <h1>Kello</h1>
        <Clocks serverTime={time} />
      </section>

      <section>
        <h1>Kvaaktuupi</h1>

        <Suspense fallback={<Spinner />}>
          <QuackTube />
        </Suspense>
      </section>
    </div>
  );
};

export default IndexPage;
