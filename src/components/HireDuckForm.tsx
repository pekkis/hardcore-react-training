import { FC, memo, useState } from "react";
import { DuckType } from "../services/duck";
import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { createRandomDuck } from "../services/random";

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
  hireDuck: (duck: DuckType) => void;
};

type DuckForm = {
  firstName: string;
  lastName: string;
};

const HireDuckForm: FC<Props> = ({ hireDuck }) => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: ""
        }}
        onSubmit={async (values) => {
          console.log("values", values);

          const duckHiree: DuckType = {
            ...createRandomDuck(),
            firstName: values.firstName,
            lastName: values.lastName
          };

          console.log("duckHiree", duckHiree);
          hireDuck(duckHiree);
        }}
        validationSchema={schema}
        validateOnMount={true}
      >
        {({ isValid }) => {
          return (
            <Form>
              <div>
                <label htmlFor="firstName">first name</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" />
              </div>
              <div>
                <label htmlFor="lastName">last name</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" />
              </div>

              <div>
                <button disabled={!isValid} type="submit">
                  palkkaa!
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default memo(HireDuckForm);
