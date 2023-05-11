"use client";

import { NewQommentType, getComments, postComment } from "@/services/quarticle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import CommentForm from "./CommentForm";
import Qomment from "./Qomment";
import Spinner from "./Spinner";

type Props = {
  appId: string;
  quarticleId: string;
  qomments: Qomment[];
};

const ClientQomments: FC<Props> = ({ appId, quarticleId, qomments }) => {
  const client = useQueryClient();

  const { data, isLoading, isError, isFetched } = useQuery({
    queryFn: async () => {
      return getComments(appId, quarticleId);
    },
    queryKey: ["article", appId, quarticleId, "comments"],
    initialData: qomments
  });

  const mutation = useMutation({
    mutationFn: async (newComment: NewQommentType) => {
      await postComment(appId, quarticleId, newComment);
      client.invalidateQueries({
        queryKey: ["article", appId, quarticleId, "comments"]
      });
    }
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <h3>COMMENTS SECTION</h3>

      <CommentForm
        postComment={async (newComment) => {
          mutation.mutate(newComment);
        }}
      />

      {data.map((comment) => {
        return <Qomment key={comment.id} comment={comment} />;
      })}
    </section>
  );
};

export default ClientQomments;
