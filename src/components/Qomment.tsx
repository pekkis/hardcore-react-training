import { Qomment } from "@/services/quarticle";
import { FC } from "react";
import { commentClass, emailClass } from "./Qomment.css";

type Props = {
  comment: Qomment;
};

const Qomment: FC<Props> = ({ comment }) => {
  return (
    <div className={commentClass}>
      <div className={emailClass}>
        {comment.email} ({comment.publishedAt})
      </div>
      <div>{comment.comment}</div>
    </div>
  );
};

export default Qomment;
