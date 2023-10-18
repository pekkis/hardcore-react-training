"use client";

import useTime from "@/hooks/useTime";
import { FC } from "react";
import Clock from "./Clock";

type Props = {
  initialDate: string;
};

const clockInstances = [
  {
    title: "Helsinki",
    zone: "Europe/Helsinki",
    locale: "fi-fi"
  },
  {
    title: "Tokio",
    zone: "Asia/Tokyo",
    locale: "ja-jp"
  },
  {
    title: "Montreal",
    zone: "America/Montreal",
    locale: "fr-ca"
  },
  {
    title: "New York",
    zone: "America/New_York",
    locale: "en-gb"
  }
];

const Clocks: FC<Props> = ({ initialDate }) => {
  const now = useTime(initialDate);

  return (
    <section>
      {clockInstances.map((ci) => {
        return (
          <Clock
            key={ci.title}
            now={now}
            title={ci.title}
            zone={ci.zone}
            locale={ci.locale}
          />
        );
      })}
    </section>
  );
};

export default Clocks;
