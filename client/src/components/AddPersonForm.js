import React from "react";
import { Field, reduxForm } from 'redux-form';

const AddPersonForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>

      <Field
        name="firstName"
        placeholder="fn"
        type="text"
        component="input"
      />

      <Field
        name="lastName"
        placeholder="ln"
        type="text"
        component="input"
      />
      <button type="submit">Submitore</button>
    </form>
  );
}

export default reduxForm({
  form: 'person'
})(AddPersonForm);
