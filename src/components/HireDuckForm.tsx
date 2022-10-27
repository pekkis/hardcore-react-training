import { FC, useEffect, useRef, useState } from "react";
import { DuckProspectType } from "../services/duck";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { v4 } from "uuid";
import Button from "./Button";

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
  hireDuck: (prospect: DuckProspectType) => void;
};

const HireDuckForm: FC<Props> = ({ hireDuck }) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log("REF", ref);
    ref.current?.focus();
  }, []);

  return (
    <Formik
      initialValues={{
        firstName: "Beneditto",
        lastName: "Lohiposki"
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values, "Form submit");
        const prospect: DuckProspectType = {
          ...values,
          id: v4(),
          email: "fake@email.com",
          salary: 0,
          isAdmin: false,
          birthDay: "2022-07-01",
          wingedness: "r",
          gender: 0,
          migratesForWinters: false,
          isCannibal: true,
          relatedToCEO: true
        };

        hireDuck(prospect);
        resetForm();
      }}
      validateOnMount
      validationSchema={schema}
    >
      {({ values, isValid }) => {
        return (
          <Form>
            <div>
              <label>firstName</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" />
            </div>
            <div>
              <label>lastName</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" />
            </div>

            <div>
              <Button disabled={!isValid} type="submit" ref={ref}>
                palkkaa!
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default HireDuckForm;
