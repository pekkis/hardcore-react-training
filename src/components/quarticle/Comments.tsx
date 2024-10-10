"use client";

import { CommentsForm } from "@/components/quarticle/CommentsForm";
import { getComments, NewCommentType, postComment } from "@/services/comments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";

type Props = {
  quarticleId: string;
};

export const Comments: FC<Props> = ({ quarticleId }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["comments", quarticleId],
    queryFn: async () => {
      return getComments(quarticleId);
    }
  });

  const mutation = useMutation({
    mutationFn: (comment: NewCommentType) => {
      return postComment(quarticleId, comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", quarticleId]
      });
    }
  });

  return (
    <div>
      <h3>Comments for {quarticleId}</h3>

      <CommentsForm postComment={mutation.mutateAsync} />

      {data && (
        <div>
          {data.map((comment) => {
            return (
              <div key={comment.id}>
                {comment.email} - {comment.comment}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
