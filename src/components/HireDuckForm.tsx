import { FC, memo } from "react";
import { DuckType } from "../services/duck";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  firstName: z.string().min(3, { message: "Required" }),
  lastName: z.string().min(3, { message: "Required" })
});

type FormInputType = z.infer<typeof schema>;

type Props = {
  hireDuck: (prospect: DuckType) => void;
};

const HireDuckForm: FC<Props> = ({ hireDuck }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormInputType>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "Benedictus",
      lastName: "McDuck"
    }
  });

  console.log(register("firstName"));

  return (
    <form>
      <div>
        <label>Etunimi</label>
        <input {...register("firstName")} />
        {errors.firstName?.message && <span>{errors.firstName.message}</span>}
      </div>
      <div>
        <label>Sukunimi</label>
        <input {...register("lastName")} />
        {errors.lastName?.message && <span>{errors.lastName.message}</span>}
      </div>

      <div>
        <button disabled={!isValid}>palkkaa!</button>
      </div>
    </form>
  );
};

export default memo(HireDuckForm);
