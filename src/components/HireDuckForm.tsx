import { FC, memo } from "react";
import { DuckProspectType } from "../services/duck";
import { Form, Field, Formik, ErrorMessage } from "formik";
import Input from "./Input";
import { v4 } from "uuid";
import Button from "./Button";
import * as Yup from "yup";
import styles from "./HireDuckForm.module.css";

const prospectSchema = Yup.object().shape({
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
  hireDuck: (duck: DuckProspectType) => void;
  duckIsBeingHired: boolean;
};

const HireDuckForm: FC<Props> = ({ hireDuck, duckIsBeingHired }) => {
  return (
    <Formik
      validateOnMount={true}
      validationSchema={prospectSchema}
      initialValues={{
        firstName: "",
        lastName: ""
      }}
      onSubmit={async (values) => {
        console.log("FORM SUBMIT VALUS", values);
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
        };

        hireDuck(prospect);
      }}
    >
      {({ isValid }) => {
        return (
          <Form>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="firstName">
                First name
              </label>
              <Field id="firstName" name="firstName" as={Input} />
              <ErrorMessage name="firstName" />
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="lastName">
                Last name
              </label>
              <Field id="lastName" name="lastName" as={Input} />
              <ErrorMessage name="lastName" />
            </div>

            <div className={styles.group}>
              <Button disabled={!isValid || duckIsBeingHired} type="submit">
                hire a duck
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default memo(HireDuckForm);
