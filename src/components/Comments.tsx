import { CommentType, getComments, postComment } from "@/services/quarticle";
import { FC, useEffect, useMemo, useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { ascend, descend, prop, sortWith } from "ramda";

type Props = {
  appId: string;
  articleId: string;
};

const commentsSorter = sortWith<CommentType>([descend(prop("publishedAt"))]);

const Comments: FC<Props> = ({ appId, articleId }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  useEffect(() => {
    getComments(appId, articleId).then(setComments);
  }, [appId, articleId]);

  /*
  const sorted = [...comments].sort((a, b) => {
    return new Date(a.publishedAt) - new Date(b.publishedAt);
  });
  */

  const sorted = useMemo(() => {
    return commentsSorter(comments);
  }, [comments]);

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

      {sorted.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </section>
  );
};

export default Comments;
