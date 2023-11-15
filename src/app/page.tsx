import Clocks from "@/components/clock/Clocks";

import { DateTime } from "luxon";

export default async function IndexPage() {
  const now = DateTime.utc().toUnixInteger() as number;

  return (
    <div>
      <Clocks serverTime={now} />
    </div>
  );
}
