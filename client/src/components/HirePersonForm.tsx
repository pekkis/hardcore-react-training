import { FC, useState } from "react";
import { PersonType } from "./App";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "./Button";
import { v4 } from "uuid";

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

const HirePersonForm: FC<Props> = ({ hirePerson }) => {
  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      initialValues={{
        firstName: "",
        lastName: ""
      }}
      onSubmit={(values) => {
        console.log("values", values);

        const newHire: PersonType = {
          ...values,
          id: v4(),
          age: 25,
          gender: 0,
          relatedToCEO: true
        };

        hirePerson(newHire);
      }}
    >
      {({ values, isValid }) => {
        return (
          <Form>
            <div>
              <label>first name</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" />
            </div>
            <div>
              <label>last name</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" />
            </div>

            <div>
              <Button disabled={!isValid} type="submit">
                Hire!
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default HirePersonForm;
