"use client";

import { QuarticleType } from "@/services/quarticle";
import { DateTime } from "luxon";
import { FC, useEffect, useState } from "react";
import Clock from "./Clock";
import Headline from "./Headline";

type Props = {
  serverTime: string;
  headlines: QuarticleType[];
};

export const Headlines: FC<Props> = ({ serverTime, headlines }) => {
  // const [headlines, setHeadlines] = useState<QuarticleType[]>([]);

  const [now, setNow] = useState<DateTime>(DateTime.fromISO(serverTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow((current) => current.plus({ seconds: 1 }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // return cleanupFn || null
  }, []);

  useEffect(() => {
    console.log("HELLUREI");
  });

  /*
  useEffect(() => {
    getQuarticles(0, 10).then((ret) => {
      setHeadlines(ret.quarticles);
    });
  }, []);
  */

  /*
  getQuarticles(0, 10).then((ret) => {
    setHeadlines(ret.quarticles);
  });
  */

  return (
    <section>
      <Clock now={now} timezone="Europe/Helsinki" label="Helsinki" />
      <Clock now={now} timezone="America/New_York" label="New York" />
      <Clock now={now} timezone="Africa/Casablanca" label="Casablanca" />

      {headlines.map((headline) => {
        return <Headline key={headline.id} headline={headline} />;
      })}
    </section>
  );
};

export default Headlines;
