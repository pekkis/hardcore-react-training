import { QommentType } from "@/services/qomments";
import { DateTime } from "luxon";
import { FC } from "react";
import * as style from "./Qomment.css";
import Button from "../Button";

type Props = {
  qomment: QommentType;
  deleteQomment: (qomment: QommentType) => void;
  isDeleting?: boolean;
};

const Qomment: FC<Props> = ({ qomment, deleteQomment, isDeleting = false }) => {
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

      <div>
        <Button
          disabled={isDeleting}
          onClick={() => {
            deleteQomment(qomment);
          }}
        >
          poista
        </Button>
      </div>
    </div>
  );
};

export default Qomment;
