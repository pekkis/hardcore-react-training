import Clocks, { ClockConfiguration } from "@/components/Clocks";
import Currencies from "@/components/currencies/Currencies";
import { getQuarticles } from "@/services/quarticle";
import { DateTime } from "luxon";
import Link from "next/link";

const clocks: ClockConfiguration[] = [
  {
    locale: "fi-fi",
    zone: "Europe/Helsinki"
  },
  {
    locale: "ko-kr",
    zone: "Asia/Seoul"
  },
  {
    locale: "sv-se",
    zone: "Europe/Stockholm"
  }
];

export default async function IndexPage() {
  const now = DateTime.local().toUnixInteger();

  const { quarticles, totalQuarticles } = await getQuarticles(0, 10);

  return (
    <div>
      <h1>Kvauppalehti 5000</h1>

      <div>
        {quarticles.map((quarticle) => {
          return (
            <p key={quarticle.id}>
              <Link href={`/a/${quarticle.id}`}>{quarticle.headline}</Link>
            </p>
          );
        })}
      </div>

      <Currencies time={now} />

      <Clocks time={now} clocks={clocks} />
    </div>
  );
}
