import { CommentType, getComments, postComment } from "@/services/quarticle";
import { FC, useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

type Props = {
  appId: string;
  articleId: string;
};

const Comments: FC<Props> = ({ appId, articleId }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  useEffect(() => {
    getComments(appId, articleId).then(setComments);
  }, [appId, articleId]);

  return (
    <section>
      <h3>COMMENTS SECTION</h3>

      <CommentForm
        postComment={async (newComment) => {
          console.log("THE COMMENT", newComment);
          const comment = await postComment(appId, articleId, newComment);
          setComments((oldComments) => [comment, ...oldComments]);
        }}
      />

      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </section>
  );
};

export default Comments;
