import React from "react";
import personService from "../services/person";
import { Form, Field } from "react-final-form";
import { DateTime } from "luxon";

const required = value => (value ? undefined : "Required");

const mustBeDate = value => {
  const dt = DateTime.fromISO(value);
  return dt.invalid && "Must be a date";
};

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

class HirePersonForm extends React.Component {
  handleSubmit = async values => {
    const { hirePerson } = this.props;
    const newPerson = {
      ...personService.createPerson(),
      ...values
    };
    hirePerson(newPerson);
  };

  render() {
    return (
      <Form
        initialValues={{
          firstName: "Kalle",
          lastName: "Lamanpää"
        }}
        onSubmit={this.handleSubmit}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>First Name</label>
                  <input {...input} type="text" placeholder="First Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="lastName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Last Name</label>
                  <input {...input} type="text" placeholder="Last Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="birthDay"
              validate={composeValidators(required, mustBeDate)}
            >
              {({ input, meta }) => (
                <div>
                  <label>Birthday</label>
                  <input {...input} type="text" placeholder="Birthday" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    );
  }
}

export default HirePersonForm;
