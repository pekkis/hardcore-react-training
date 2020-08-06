import { FunctionComponent } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PersonInterface } from "../types";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import Button from "./Button";

const HirePersonSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

interface Props {
  hirePerson: (person: PersonInterface) => void;
}

const HirePersonForm: FunctionComponent<Props> = ({ hirePerson }) => {
  return (
    <Formik
      validationSchema={HirePersonSchema}
      initialValues={{
        firstName: "Gaylord",
        lastName: "Lohiposki",
        gender: "m",
        age: 29
      }}
      onSubmit={(values) => {
        const newPerson = {
          ...values,
          id: uuid(),
          isAdmin: false
        };

        hirePerson(newPerson as PersonInterface);
      }}
    >
      {() => {
        return (
          <Form>
            <div>
              <label htmlFor="firstName">Etunimi</label>
              <Field name="firstName" />
              <ErrorMessage name="firstName" />
            </div>

            <div>
              <label htmlFor="lastName">Sukunimi</label>
              <Field name="lastName" />
              <ErrorMessage name="lastName" />
            </div>

            <div>
              <label htmlFor="gender">Sukupuoli</label>
              <Field name="gender" as="select">
                <option value="m">m</option>
                <option value="f">f</option>
                <ErrorMessage name="gender" />
              </Field>
            </div>

            <div>
              <Button type="submit">palkkaa</Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default HirePersonForm;
