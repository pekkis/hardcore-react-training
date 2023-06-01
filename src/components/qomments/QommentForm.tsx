import { NewQommentType, qommentSchema } from "@/services/qomments";
import { FC } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  postQomment: (qomment: NewQommentType) => void;
};

const QommentForm: FC<Props> = ({ postQomment }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<NewQommentType>({
    mode: "onChange",
    resolver: zodResolver(qommentSchema),
    defaultValues: {
      email: "",
      comment: ""
    }
  });

  return (
    <form
      onSubmit={handleSubmit((newComment, e) => {
        e?.preventDefault();
        postQomment(newComment);

        reset();
      })}
    >
      <div>
        <label htmlFor="email">email</label>
        <input {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="email">comment</label>
        <input {...register("comment")} />
        {errors.comment && <span>{errors.comment.message}</span>}
      </div>

      <div>
        <button disabled={!isValid} type="submit">
          postaa kommentti
        </button>
      </div>
    </form>
  );
};

export default QommentForm;
