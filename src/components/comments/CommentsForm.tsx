"use client";

import { NewCommentType, commentSchema } from "@/services/comments";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";

type Props = {
  postComment: (comment: NewCommentType) => void;
};

const CommentsForm: FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<NewCommentType>({
    mode: "onChange",
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
      email: ""
    }
  });

  /*
  const emailRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    emailRef.current?.focus();
  }, []);
  */

  return (
    <form
      onSubmit={handleSubmit((data) => {
        // postComment(data);
        console.log("HELLUREI", data);
        props.postComment(data);
      })}
    >
      <div>
        <label htmlFor="email">email</label>
        <Input type="text" {...register("email")} variant="primary" />
        {errors.email?.message && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="comment">kommentti</label>
        <input type="text" {...register("comment")} />
        {errors.comment?.message && <span>{errors.comment.message}</span>}
      </div>

      <div>
        <button type="submit" disabled={!isValid}>
          submitore
        </button>
      </div>
    </form>
  );
};

export default CommentsForm;
