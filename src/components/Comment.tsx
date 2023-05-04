import { CommentType } from "@/services/quarticle";
import { FC } from "react";
import { commentClass, emailClass } from "./Comment.css";

type Props = {
  comment: CommentType;
};

const Comment: FC<Props> = ({ comment }) => {
  return (
    <div className={commentClass}>
      <div className={emailClass}>
        {comment.email} ({comment.publishedAt})
      </div>
      <div>{comment.comment}</div>
    </div>
  );
};

export default Comment;
