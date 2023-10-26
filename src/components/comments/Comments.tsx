"use client";

import { FC } from "react";
import CommentsForm from "./CommentsForm";
import { NewCommentType } from "@/services/comments";

const Comments: FC = () => {
  const postComment = (comment: NewCommentType): void => {
    console.log("POSTING NEW COMMENT", comment);
  };

  return (
    <div>
      <h2>Comments for this article!</h2>
      <CommentsForm postComment={postComment} />
    </div>
  );
};

export default Comments;
