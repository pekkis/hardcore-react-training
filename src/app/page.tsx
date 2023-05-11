import Clocks from "@/components/Clocks";
import QuarticleList from "@/components/QuarticleList";
import { getQuarticles } from "@/services/quarticle";
import { DateTime } from "luxon";
import { Metadata } from "next";

export const revalidate = 5;

export const metadata: Metadata = {
  title: "Kvauppalehti"
};

export default async function Page() {
  const now = DateTime.utc();

  const quarticles = await getQuarticles();
  return (
    <>
      <h1>Kvauppalehti</h1>

      <p>
        Tervetuloa Kvauppalehden kotskasivuille. Kvauppalehti on suosituin
        bisneslehti ankoille ja ankanmielisille.
      </p>

      <h2>Aika on rahaa</h2>

      <Clocks
        now={now.toISO() as string}
        zones={[
          {
            title: "New York",
            zone: "America/New_York",
            locale: "en-US"
          },
          {
            title: "Lontoo",
            zone: "Europe/London",
            locale: "en-UK"
          },

          {
            title: "Helsinki",
            zone: "Europe/Helsinki",
            locale: "fi-FI"
          },
          {
            title: "Tokio",
            zone: "Asia/Tokyo",
            locale: "ja-JP"
          }
        ]}
      ></Clocks>

      <h2>Tuoreimmat kvartikkelit</h2>

      <QuarticleList quarticles={quarticles} />
    </>
  );
}
