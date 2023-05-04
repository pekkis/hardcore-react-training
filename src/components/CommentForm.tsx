import { NewCommentType, commentSchema } from "@/services/quarticle";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  postComment: (comment: NewCommentType) => void;
};

const CommentForm: FC<Props> = ({ postComment }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
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
      })}
    >
      <div>
        <label>sähköposti</label>
        <input {...register("email")} />
        {errors.email?.message && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>commentti</label>
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

export default CommentForm;
