import { zodResolver } from "@hookform/resolvers/zod";
import { FC, memo, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DuckProspectType } from "../services/duck";
import Button from "./Button";

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

  const firstNameRef = useRef<HTMLInputElement | null>();

  const buttonRef = useRef<HTMLButtonElement | null | undefined>(null);

  useEffect(() => {
    console.log(buttonRef, "BTN REF");
    buttonRef.current?.focus();
  }, [buttonRef.current]);

  const { ref, ...rest } = register("firstName");

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
        <input
          {...rest}
          ref={(e) => {
            ref(e);
            firstNameRef.current = e;
          }}
        />
        {errors.firstName?.message && <span>{errors.firstName.message}</span>}
      </div>
      <div>
        <label>Sukunimi</label>
        <input {...register("lastName")} />
        {errors.lastName?.message && <span>{errors.lastName.message}</span>}
      </div>

      <div>
        <Button ref={buttonRef} disabled={!isValid}>
          palkkaa!
        </Button>
      </div>
    </form>
  );
};

export default memo(HireDuckForm);
