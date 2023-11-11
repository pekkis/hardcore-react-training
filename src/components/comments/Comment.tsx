import { CommentType } from "@/services/comments";
import { FC } from "react";
import * as styles from "./Comment.css";

type Props = {
  comment: CommentType;
};

const Comment: FC<Props> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div>
        <strong>{comment.email}</strong>
      </div>
      <div>{comment.comment}</div>
    </div>
  );
};

export default Comment;
