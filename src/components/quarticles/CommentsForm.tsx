/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import { NewCommentType, newCommentSchema } from "@/services/comments";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import Input from "../duck-ui/Input";

type Props = {
  isEnabled: boolean;
  postComment: (newComment: NewCommentType) => void;
};

const CommentsForm: FC<Props> = ({ postComment, isEnabled }) => {
  const { formState, register, handleSubmit } = useForm({
    mode: "onChange",
    resolver: zodResolver(newCommentSchema),
    defaultValues: {
      email: "",
      comment: ""
    }
  });

  console.log("registrado", register("email"));

  return (
    <form
      onSubmit={handleSubmit((values, e) => {
        postComment(values);
      })}
    >
      <div>
        <label>E-posti</label>
        <Input {...register("email")} />
        {formState.errors.email && (
          <span>{formState.errors.email.message}</span>
        )}
      </div>

      <div>
        <label>Comment</label>
        <Input {...register("comment")} />
        {formState.errors.comment && (
          <span>{formState.errors.comment.message}</span>
        )}
      </div>

      <div>
        <button disabled={!formState.isValid || !isEnabled} type="submit">
          Postaa!
        </button>
      </div>
    </form>
  );
};

export default CommentsForm;
