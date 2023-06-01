import { QommentType } from "@/services/qomments";
import { DateTime } from "luxon";
import { FC } from "react";
import * as style from "./Qomment.css";

type Props = {
  qomment: QommentType;
};

const Qomment: FC<Props> = ({ qomment }) => {
  return (
    <div className={style.qomment}>
      <div>
        {qomment.email} (
        {DateTime.fromISO(qomment.publishedAt)
          .setLocale("fi-FI")
          .toLocaleString({
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
          })}
        )
      </div>
      <div>{qomment.comment}</div>
    </div>
  );
};

export default Qomment;
