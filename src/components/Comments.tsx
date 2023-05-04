import {
  CommentType,
  NewCommentType,
  getComments,
  postComment
} from "@/services/quarticle";
import { FC, useEffect, useMemo, useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { ascend, descend, prop, sortWith } from "ramda";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "./debug/Spinner";

type Props = {
  appId: string;
  articleId: string;
};

const commentsSorter = sortWith<CommentType>([descend(prop("publishedAt"))]);

const Comments: FC<Props> = ({ appId, articleId }) => {
  const client = useQueryClient();

  const { data, isLoading, isError, isFetched } = useQuery({
    queryFn: async () => {
      return getComments(appId, articleId);
    },
    queryKey: ["article", appId, articleId, "comments"]
  });

  const mutation = useMutation({
    mutationFn: async (newComment: NewCommentType) => {
      await postComment(appId, articleId, newComment);
      client.invalidateQueries({
        queryKey: ["article", appId, articleId, "comments"]
      });
      // client.refetchQueries([["article", appId, articleId, "comments"]]);
    }
  });

  console.log("TUSSI", {
    data,
    isLoading,
    isError,
    isFetched
  });

  if (isLoading) {
    return <Spinner />;
  }

  const sorted = commentsSorter(data || []);

  /*
  const [comments, setComments] = useState<CommentType[]>([]);
  useEffect(() => {
    console.log("HAETAAN COMMENTORES");
    getComments(appId, articleId).then(setComments);
  }, [appId, articleId]);
  */

  /*
  const sorted = [...comments].sort((a, b) => {
    return new Date(a.publishedAt) - new Date(b.publishedAt);
  });
  */

  return (
    <section>
      <h3>COMMENTS SECTION</h3>

      <CommentForm
        postComment={async (newComment) => {
          mutation.mutate(newComment);
        }}
      />

      {sorted.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </section>
  );
};

export default Comments;
