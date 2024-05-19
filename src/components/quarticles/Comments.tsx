"use client";

import { NewCommentType, getComments, postComment } from "@/services/comments";
import { FC } from "react";
import CommentsForm from "./CommentsForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type Props = {
  quarticleId: string;
};

const Comments: FC<Props> = ({ quarticleId }) => {
  // getComments(quarticleId) <- qommentit
  // postComment('???') <- qommentin postaus

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["articles", quarticleId, "comments"],
    queryFn: () => getComments(quarticleId)
  });

  const mutation = useMutation({
    mutationFn: (newComment: NewCommentType) => {
      return postComment(quarticleId, newComment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles", quarticleId, "comments"]
      });
    }
  });

  return (
    <div>
      <h2>Comments for quarticle #{quarticleId}</h2>

      <CommentsForm
        isEnabled={!mutation.isPending}
        postComment={mutation.mutateAsync}
      />

      {data
        ?.toSorted((a, b) => {
          return -a.publishedAt.localeCompare(b.publishedAt);
        })
        .map((comment) => {
          return (
            <div key={comment.id}>
              [{comment.email}] -- {comment.comment}
            </div>
          );
        })}
    </div>
  );
};

export default Comments;
