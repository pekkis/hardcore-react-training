"use client";

/* eslint-disable @typescript-eslint/ban-ts-comment */

import { FC } from "react";
import CommentsForm from "./CommentForm";
import { NewCommentType, getComments, postComment } from "@/services/comments";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Spinner from "../debug/Spinner";

type Props = {
  quarticleId: string;
};

const Comments: FC<Props> = ({ quarticleId }) => {
  const client = useQueryClient();

  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getComments(quarticleId);
    },
    queryKey: ["comments", quarticleId]
  });

  const mutation = useMutation({
    mutationFn: (comment: NewCommentType) => {
      return postComment(quarticleId, comment);
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["comments", quarticleId] });
    }
  });

  /*
  const handlePostComment = (comment: NewCommentType) => {
    postComment(quarticleId, comment);
  };
  */

  return (
    <div>
      <h3>comments for {quarticleId}</h3>

      <CommentsForm postComment={mutation.mutateAsync} />

      {isLoading && <Spinner />}

      {data
        ?.toSorted((a, b) => {
          // @ts-ignore
          return a!.publishedAt < b!.publishedAt ? 1 : -1;
        })
        .map((comment) => {
          console.log("COMMENT", comment);
          return (
            <div key={comment.id}>
              <div>{comment.publishedAt}</div>
              <div>{comment.comment}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Comments;
