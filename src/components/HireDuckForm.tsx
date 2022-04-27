import { FC, memo, useState } from "react";
import { DuckType } from "../services/duck";
import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { createRandomDuck } from "../services/random";
import Button from "./Button";
import useStore from "../services/store";

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

export type Props = {
  hireDuck: (duck: DuckType) => void;
};

const HireDuckForm: FC<Props> = ({ hireDuck }) => {
  const duckIsBeingHired = useStore((store) => store.duckIsBeingHired);

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: ""
        }}
        onSubmit={async (values, { resetForm }) => {
          console.log("values", values);

          const duckHiree: DuckType = {
            ...createRandomDuck(),
            firstName: values.firstName,
            lastName: values.lastName
          };

          console.log("duckHiree", duckHiree);
          const succetore = await hireDuck(duckHiree);

          console.log("SUCCETORE", succetore);

          if (succetore) {
            resetForm();
          }
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
                <Button disabled={!isValid || duckIsBeingHired} type="submit">
                  palkkaa!
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default memo(HireDuckForm);
