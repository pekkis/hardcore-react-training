"use client";

import { NewCommentType, newCommentSchema } from "@/services/comments";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../duck-ui/Input";
import Button from "../duck-ui/Button";

type Props = {
  postComment: (newComment: NewCommentType) => void;
};

const CommentsForm: FC<Props> = ({ postComment }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<NewCommentType>({
    mode: "onChange",
    defaultValues: {
      comment: "",
      email: ""
    },
    resolver: zodResolver(newCommentSchema)
  });

  return (
    <form
      onSubmit={handleSubmit((values, e) => {
        e?.preventDefault();
        postComment(values);
      })}
    >
      <div>
        <label htmlFor="email">email</label>
        <Input {...register("email")} />
        <div>{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="comment">comment</label>
        <Input {...register("comment")} />
        <div>{errors.comment?.message}</div>
      </div>
      <div>
        <Button disabled={!isValid} type="submit">
          Submitore
        </Button>
      </div>
    </form>
  );
};

export default CommentsForm;
