import { FunctionComponent, useState } from "react";
import { PersonInterface } from "../types";
import styles from "./HirePersonForm.module.pcss";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "./Button";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
});

export type HireablePerson = Omit<PersonInterface, "id">;

type Props = {
  hirePerson: (person: HireablePerson) => void;
};

const HirePersonForm: FunctionComponent<Props> = (props) => {
  const { hirePerson } = props;

  return (
    <div className={styles.form}>
      <Formik
        onSubmit={(values) => {
          console.log(values);
          hirePerson(values);
        }}
        initialValues={{
          firstName: "",
          lastName: "",
          email: ""
        }}
        validationSchema={schema}
      >
        {({ isValid }) => {
          return (
            <Form>
              <div>
                <label htmlFor="firstName">Firstname</label>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" />
              </div>

              <div>
                <label htmlFor="lastName">Lastname</label>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" />
              </div>

              <Button disabled={!isValid} type="submit">
                Submitoore
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default React.memo(HirePersonForm);
