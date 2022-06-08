import { FC } from "react";
import { DuckProspectType } from "../services/duck";
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
  hireDuck: (prospect: DuckProspectType) => void;
};

const HireDuckForm: FC<Props> = ({ hireDuck }) => {
  return (
    <Formik
      initialValues={{
        firstName: "Benedictus",
        lastName: "Lohiposki"
      }}
      onSubmit={(values) => {
        const prospect: DuckProspectType = {
          ...createRandomDuck(),
          ...values
        };

        hireDuck(prospect);
      }}
      validateOnMount
      validationSchema={schema}
    >
      {({ isValid }) => {
        return (
          <Form>
            <div>
              <label htmlFor="firstName">etunimi</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">sukunimi</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" />
            </div>
            <div>
              <button type="submit" disabled={!isValid}>
                palkkaa
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default HireDuckForm;
