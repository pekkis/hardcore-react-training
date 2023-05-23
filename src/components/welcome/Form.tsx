"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import styles from "./Form.module.css";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  age: z.number().min(10)
});

type Lusso = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<Lusso>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      age: 10,
      name: "Benedictus McDuck"
    }
  });

  return (
    <div className={styles.form}>
      <h3>Rate my poo emoji</h3>

      <p className={styles.poo}>💩</p>

      <form
        onSubmit={handleSubmit((d, e) => {
          e?.preventDefault();
          console.log(d);
        })}
      >
        <div>
          <input {...register("name")} />
          {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>

        <div>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age?.message && <p>{errors.age?.message}</p>}
        </div>
        <input disabled={!isValid} type="submit" />
      </form>
    </div>
  );
};

export default Form;
