import { FC, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema, NewCommentType } from "@/services/comments";
import { handler } from "@/components/quarticle/helper";
import { useFormState } from "react-dom";

type Props = {
  postComment: (comment: NewCommentType) => void;
};

export const CommentsForm: FC<Props> = ({ postComment }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<NewCommentType>({
    mode: "all",
    resolver: zodResolver(commentSchema),
    defaultValues: {
      email: "",
      comment: ""
    }
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        postComment(values);
      })}
    >
      <div>
        <label>Email</label>
        <input type="text" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>First name</label>
        <input type="text" {...register("comment")} />
        {errors.comment && <p>{errors.comment.message}</p>}
      </div>

      <button disabled={!isValid} type="submit">
        Submitore
      </button>
    </form>
  );
};
