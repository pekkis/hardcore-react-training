"use client";

import {
  NewQommentType,
  QommentType,
  deleteQomment,
  getQomments,
  postQomment
} from "@/services/qomments";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, useRef } from "react";
import Spinner from "../debug/Spinner";
import Qomment from "./Qomment";
import QommentForm from "./QommentForm";

type Props = {
  quarticleId: string;
};

type CommentsViewProps = {
  quarticleId: string;
};

const CommentsView: FC<CommentsViewProps> = ({ quarticleId }) => {
  const client = useQueryClient();
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getQomments(quarticleId);
    },
    queryKey: ["qomments", quarticleId]
  });

  const postQommentMutation = useMutation({
    mutationFn: async (qomment: NewQommentType) => {
      return postQomment(quarticleId, qomment);
    },
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["qomments", quarticleId]
      });
    }
  });

  const deleteQommentMutation = useMutation({
    mutationFn: async (qomment: QommentType) => {
      return deleteQomment(qomment.articleId, qomment.id);
    },
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["qomments", quarticleId]
      });
    }
  });

  return (
    <section>
      <QommentForm postQomment={postQommentMutation.mutate} />

      {isLoading && <Spinner />}

      {data &&
        data.map((qomment) => {
          return (
            <Qomment
              isDeleting={deleteQommentMutation.variables?.id === qomment.id}
              deleteQomment={deleteQommentMutation.mutate}
              key={qomment.id}
              qomment={qomment}
            />
          );
        })}
    </section>
  );
};

const Qomments: FC<Props> = ({ quarticleId }) => {
  const ref = useRef(new QueryClient());

  return (
    <QueryClientProvider client={ref.current}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <section>
        <h3>Qomments for {quarticleId}</h3>

        <CommentsView quarticleId={quarticleId} />
      </section>
    </QueryClientProvider>
  );
};

export default Qomments;
