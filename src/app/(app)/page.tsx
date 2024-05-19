import * as quarticleService from "@/services/quarticle";
import { Metadata } from "next";

import Clocks from "@/components/clock/Clocks";
import LatestQuarticles from "@/components/LatestQuarticles";
import Spinner from "@/components/debug/Spinner";
import QuackCast from "@/components/quackcast/QuackCast";
import QuackTube from "@/components/quacktube/QuackTube";
import { DateTime } from "luxon";
import { Suspense } from "react";
import * as styles from "./page.css";
import CurrencyRates from "@/components/currencies/CurrencyRates";
import SectionHeading from "@/components/duck-ui/SectionHeading";
import MainHeading from "@/components/duck-ui/MainHeading";
import Paragraph from "@/components/duck-ui/Paragraph";

// import {} from "next-auth";

// import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Pääsivu - Ankkojen Talouselämä"
};

export default async function IndexPage() {
  const now = DateTime.fromISO("2024-05-19-12T10:00:00.000+00:00");
  const serverTime = now.toISO() as string;

  const latestQuarticles = await quarticleService.getQuarticles(0, 10);

  //   const tussi = await auth();

  //  console.log(tussi, "tussi");

  return (
    <div>
      <div className={styles.grid}>
        <section className={styles.welcome}>
          <MainHeading>Tervetuloa Ankkojen Talouselämän sivuille</MainHeading>

          <Paragraph>
            Ankkojen Talouselämä on Internetin johtava kvauppapaikka!!!
          </Paragraph>
        </section>

        <section className={styles.clock}>
          <SectionHeading>Maailmankello</SectionHeading>

          <Clocks serverTime={serverTime} />
        </section>

        <section className={styles.quackcast}>
          <SectionHeading>Kvaakcast</SectionHeading>
          <Suspense fallback={<Spinner />}>
            <QuackCast />
          </Suspense>
        </section>

        <section className={styles.quacktube}>
          <SectionHeading>Videot</SectionHeading>

          <Suspense fallback={<Spinner />}>
            <QuackTube />
          </Suspense>
        </section>

        <section className={styles.currencies}>
          <Suspense fallback={<Spinner />}>
            <SectionHeading>Valuuttakurssit</SectionHeading>
            <CurrencyRates serverTime={serverTime} />
          </Suspense>
        </section>

        <section className={styles.latest}>
          <SectionHeading>Tuoreimmat kvartikkelit</SectionHeading>
          <LatestQuarticles quarticles={latestQuarticles.quarticles} />
        </section>
      </div>
    </div>
  );
}
