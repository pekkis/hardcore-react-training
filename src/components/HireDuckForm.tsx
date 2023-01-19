import { FC, memo } from "react";
import { DuckProspectType, DuckType } from "../services/duck";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  firstName: z.string().min(3, { message: "Required" }),
  lastName: z.string().min(3, { message: "Required" })
});

type FormInputType = z.infer<typeof schema>;

type Props = {
  hireDuck: (prospect: DuckProspectType) => void;
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
      firstName: "Aapeli",
      lastName: "Aargh"
    }
  });

  return (
    <form
      onSubmit={handleSubmit((values, e) => {
        e?.preventDefault();

        const prospect: DuckProspectType = {
          ...values,
          relatedToCEO: true,
          gender: 2,
          id: crypto.randomUUID(),
          birthDay: "2021-07-03",
          isCannibal: false,
          migratesForWinters: false,
          salary: 0,
          isAdmin: false,
          wingedness: "r",
          email: "puuppa@poksy.org"
        };

        console.log("HIRING PROSPECT", prospect);

        hireDuck(prospect);
      })}
    >
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
