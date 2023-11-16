"use client";

import { FC } from "react";
import CommentsForm from "./CommentsForm";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { NewCommentType, getComments, postComment } from "@/services/comments";
import { DateTime } from "luxon";

type Props = {
  quarticleId: string;
};

const Comments: FC<Props> = ({ quarticleId }) => {
  const { data: comments } = useQuery({
    queryKey: ["quarticle", quarticleId, "comments"],
    queryFn: () => getComments(quarticleId)
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newComment: NewCommentType) =>
      postComment(quarticleId, newComment),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["quarticle", quarticleId, "comments"]
      });
    }
  });

  if (!comments) {
    return null;
  }

  const sorted = comments.toSorted((a, b) => {
    return (
      DateTime.fromISO(b.publishedAt).toUnixInteger() -
      DateTime.fromISO(a.publishedAt).toUnixInteger()
    );
  });

  return (
    <div>
      <h3>Qomments for {quarticleId}</h3>

      <CommentsForm postComment={mutation.mutateAsync} />

      <div>
        {sorted.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.publishedAt} --- {comment.comment}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
