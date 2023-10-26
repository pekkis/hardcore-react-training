import Clocks, { ClockConfiguration } from "@/components/Clocks";
import Currencies from "@/components/currencies/Currencies";
import { DateTime } from "luxon";

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

  return (
    <div>
      <h1>Kvauppalehti 5000</h1>

      <Currencies time={now} />

      <Clocks time={now} clocks={clocks} />
    </div>
  );
}
