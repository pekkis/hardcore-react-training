"use client";

import { NewCommentType, getComments, postComment } from "@/services/comments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import Spinner from "../debug/Spinner";
import * as styles from "./Comments.css";
import CommentsForm from "./CommentsForm";
import { reverse, sortBy } from "ramda";
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

  console.log("MUTATION IDLE", mutation.isIdle);

  const sorted = reverse(
    sortBy((c) => {
      return c.publishedAt;
    }, data || [])
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
