"use client";

import {
  CommentType,
  NewCommentType,
  getComments,
  postComment
} from "@/services/comments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import Spinner from "../debug/Spinner";
import * as styles from "./Comments.css";
import CommentsForm from "./CommentsForm";
import { sortBy, reverse, pipe } from "remeda";
import Comment from "./Comment";

type Props = {
  quarticleId: string;
};

const Comments: FC<Props> = ({ quarticleId }) => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["comments", quarticleId],
    queryFn: () => {
      return getComments(quarticleId);
    }
  });

  const mutation = useMutation({
    mutationFn: (data: NewCommentType) => {
      return postComment(quarticleId, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", quarticleId] });
    }
  });

  const comments = data || ([] as CommentType[]);

  const sorted = pipe(
    comments,
    sortBy((comment) => {
      return new Date(comment.publishedAt).getTime();
    }),
    reverse()
  );

  return (
    <section className={styles.comments}>
      <h3>Comments for #{quarticleId}</h3>

      <CommentsForm
        postComment={mutation.mutateAsync}
        canPost={!mutation.isPending}
      />

      {isLoading && <Spinner />}

      {sorted.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </section>
  );
};

export default Comments;
