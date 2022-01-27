import { VFC, memo } from "react";
import { DuckProspectType } from "../services/duck";
import * as Yup from "yup";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { v4 } from "uuid";
import Button from "./Button";

type Props = {
  hireDuck: (prospect: DuckProspectType) => void;
};

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

/*
const Hellurei = ({ children }) => {
  const name = "PEXI";

  return <div>{children({ name })}</div>;
};
*/

const HireDuckForm: VFC<Props> = ({ hireDuck }) => {
  return (
    <Formik
      validationSchema={schema}
      validateOnMount
      initialValues={{
        firstName: "",
        lastName: ""
      }}
      onSubmit={(values) => {
        console.log("values", values);

        const prospect: DuckProspectType = {
          ...values,
          id: v4(),
          gender: 1,
          migratesForWinters: false,
          relatedToCEO: false,
          birthDay: "2020-06-13",
          wingedness: "r",
          isAdmin: false,
          email: "faker@fake.com"
          // age: 5
        };

        hireDuck(prospect);
      }}
    >
      {(props) => {
        const { isValid } = props;

        return (
          <Form>
            <div>
              <label htmlFor="firstName">first name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">last name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" />
            </div>

            <Button disabled={!isValid} type="submit">
              submitore
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default memo(HireDuckForm);
