import React, { FunctionComponent } from "react";
import { PersonType } from "./Person";
import { Formik, Field, Form } from "formik";
import uuid from "uuid";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
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
  hirePerson: (person: PersonType) => void;
};

const HirePersonForm: FunctionComponent<Props> = props => {
  const { hirePerson } = props;
  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "Abel",
          lastName: "Abrahamsson"
        }}
        onSubmit={values => {
          const newPerson = {
            ...values,
            age: 25,
            gender: "f",
            id: uuid()
          };
          hirePerson(newPerson);
        }}
      >
        {({ errors, isValid }) => {
          return (
            <Form>
              <div
                css={{
                  margin: "1em 0"
                }}
              >
                <Label htmlFor="firstName">Etunimi</Label>
                <Field as={Input} type="text" name="firstName" />
                {errors.firstName && <span>{errors.firstName}</span>}
              </div>
              <div
                css={{
                  margin: "1em 0"
                }}
              >
                <Label htmlFor="lastName">Sukunimi</Label>
                <Field as={Input} type="text" name="lastName" />
                {errors.lastName && <span>{errors.lastName}</span>}
              </div>
              <div
                css={{
                  margin: "1em 0"
                }}
              >
                <Button disabled={!isValid} type="submit">
                  Palkkaa!
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default HirePersonForm;
