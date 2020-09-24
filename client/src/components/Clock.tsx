import React, { FunctionComponent } from "react";
import styles from "./Clock.module.pcss";
import { DateTime } from "luxon";

type Props = {
  time: DateTime;
};

const Clock: FunctionComponent<Props> = (props) => {
  const { time } = props;
  return (
    <div className={styles.clock}>
      The time is: {time.toLocaleString(DateTime.TIME_24_WITH_SHORT_OFFSET)}
    </div>
  );
};

export default Clock;
