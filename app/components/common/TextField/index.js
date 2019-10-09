import React from 'react';
import { object } from 'prop-types';
import { ErrorMessage } from 'formik';

const TextField = ({ field }) => (
  <>
    <p>{field.name}</p>
    <input
      type="text"
      {...field}
    />
    <ErrorMessage name={field.name} />
  </>
);

export default TextField;

TextField.propTypes = {
  field: object.isRequired,
};
