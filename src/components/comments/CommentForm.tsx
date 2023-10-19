"use client";

import { NewCommentType, commentSchema } from "@/services/comments";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
// import Button from "../duck-ui/Button";
// import Input from "../duck-ui/Input";

type Props = {
  postComment: (comment: NewCommentType) => void;
};

const CommentsForm: FC<Props> = ({ postComment, handleReset }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<NewCommentType>({
    mode: "onChange",
    resolver: zodResolver(commentSchema),
    defaultValues: {
      email: "",
      comment: ""
    }
  });

  // todo: unique ids

  return (
    <form
      onSubmit={handleSubmit((data, event) => {
        event?.preventDefault();
        console.log("DATA", data);

        postComment(data);

        handleReset(reset);
      })}
    >
      <div>
        <label htmlFor="name">sähköposti</label>
        <input {...register("email")} />
        {errors.email?.message && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="comment">commentti</label>
        <textarea {...register("comment")} />
        {errors.comment?.message && <span>{errors.comment.message}</span>}
      </div>

      <div>
        <button disabled={!isValid} type="submit">
          lähetä commentore
        </button>
      </div>
    </form>
  );
};

export default CommentsForm;
