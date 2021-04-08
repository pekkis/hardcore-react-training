import { FC } from "react";
import { GenderType, PersonInterface } from "../types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { v4 } from "uuid";
import Button from "./Button";
import faker from "faker";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

type Props = {
  hirePerson: (person: Omit<PersonInterface, "age">) => void;
};

const HirePerson: FC<Props> = ({ hirePerson }) => {
  return (
    <section>
      <p>Kyrvän perse</p>

      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          const thePerson = {
            ...values,
            birthDay: faker.date.past(70, "2006-01-01").toString(),
            id: v4(),
            gender: faker.datatype.number(2) as GenderType,
            isAdmin: false
          };
          hirePerson(thePerson);
        }}
        initialValues={{
          firstName: "",
          lastName: ""
        }}
      >
        {({ isValid }) => {
          return (
            <Form>
              <div>
                <label htmlFor="firstName">Etunimi</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />
              </div>

              <div>
                <label htmlFor="lastName">Sukunimi</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />
              </div>

              <div>
                <Button disabled={!isValid} type="submit">
                  Hire
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default HirePerson;
